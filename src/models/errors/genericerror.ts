/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GenericErrorData = {
  error: string;
};

export class GenericError extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: GenericErrorData;

  constructor(err: GenericErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "GenericError";
  }
}

/** @internal */
export const GenericError$inboundSchema: z.ZodType<
  GenericError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
})
  .transform((v) => {
    return new GenericError(v);
  });

/** @internal */
export type GenericError$Outbound = {
  error: string;
};

/** @internal */
export const GenericError$outboundSchema: z.ZodType<
  GenericError$Outbound,
  z.ZodTypeDef,
  GenericError
> = z.instanceof(GenericError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenericError$ {
  /** @deprecated use `GenericError$inboundSchema` instead. */
  export const inboundSchema = GenericError$inboundSchema;
  /** @deprecated use `GenericError$outboundSchema` instead. */
  export const outboundSchema = GenericError$outboundSchema;
  /** @deprecated use `GenericError$Outbound` instead. */
  export type Outbound = GenericError$Outbound;
}
