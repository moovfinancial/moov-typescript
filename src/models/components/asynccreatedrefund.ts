/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Amount,
  Amount$inboundSchema,
  Amount$Outbound,
  Amount$outboundSchema,
} from "./amount.js";

/**
 * Asynchronous refund response
 */
export type AsyncCreatedRefund = {
  refundID: string;
  createdOn: Date;
  amount: Amount;
};

/** @internal */
export const AsyncCreatedRefund$inboundSchema: z.ZodType<
  AsyncCreatedRefund,
  z.ZodTypeDef,
  unknown
> = z.object({
  refundID: z.string(),
  createdOn: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  amount: Amount$inboundSchema,
});

/** @internal */
export type AsyncCreatedRefund$Outbound = {
  refundID: string;
  createdOn: string;
  amount: Amount$Outbound;
};

/** @internal */
export const AsyncCreatedRefund$outboundSchema: z.ZodType<
  AsyncCreatedRefund$Outbound,
  z.ZodTypeDef,
  AsyncCreatedRefund
> = z.object({
  refundID: z.string(),
  createdOn: z.date().transform(v => v.toISOString()),
  amount: Amount$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AsyncCreatedRefund$ {
  /** @deprecated use `AsyncCreatedRefund$inboundSchema` instead. */
  export const inboundSchema = AsyncCreatedRefund$inboundSchema;
  /** @deprecated use `AsyncCreatedRefund$outboundSchema` instead. */
  export const outboundSchema = AsyncCreatedRefund$outboundSchema;
  /** @deprecated use `AsyncCreatedRefund$Outbound` instead. */
  export type Outbound = AsyncCreatedRefund$Outbound;
}

export function asyncCreatedRefundToJSON(
  asyncCreatedRefund: AsyncCreatedRefund,
): string {
  return JSON.stringify(
    AsyncCreatedRefund$outboundSchema.parse(asyncCreatedRefund),
  );
}

export function asyncCreatedRefundFromJSON(
  jsonString: string,
): SafeParseResult<AsyncCreatedRefund, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AsyncCreatedRefund$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AsyncCreatedRefund' from JSON`,
  );
}
