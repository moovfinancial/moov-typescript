/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAvatarSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type GetAvatarRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  /**
   * Any unique ID associated with an account such as accountID, representativeID, routing number, or userID.
   */
  uniqueID: string;
};

export type GetAvatarResponse =
  | ReadableStream<Uint8Array>
  | ReadableStream<Uint8Array>;

/** @internal */
export const GetAvatarSecurity$inboundSchema: z.ZodType<
  GetAvatarSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  BasicAuth: components.SchemeBasicAuth$inboundSchema.optional(),
  OAuth2Auth: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "BasicAuth": "basicAuth",
    "OAuth2Auth": "oAuth2Auth",
  });
});

/** @internal */
export type GetAvatarSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const GetAvatarSecurity$outboundSchema: z.ZodType<
  GetAvatarSecurity$Outbound,
  z.ZodTypeDef,
  GetAvatarSecurity
> = z.object({
  basicAuth: components.SchemeBasicAuth$outboundSchema.optional(),
  oAuth2Auth: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    basicAuth: "BasicAuth",
    oAuth2Auth: "OAuth2Auth",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvatarSecurity$ {
  /** @deprecated use `GetAvatarSecurity$inboundSchema` instead. */
  export const inboundSchema = GetAvatarSecurity$inboundSchema;
  /** @deprecated use `GetAvatarSecurity$outboundSchema` instead. */
  export const outboundSchema = GetAvatarSecurity$outboundSchema;
  /** @deprecated use `GetAvatarSecurity$Outbound` instead. */
  export type Outbound = GetAvatarSecurity$Outbound;
}

export function getAvatarSecurityToJSON(
  getAvatarSecurity: GetAvatarSecurity,
): string {
  return JSON.stringify(
    GetAvatarSecurity$outboundSchema.parse(getAvatarSecurity),
  );
}

export function getAvatarSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetAvatarSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvatarSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvatarSecurity' from JSON`,
  );
}

/** @internal */
export const GetAvatarRequest$inboundSchema: z.ZodType<
  GetAvatarRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  uniqueID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type GetAvatarRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  uniqueID: string;
};

/** @internal */
export const GetAvatarRequest$outboundSchema: z.ZodType<
  GetAvatarRequest$Outbound,
  z.ZodTypeDef,
  GetAvatarRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  uniqueID: z.string(),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvatarRequest$ {
  /** @deprecated use `GetAvatarRequest$inboundSchema` instead. */
  export const inboundSchema = GetAvatarRequest$inboundSchema;
  /** @deprecated use `GetAvatarRequest$outboundSchema` instead. */
  export const outboundSchema = GetAvatarRequest$outboundSchema;
  /** @deprecated use `GetAvatarRequest$Outbound` instead. */
  export type Outbound = GetAvatarRequest$Outbound;
}

export function getAvatarRequestToJSON(
  getAvatarRequest: GetAvatarRequest,
): string {
  return JSON.stringify(
    GetAvatarRequest$outboundSchema.parse(getAvatarRequest),
  );
}

export function getAvatarRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAvatarRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvatarRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvatarRequest' from JSON`,
  );
}

/** @internal */
export const GetAvatarResponse$inboundSchema: z.ZodType<
  GetAvatarResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.instanceof(ReadableStream<Uint8Array>),
  z.instanceof(ReadableStream<Uint8Array>),
]);

/** @internal */
export type GetAvatarResponse$Outbound =
  | ReadableStream<Uint8Array>
  | ReadableStream<Uint8Array>;

/** @internal */
export const GetAvatarResponse$outboundSchema: z.ZodType<
  GetAvatarResponse$Outbound,
  z.ZodTypeDef,
  GetAvatarResponse
> = z.union([
  z.instanceof(ReadableStream<Uint8Array>),
  z.instanceof(ReadableStream<Uint8Array>),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvatarResponse$ {
  /** @deprecated use `GetAvatarResponse$inboundSchema` instead. */
  export const inboundSchema = GetAvatarResponse$inboundSchema;
  /** @deprecated use `GetAvatarResponse$outboundSchema` instead. */
  export const outboundSchema = GetAvatarResponse$outboundSchema;
  /** @deprecated use `GetAvatarResponse$Outbound` instead. */
  export type Outbound = GetAvatarResponse$Outbound;
}

export function getAvatarResponseToJSON(
  getAvatarResponse: GetAvatarResponse,
): string {
  return JSON.stringify(
    GetAvatarResponse$outboundSchema.parse(getAvatarResponse),
  );
}

export function getAvatarResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAvatarResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvatarResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvatarResponse' from JSON`,
  );
}
