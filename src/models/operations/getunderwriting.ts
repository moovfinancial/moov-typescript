/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUnderwritingSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type GetUnderwritingRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
};

/** @internal */
export const GetUnderwritingSecurity$inboundSchema: z.ZodType<
  GetUnderwritingSecurity,
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
export type GetUnderwritingSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const GetUnderwritingSecurity$outboundSchema: z.ZodType<
  GetUnderwritingSecurity$Outbound,
  z.ZodTypeDef,
  GetUnderwritingSecurity
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
export namespace GetUnderwritingSecurity$ {
  /** @deprecated use `GetUnderwritingSecurity$inboundSchema` instead. */
  export const inboundSchema = GetUnderwritingSecurity$inboundSchema;
  /** @deprecated use `GetUnderwritingSecurity$outboundSchema` instead. */
  export const outboundSchema = GetUnderwritingSecurity$outboundSchema;
  /** @deprecated use `GetUnderwritingSecurity$Outbound` instead. */
  export type Outbound = GetUnderwritingSecurity$Outbound;
}

export function getUnderwritingSecurityToJSON(
  getUnderwritingSecurity: GetUnderwritingSecurity,
): string {
  return JSON.stringify(
    GetUnderwritingSecurity$outboundSchema.parse(getUnderwritingSecurity),
  );
}

export function getUnderwritingSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetUnderwritingSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUnderwritingSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUnderwritingSecurity' from JSON`,
  );
}

/** @internal */
export const GetUnderwritingRequest$inboundSchema: z.ZodType<
  GetUnderwritingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type GetUnderwritingRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
};

/** @internal */
export const GetUnderwritingRequest$outboundSchema: z.ZodType<
  GetUnderwritingRequest$Outbound,
  z.ZodTypeDef,
  GetUnderwritingRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUnderwritingRequest$ {
  /** @deprecated use `GetUnderwritingRequest$inboundSchema` instead. */
  export const inboundSchema = GetUnderwritingRequest$inboundSchema;
  /** @deprecated use `GetUnderwritingRequest$outboundSchema` instead. */
  export const outboundSchema = GetUnderwritingRequest$outboundSchema;
  /** @deprecated use `GetUnderwritingRequest$Outbound` instead. */
  export type Outbound = GetUnderwritingRequest$Outbound;
}

export function getUnderwritingRequestToJSON(
  getUnderwritingRequest: GetUnderwritingRequest,
): string {
  return JSON.stringify(
    GetUnderwritingRequest$outboundSchema.parse(getUnderwritingRequest),
  );
}

export function getUnderwritingRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUnderwritingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUnderwritingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUnderwritingRequest' from JSON`,
  );
}
