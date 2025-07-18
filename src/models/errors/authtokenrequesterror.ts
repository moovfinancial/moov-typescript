/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { MoovError } from "./mooverror.js";

export type AuthTokenRequestErrorData = {
  scope?: string | undefined;
  refreshToken?: string | undefined;
};

export class AuthTokenRequestError extends MoovError {
  scope?: string | undefined;
  refreshToken?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: AuthTokenRequestErrorData;

  constructor(
    err: AuthTokenRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.scope != null) this.scope = err.scope;
    if (err.refreshToken != null) this.refreshToken = err.refreshToken;

    this.name = "AuthTokenRequestError";
  }
}

/** @internal */
export const AuthTokenRequestError$inboundSchema: z.ZodType<
  AuthTokenRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  scope: z.string().optional(),
  refresh_token: z.string().optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "refresh_token": "refreshToken",
    });

    return new AuthTokenRequestError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type AuthTokenRequestError$Outbound = {
  scope?: string | undefined;
  refresh_token?: string | undefined;
};

/** @internal */
export const AuthTokenRequestError$outboundSchema: z.ZodType<
  AuthTokenRequestError$Outbound,
  z.ZodTypeDef,
  AuthTokenRequestError
> = z.instanceof(AuthTokenRequestError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      scope: z.string().optional(),
      refreshToken: z.string().optional(),
    }).transform((v) => {
      return remap$(v, {
        refreshToken: "refresh_token",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthTokenRequestError$ {
  /** @deprecated use `AuthTokenRequestError$inboundSchema` instead. */
  export const inboundSchema = AuthTokenRequestError$inboundSchema;
  /** @deprecated use `AuthTokenRequestError$outboundSchema` instead. */
  export const outboundSchema = AuthTokenRequestError$outboundSchema;
  /** @deprecated use `AuthTokenRequestError$Outbound` instead. */
  export type Outbound = AuthTokenRequestError$Outbound;
}
