/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * The request was well-formed, but the contents failed validation. Check the request for missing or invalid fields.
 */
export type PatchAccountResponseBodyData = {
  error: components.PatchAccountError;
};

/**
 * The request was well-formed, but the contents failed validation. Check the request for missing or invalid fields.
 */
export class PatchAccountResponseBody extends Error {
  error: components.PatchAccountError;

  /** The original data that was passed to this error instance. */
  data$: PatchAccountResponseBodyData;

  constructor(err: PatchAccountResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "PatchAccountResponseBody";
  }
}

/** @internal */
export const PatchAccountResponseBody$inboundSchema: z.ZodType<
  PatchAccountResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: components.PatchAccountError$inboundSchema,
})
  .transform((v) => {
    return new PatchAccountResponseBody(v);
  });

/** @internal */
export type PatchAccountResponseBody$Outbound = {
  error: components.PatchAccountError$Outbound;
};

/** @internal */
export const PatchAccountResponseBody$outboundSchema: z.ZodType<
  PatchAccountResponseBody$Outbound,
  z.ZodTypeDef,
  PatchAccountResponseBody
> = z.instanceof(PatchAccountResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: components.PatchAccountError$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountResponseBody$ {
  /** @deprecated use `PatchAccountResponseBody$inboundSchema` instead. */
  export const inboundSchema = PatchAccountResponseBody$inboundSchema;
  /** @deprecated use `PatchAccountResponseBody$outboundSchema` instead. */
  export const outboundSchema = PatchAccountResponseBody$outboundSchema;
  /** @deprecated use `PatchAccountResponseBody$Outbound` instead. */
  export type Outbound = PatchAccountResponseBody$Outbound;
}
