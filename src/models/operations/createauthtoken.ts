/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateAuthTokenRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  authTokenRequest: components.AuthTokenRequest;
};

/** @internal */
export const CreateAuthTokenRequest$inboundSchema: z.ZodType<
  CreateAuthTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  AuthTokenRequest: components.AuthTokenRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
    "AuthTokenRequest": "authTokenRequest",
  });
});

/** @internal */
export type CreateAuthTokenRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  AuthTokenRequest: components.AuthTokenRequest$Outbound;
};

/** @internal */
export const CreateAuthTokenRequest$outboundSchema: z.ZodType<
  CreateAuthTokenRequest$Outbound,
  z.ZodTypeDef,
  CreateAuthTokenRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  authTokenRequest: components.AuthTokenRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
    authTokenRequest: "AuthTokenRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAuthTokenRequest$ {
  /** @deprecated use `CreateAuthTokenRequest$inboundSchema` instead. */
  export const inboundSchema = CreateAuthTokenRequest$inboundSchema;
  /** @deprecated use `CreateAuthTokenRequest$outboundSchema` instead. */
  export const outboundSchema = CreateAuthTokenRequest$outboundSchema;
  /** @deprecated use `CreateAuthTokenRequest$Outbound` instead. */
  export type Outbound = CreateAuthTokenRequest$Outbound;
}

export function createAuthTokenRequestToJSON(
  createAuthTokenRequest: CreateAuthTokenRequest,
): string {
  return JSON.stringify(
    CreateAuthTokenRequest$outboundSchema.parse(createAuthTokenRequest),
  );
}

export function createAuthTokenRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateAuthTokenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAuthTokenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAuthTokenRequest' from JSON`,
  );
}
