/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCardSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type GetCardRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
  cardID: string;
};

/** @internal */
export const GetCardSecurity$inboundSchema: z.ZodType<
  GetCardSecurity,
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
export type GetCardSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const GetCardSecurity$outboundSchema: z.ZodType<
  GetCardSecurity$Outbound,
  z.ZodTypeDef,
  GetCardSecurity
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
export namespace GetCardSecurity$ {
  /** @deprecated use `GetCardSecurity$inboundSchema` instead. */
  export const inboundSchema = GetCardSecurity$inboundSchema;
  /** @deprecated use `GetCardSecurity$outboundSchema` instead. */
  export const outboundSchema = GetCardSecurity$outboundSchema;
  /** @deprecated use `GetCardSecurity$Outbound` instead. */
  export type Outbound = GetCardSecurity$Outbound;
}

export function getCardSecurityToJSON(
  getCardSecurity: GetCardSecurity,
): string {
  return JSON.stringify(GetCardSecurity$outboundSchema.parse(getCardSecurity));
}

export function getCardSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetCardSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCardSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCardSecurity' from JSON`,
  );
}

/** @internal */
export const GetCardRequest$inboundSchema: z.ZodType<
  GetCardRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  cardID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type GetCardRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  cardID: string;
};

/** @internal */
export const GetCardRequest$outboundSchema: z.ZodType<
  GetCardRequest$Outbound,
  z.ZodTypeDef,
  GetCardRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  cardID: z.string(),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCardRequest$ {
  /** @deprecated use `GetCardRequest$inboundSchema` instead. */
  export const inboundSchema = GetCardRequest$inboundSchema;
  /** @deprecated use `GetCardRequest$outboundSchema` instead. */
  export const outboundSchema = GetCardRequest$outboundSchema;
  /** @deprecated use `GetCardRequest$Outbound` instead. */
  export type Outbound = GetCardRequest$Outbound;
}

export function getCardRequestToJSON(getCardRequest: GetCardRequest): string {
  return JSON.stringify(GetCardRequest$outboundSchema.parse(getCardRequest));
}

export function getCardRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCardRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCardRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCardRequest' from JSON`,
  );
}
