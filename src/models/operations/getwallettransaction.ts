/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetWalletTransactionSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type GetWalletTransactionRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
  walletID: string;
  transactionID: string;
};

/** @internal */
export const GetWalletTransactionSecurity$inboundSchema: z.ZodType<
  GetWalletTransactionSecurity,
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
export type GetWalletTransactionSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const GetWalletTransactionSecurity$outboundSchema: z.ZodType<
  GetWalletTransactionSecurity$Outbound,
  z.ZodTypeDef,
  GetWalletTransactionSecurity
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
export namespace GetWalletTransactionSecurity$ {
  /** @deprecated use `GetWalletTransactionSecurity$inboundSchema` instead. */
  export const inboundSchema = GetWalletTransactionSecurity$inboundSchema;
  /** @deprecated use `GetWalletTransactionSecurity$outboundSchema` instead. */
  export const outboundSchema = GetWalletTransactionSecurity$outboundSchema;
  /** @deprecated use `GetWalletTransactionSecurity$Outbound` instead. */
  export type Outbound = GetWalletTransactionSecurity$Outbound;
}

export function getWalletTransactionSecurityToJSON(
  getWalletTransactionSecurity: GetWalletTransactionSecurity,
): string {
  return JSON.stringify(
    GetWalletTransactionSecurity$outboundSchema.parse(
      getWalletTransactionSecurity,
    ),
  );
}

export function getWalletTransactionSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetWalletTransactionSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWalletTransactionSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWalletTransactionSecurity' from JSON`,
  );
}

/** @internal */
export const GetWalletTransactionRequest$inboundSchema: z.ZodType<
  GetWalletTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  walletID: z.string(),
  transactionID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type GetWalletTransactionRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  walletID: string;
  transactionID: string;
};

/** @internal */
export const GetWalletTransactionRequest$outboundSchema: z.ZodType<
  GetWalletTransactionRequest$Outbound,
  z.ZodTypeDef,
  GetWalletTransactionRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  walletID: z.string(),
  transactionID: z.string(),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWalletTransactionRequest$ {
  /** @deprecated use `GetWalletTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = GetWalletTransactionRequest$inboundSchema;
  /** @deprecated use `GetWalletTransactionRequest$outboundSchema` instead. */
  export const outboundSchema = GetWalletTransactionRequest$outboundSchema;
  /** @deprecated use `GetWalletTransactionRequest$Outbound` instead. */
  export type Outbound = GetWalletTransactionRequest$Outbound;
}

export function getWalletTransactionRequestToJSON(
  getWalletTransactionRequest: GetWalletTransactionRequest,
): string {
  return JSON.stringify(
    GetWalletTransactionRequest$outboundSchema.parse(
      getWalletTransactionRequest,
    ),
  );
}

export function getWalletTransactionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetWalletTransactionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWalletTransactionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWalletTransactionRequest' from JSON`,
  );
}
