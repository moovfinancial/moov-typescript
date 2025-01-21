/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListBankAccountsSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type ListBankAccountsRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
};

/** @internal */
export const ListBankAccountsSecurity$inboundSchema: z.ZodType<
  ListBankAccountsSecurity,
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
export type ListBankAccountsSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const ListBankAccountsSecurity$outboundSchema: z.ZodType<
  ListBankAccountsSecurity$Outbound,
  z.ZodTypeDef,
  ListBankAccountsSecurity
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
export namespace ListBankAccountsSecurity$ {
  /** @deprecated use `ListBankAccountsSecurity$inboundSchema` instead. */
  export const inboundSchema = ListBankAccountsSecurity$inboundSchema;
  /** @deprecated use `ListBankAccountsSecurity$outboundSchema` instead. */
  export const outboundSchema = ListBankAccountsSecurity$outboundSchema;
  /** @deprecated use `ListBankAccountsSecurity$Outbound` instead. */
  export type Outbound = ListBankAccountsSecurity$Outbound;
}

export function listBankAccountsSecurityToJSON(
  listBankAccountsSecurity: ListBankAccountsSecurity,
): string {
  return JSON.stringify(
    ListBankAccountsSecurity$outboundSchema.parse(listBankAccountsSecurity),
  );
}

export function listBankAccountsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<ListBankAccountsSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBankAccountsSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBankAccountsSecurity' from JSON`,
  );
}

/** @internal */
export const ListBankAccountsRequest$inboundSchema: z.ZodType<
  ListBankAccountsRequest,
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
export type ListBankAccountsRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
};

/** @internal */
export const ListBankAccountsRequest$outboundSchema: z.ZodType<
  ListBankAccountsRequest$Outbound,
  z.ZodTypeDef,
  ListBankAccountsRequest
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
export namespace ListBankAccountsRequest$ {
  /** @deprecated use `ListBankAccountsRequest$inboundSchema` instead. */
  export const inboundSchema = ListBankAccountsRequest$inboundSchema;
  /** @deprecated use `ListBankAccountsRequest$outboundSchema` instead. */
  export const outboundSchema = ListBankAccountsRequest$outboundSchema;
  /** @deprecated use `ListBankAccountsRequest$Outbound` instead. */
  export type Outbound = ListBankAccountsRequest$Outbound;
}

export function listBankAccountsRequestToJSON(
  listBankAccountsRequest: ListBankAccountsRequest,
): string {
  return JSON.stringify(
    ListBankAccountsRequest$outboundSchema.parse(listBankAccountsRequest),
  );
}

export function listBankAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListBankAccountsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBankAccountsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBankAccountsRequest' from JSON`,
  );
}
