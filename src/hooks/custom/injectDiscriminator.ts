import { isPlainObject } from "../../lib/is-plain-object.js";
import { AsyncTransfer$inboundSchema } from "../../models/components/asynctransfer.js";
import { CreatedTransfer$inboundSchema } from "../../models/components/createdtransfer.js";
import { CreateTransferResponseType } from "../../models/components/createtransferresponsetype.js";
import { Transfer$inboundSchema } from "../../models/components/transfer.js";
import type { AfterSuccessContext, AfterSuccessHook } from "../types.js";

export default class InjectDiscriminator implements AfterSuccessHook {
  /**
   * A hook that is called after the SDK receives a response. The hook can
   * introduce instrumentation code such as logging, tracing and metrics or
   * modify the response before it is handled or throw an error to stop the
   * response from being handled.
   */
  async afterSuccess(
    hookCtx: AfterSuccessContext,
    response: Response,
  ): Promise<Response> {
    if (hookCtx.operationID === "createTransfer") {
      return _injectCreateTransferDiscriminator(response);
    }

    return response;
  }
}

export async function _injectCreateTransferDiscriminator(
  response: Response,
): Promise<Response> {
  // Clone the response to leave the original body untouched
  const responseClone = response.clone();

  const data: { _type: CreateTransferResponseType } =
    await responseClone.json();

  if (!isPlainObject(data)) {
    return response;
  }

  if (response.status === 202) {
    const isTransfer = Transfer$inboundSchema.safeParse({
      ...data,
      _type: CreateTransferResponseType.Transfer,
    }).success;

    if (isTransfer) {
      const newData = {
        ...data,
        _type: CreateTransferResponseType.Transfer,
      };
      return new Response(JSON.stringify(newData), response);
    }
  }

  if (response.status === 201) {
    const isAsyncTransfer = AsyncTransfer$inboundSchema.safeParse({
      ...data,
      _type: CreateTransferResponseType.AsyncTransfer,
    }).success;

    if (isAsyncTransfer) {
      const newData = {
        ...data,
        _type: CreateTransferResponseType.AsyncTransfer,
      };
      return new Response(JSON.stringify(newData), response);
    }
  }

  if (response.status === 200) {
    const createdTransferParse = CreatedTransfer$inboundSchema.safeParse({
      ...data,
      _type: CreateTransferResponseType.CreatedTransfer,
    });

    if (
      createdTransferParse.success &&
      Object.keys(createdTransferParse.data).length > 3
    ) {
      const newData = {
        ...data,
        _type: CreateTransferResponseType.CreatedTransfer,
      };
      return new Response(JSON.stringify(newData), response);
    }

    const isAsyncTransfer = AsyncTransfer$inboundSchema.safeParse({
      ...data,
      _type: CreateTransferResponseType.AsyncTransfer,
    }).success;

    if (isAsyncTransfer) {
      const newData = {
        ...data,
        _type: CreateTransferResponseType.AsyncTransfer,
      };
      return new Response(JSON.stringify(newData), response);
    }
  }

  // Nothing matched 😬
  return response;
}
