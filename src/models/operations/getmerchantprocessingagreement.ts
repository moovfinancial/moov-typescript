/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMerchantProcessingAgreementSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type GetMerchantProcessingAgreementRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
};

/** @internal */
export const GetMerchantProcessingAgreementSecurity$inboundSchema: z.ZodType<
  GetMerchantProcessingAgreementSecurity,
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
export type GetMerchantProcessingAgreementSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const GetMerchantProcessingAgreementSecurity$outboundSchema: z.ZodType<
  GetMerchantProcessingAgreementSecurity$Outbound,
  z.ZodTypeDef,
  GetMerchantProcessingAgreementSecurity
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
export namespace GetMerchantProcessingAgreementSecurity$ {
  /** @deprecated use `GetMerchantProcessingAgreementSecurity$inboundSchema` instead. */
  export const inboundSchema =
    GetMerchantProcessingAgreementSecurity$inboundSchema;
  /** @deprecated use `GetMerchantProcessingAgreementSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetMerchantProcessingAgreementSecurity$outboundSchema;
  /** @deprecated use `GetMerchantProcessingAgreementSecurity$Outbound` instead. */
  export type Outbound = GetMerchantProcessingAgreementSecurity$Outbound;
}

export function getMerchantProcessingAgreementSecurityToJSON(
  getMerchantProcessingAgreementSecurity:
    GetMerchantProcessingAgreementSecurity,
): string {
  return JSON.stringify(
    GetMerchantProcessingAgreementSecurity$outboundSchema.parse(
      getMerchantProcessingAgreementSecurity,
    ),
  );
}

export function getMerchantProcessingAgreementSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetMerchantProcessingAgreementSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetMerchantProcessingAgreementSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMerchantProcessingAgreementSecurity' from JSON`,
  );
}

/** @internal */
export const GetMerchantProcessingAgreementRequest$inboundSchema: z.ZodType<
  GetMerchantProcessingAgreementRequest,
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
export type GetMerchantProcessingAgreementRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
};

/** @internal */
export const GetMerchantProcessingAgreementRequest$outboundSchema: z.ZodType<
  GetMerchantProcessingAgreementRequest$Outbound,
  z.ZodTypeDef,
  GetMerchantProcessingAgreementRequest
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
export namespace GetMerchantProcessingAgreementRequest$ {
  /** @deprecated use `GetMerchantProcessingAgreementRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetMerchantProcessingAgreementRequest$inboundSchema;
  /** @deprecated use `GetMerchantProcessingAgreementRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetMerchantProcessingAgreementRequest$outboundSchema;
  /** @deprecated use `GetMerchantProcessingAgreementRequest$Outbound` instead. */
  export type Outbound = GetMerchantProcessingAgreementRequest$Outbound;
}

export function getMerchantProcessingAgreementRequestToJSON(
  getMerchantProcessingAgreementRequest: GetMerchantProcessingAgreementRequest,
): string {
  return JSON.stringify(
    GetMerchantProcessingAgreementRequest$outboundSchema.parse(
      getMerchantProcessingAgreementRequest,
    ),
  );
}

export function getMerchantProcessingAgreementRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMerchantProcessingAgreementRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetMerchantProcessingAgreementRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMerchantProcessingAgreementRequest' from JSON`,
  );
}
