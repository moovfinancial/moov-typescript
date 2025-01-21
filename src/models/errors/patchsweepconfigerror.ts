/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type PatchSweepConfigErrorData = {
  status?: string | undefined;
  pushPaymentMethodID?: string | undefined;
  pullPaymentMethodID?: string | undefined;
  statementDescriptor?: string | undefined;
  minimumBalance?: string | undefined;
};

export class PatchSweepConfigError extends Error {
  status?: string | undefined;
  pushPaymentMethodID?: string | undefined;
  pullPaymentMethodID?: string | undefined;
  statementDescriptor?: string | undefined;
  minimumBalance?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: PatchSweepConfigErrorData;

  constructor(err: PatchSweepConfigErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.status != null) this.status = err.status;
    if (err.pushPaymentMethodID != null) {
      this.pushPaymentMethodID = err.pushPaymentMethodID;
    }
    if (err.pullPaymentMethodID != null) {
      this.pullPaymentMethodID = err.pullPaymentMethodID;
    }
    if (err.statementDescriptor != null) {
      this.statementDescriptor = err.statementDescriptor;
    }
    if (err.minimumBalance != null) this.minimumBalance = err.minimumBalance;

    this.name = "PatchSweepConfigError";
  }
}

/** @internal */
export const PatchSweepConfigError$inboundSchema: z.ZodType<
  PatchSweepConfigError,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string().optional(),
  pushPaymentMethodID: z.string().optional(),
  pullPaymentMethodID: z.string().optional(),
  statementDescriptor: z.string().optional(),
  minimumBalance: z.string().optional(),
})
  .transform((v) => {
    return new PatchSweepConfigError(v);
  });

/** @internal */
export type PatchSweepConfigError$Outbound = {
  status?: string | undefined;
  pushPaymentMethodID?: string | undefined;
  pullPaymentMethodID?: string | undefined;
  statementDescriptor?: string | undefined;
  minimumBalance?: string | undefined;
};

/** @internal */
export const PatchSweepConfigError$outboundSchema: z.ZodType<
  PatchSweepConfigError$Outbound,
  z.ZodTypeDef,
  PatchSweepConfigError
> = z.instanceof(PatchSweepConfigError)
  .transform(v => v.data$)
  .pipe(z.object({
    status: z.string().optional(),
    pushPaymentMethodID: z.string().optional(),
    pullPaymentMethodID: z.string().optional(),
    statementDescriptor: z.string().optional(),
    minimumBalance: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchSweepConfigError$ {
  /** @deprecated use `PatchSweepConfigError$inboundSchema` instead. */
  export const inboundSchema = PatchSweepConfigError$inboundSchema;
  /** @deprecated use `PatchSweepConfigError$outboundSchema` instead. */
  export const outboundSchema = PatchSweepConfigError$outboundSchema;
  /** @deprecated use `PatchSweepConfigError$Outbound` instead. */
  export type Outbound = PatchSweepConfigError$Outbound;
}
