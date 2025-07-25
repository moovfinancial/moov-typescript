/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { MoovError } from "./mooverror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type UpdateUnderwritingErrorError = {
  averageMonthlyTransactionVolume?: string | undefined;
  averageTransactionSize?: string | undefined;
  maxTransactionSize?: string | undefined;
  volumeByCustomerType?: components.VolumeByCustomerTypeError | undefined;
  cardVolumeDistribution?: components.CardVolumeDistributionError | undefined;
  fulfillment?: components.FulfillmentDetailsError | undefined;
};

export type UpdateUnderwritingErrorData = {
  error: UpdateUnderwritingErrorError;
};

export class UpdateUnderwritingError extends MoovError {
  error: UpdateUnderwritingErrorError;

  /** The original data that was passed to this error instance. */
  data$: UpdateUnderwritingErrorData;

  constructor(
    err: UpdateUnderwritingErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "UpdateUnderwritingError";
  }
}

/** @internal */
export const UpdateUnderwritingErrorError$inboundSchema: z.ZodType<
  UpdateUnderwritingErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  averageMonthlyTransactionVolume: z.string().optional(),
  averageTransactionSize: z.string().optional(),
  maxTransactionSize: z.string().optional(),
  volumeByCustomerType: components.VolumeByCustomerTypeError$inboundSchema
    .optional(),
  cardVolumeDistribution: components.CardVolumeDistributionError$inboundSchema
    .optional(),
  fulfillment: components.FulfillmentDetailsError$inboundSchema.optional(),
});

/** @internal */
export type UpdateUnderwritingErrorError$Outbound = {
  averageMonthlyTransactionVolume?: string | undefined;
  averageTransactionSize?: string | undefined;
  maxTransactionSize?: string | undefined;
  volumeByCustomerType?:
    | components.VolumeByCustomerTypeError$Outbound
    | undefined;
  cardVolumeDistribution?:
    | components.CardVolumeDistributionError$Outbound
    | undefined;
  fulfillment?: components.FulfillmentDetailsError$Outbound | undefined;
};

/** @internal */
export const UpdateUnderwritingErrorError$outboundSchema: z.ZodType<
  UpdateUnderwritingErrorError$Outbound,
  z.ZodTypeDef,
  UpdateUnderwritingErrorError
> = z.object({
  averageMonthlyTransactionVolume: z.string().optional(),
  averageTransactionSize: z.string().optional(),
  maxTransactionSize: z.string().optional(),
  volumeByCustomerType: components.VolumeByCustomerTypeError$outboundSchema
    .optional(),
  cardVolumeDistribution: components.CardVolumeDistributionError$outboundSchema
    .optional(),
  fulfillment: components.FulfillmentDetailsError$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUnderwritingErrorError$ {
  /** @deprecated use `UpdateUnderwritingErrorError$inboundSchema` instead. */
  export const inboundSchema = UpdateUnderwritingErrorError$inboundSchema;
  /** @deprecated use `UpdateUnderwritingErrorError$outboundSchema` instead. */
  export const outboundSchema = UpdateUnderwritingErrorError$outboundSchema;
  /** @deprecated use `UpdateUnderwritingErrorError$Outbound` instead. */
  export type Outbound = UpdateUnderwritingErrorError$Outbound;
}

export function updateUnderwritingErrorErrorToJSON(
  updateUnderwritingErrorError: UpdateUnderwritingErrorError,
): string {
  return JSON.stringify(
    UpdateUnderwritingErrorError$outboundSchema.parse(
      updateUnderwritingErrorError,
    ),
  );
}

export function updateUnderwritingErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUnderwritingErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUnderwritingErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUnderwritingErrorError' from JSON`,
  );
}

/** @internal */
export const UpdateUnderwritingError$inboundSchema: z.ZodType<
  UpdateUnderwritingError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => UpdateUnderwritingErrorError$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UpdateUnderwritingError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UpdateUnderwritingError$Outbound = {
  error: UpdateUnderwritingErrorError$Outbound;
};

/** @internal */
export const UpdateUnderwritingError$outboundSchema: z.ZodType<
  UpdateUnderwritingError$Outbound,
  z.ZodTypeDef,
  UpdateUnderwritingError
> = z.instanceof(UpdateUnderwritingError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => UpdateUnderwritingErrorError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUnderwritingError$ {
  /** @deprecated use `UpdateUnderwritingError$inboundSchema` instead. */
  export const inboundSchema = UpdateUnderwritingError$inboundSchema;
  /** @deprecated use `UpdateUnderwritingError$outboundSchema` instead. */
  export const outboundSchema = UpdateUnderwritingError$outboundSchema;
  /** @deprecated use `UpdateUnderwritingError$Outbound` instead. */
  export type Outbound = UpdateUnderwritingError$Outbound;
}
