/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ReceiptValidationErrorData = {
  kind?: string | undefined;
  email?: string | undefined;
  emailAccountID?: string | undefined;
  forTransferID?: string | undefined;
  forScheduleID?: string | undefined;
  forOccurrenceID?: string | undefined;
};

export class ReceiptValidationError extends Error {
  kind?: string | undefined;
  email?: string | undefined;
  emailAccountID?: string | undefined;
  forTransferID?: string | undefined;
  forScheduleID?: string | undefined;
  forOccurrenceID?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ReceiptValidationErrorData;

  constructor(err: ReceiptValidationErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.kind != null) this.kind = err.kind;
    if (err.email != null) this.email = err.email;
    if (err.emailAccountID != null) this.emailAccountID = err.emailAccountID;
    if (err.forTransferID != null) this.forTransferID = err.forTransferID;
    if (err.forScheduleID != null) this.forScheduleID = err.forScheduleID;
    if (err.forOccurrenceID != null) this.forOccurrenceID = err.forOccurrenceID;

    this.name = "ReceiptValidationError";
  }
}

/** @internal */
export const ReceiptValidationError$inboundSchema: z.ZodType<
  ReceiptValidationError,
  z.ZodTypeDef,
  unknown
> = z.object({
  kind: z.string().optional(),
  email: z.string().optional(),
  emailAccountID: z.string().optional(),
  forTransferID: z.string().optional(),
  forScheduleID: z.string().optional(),
  forOccurrenceID: z.string().optional(),
})
  .transform((v) => {
    return new ReceiptValidationError(v);
  });

/** @internal */
export type ReceiptValidationError$Outbound = {
  kind?: string | undefined;
  email?: string | undefined;
  emailAccountID?: string | undefined;
  forTransferID?: string | undefined;
  forScheduleID?: string | undefined;
  forOccurrenceID?: string | undefined;
};

/** @internal */
export const ReceiptValidationError$outboundSchema: z.ZodType<
  ReceiptValidationError$Outbound,
  z.ZodTypeDef,
  ReceiptValidationError
> = z.instanceof(ReceiptValidationError)
  .transform(v => v.data$)
  .pipe(z.object({
    kind: z.string().optional(),
    email: z.string().optional(),
    emailAccountID: z.string().optional(),
    forTransferID: z.string().optional(),
    forScheduleID: z.string().optional(),
    forOccurrenceID: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReceiptValidationError$ {
  /** @deprecated use `ReceiptValidationError$inboundSchema` instead. */
  export const inboundSchema = ReceiptValidationError$inboundSchema;
  /** @deprecated use `ReceiptValidationError$outboundSchema` instead. */
  export const outboundSchema = ReceiptValidationError$outboundSchema;
  /** @deprecated use `ReceiptValidationError$Outbound` instead. */
  export type Outbound = ReceiptValidationError$Outbound;
}
