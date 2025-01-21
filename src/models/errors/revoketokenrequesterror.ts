/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RevokeTokenRequestErrorData = {
  token?: string | undefined;
  tokenTypeHint?: string | undefined;
};

export class RevokeTokenRequestError extends Error {
  token?: string | undefined;
  tokenTypeHint?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: RevokeTokenRequestErrorData;

  constructor(err: RevokeTokenRequestErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.token != null) this.token = err.token;
    if (err.tokenTypeHint != null) this.tokenTypeHint = err.tokenTypeHint;

    this.name = "RevokeTokenRequestError";
  }
}

/** @internal */
export const RevokeTokenRequestError$inboundSchema: z.ZodType<
  RevokeTokenRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string().optional(),
  token_type_hint: z.string().optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "token_type_hint": "tokenTypeHint",
    });

    return new RevokeTokenRequestError(remapped);
  });

/** @internal */
export type RevokeTokenRequestError$Outbound = {
  token?: string | undefined;
  token_type_hint?: string | undefined;
};

/** @internal */
export const RevokeTokenRequestError$outboundSchema: z.ZodType<
  RevokeTokenRequestError$Outbound,
  z.ZodTypeDef,
  RevokeTokenRequestError
> = z.instanceof(RevokeTokenRequestError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      token: z.string().optional(),
      tokenTypeHint: z.string().optional(),
    }).transform((v) => {
      return remap$(v, {
        tokenTypeHint: "token_type_hint",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeTokenRequestError$ {
  /** @deprecated use `RevokeTokenRequestError$inboundSchema` instead. */
  export const inboundSchema = RevokeTokenRequestError$inboundSchema;
  /** @deprecated use `RevokeTokenRequestError$outboundSchema` instead. */
  export const outboundSchema = RevokeTokenRequestError$outboundSchema;
  /** @deprecated use `RevokeTokenRequestError$Outbound` instead. */
  export type Outbound = RevokeTokenRequestError$Outbound;
}
