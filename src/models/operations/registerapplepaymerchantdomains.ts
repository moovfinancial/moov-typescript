/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RegisterApplePayMerchantDomainsSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type RegisterApplePayMerchantDomainsRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  /**
   * ID of the Moov account representing the merchant.
   */
  accountID: string;
  registerApplePayMerchantDomains: components.RegisterApplePayMerchantDomains;
};

/** @internal */
export const RegisterApplePayMerchantDomainsSecurity$inboundSchema: z.ZodType<
  RegisterApplePayMerchantDomainsSecurity,
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
export type RegisterApplePayMerchantDomainsSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const RegisterApplePayMerchantDomainsSecurity$outboundSchema: z.ZodType<
  RegisterApplePayMerchantDomainsSecurity$Outbound,
  z.ZodTypeDef,
  RegisterApplePayMerchantDomainsSecurity
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
export namespace RegisterApplePayMerchantDomainsSecurity$ {
  /** @deprecated use `RegisterApplePayMerchantDomainsSecurity$inboundSchema` instead. */
  export const inboundSchema =
    RegisterApplePayMerchantDomainsSecurity$inboundSchema;
  /** @deprecated use `RegisterApplePayMerchantDomainsSecurity$outboundSchema` instead. */
  export const outboundSchema =
    RegisterApplePayMerchantDomainsSecurity$outboundSchema;
  /** @deprecated use `RegisterApplePayMerchantDomainsSecurity$Outbound` instead. */
  export type Outbound = RegisterApplePayMerchantDomainsSecurity$Outbound;
}

export function registerApplePayMerchantDomainsSecurityToJSON(
  registerApplePayMerchantDomainsSecurity:
    RegisterApplePayMerchantDomainsSecurity,
): string {
  return JSON.stringify(
    RegisterApplePayMerchantDomainsSecurity$outboundSchema.parse(
      registerApplePayMerchantDomainsSecurity,
    ),
  );
}

export function registerApplePayMerchantDomainsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  RegisterApplePayMerchantDomainsSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RegisterApplePayMerchantDomainsSecurity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RegisterApplePayMerchantDomainsSecurity' from JSON`,
  );
}

/** @internal */
export const RegisterApplePayMerchantDomainsRequest$inboundSchema: z.ZodType<
  RegisterApplePayMerchantDomainsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  RegisterApplePayMerchantDomains:
    components.RegisterApplePayMerchantDomains$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
    "RegisterApplePayMerchantDomains": "registerApplePayMerchantDomains",
  });
});

/** @internal */
export type RegisterApplePayMerchantDomainsRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  RegisterApplePayMerchantDomains:
    components.RegisterApplePayMerchantDomains$Outbound;
};

/** @internal */
export const RegisterApplePayMerchantDomainsRequest$outboundSchema: z.ZodType<
  RegisterApplePayMerchantDomainsRequest$Outbound,
  z.ZodTypeDef,
  RegisterApplePayMerchantDomainsRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  registerApplePayMerchantDomains:
    components.RegisterApplePayMerchantDomains$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
    registerApplePayMerchantDomains: "RegisterApplePayMerchantDomains",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RegisterApplePayMerchantDomainsRequest$ {
  /** @deprecated use `RegisterApplePayMerchantDomainsRequest$inboundSchema` instead. */
  export const inboundSchema =
    RegisterApplePayMerchantDomainsRequest$inboundSchema;
  /** @deprecated use `RegisterApplePayMerchantDomainsRequest$outboundSchema` instead. */
  export const outboundSchema =
    RegisterApplePayMerchantDomainsRequest$outboundSchema;
  /** @deprecated use `RegisterApplePayMerchantDomainsRequest$Outbound` instead. */
  export type Outbound = RegisterApplePayMerchantDomainsRequest$Outbound;
}

export function registerApplePayMerchantDomainsRequestToJSON(
  registerApplePayMerchantDomainsRequest:
    RegisterApplePayMerchantDomainsRequest,
): string {
  return JSON.stringify(
    RegisterApplePayMerchantDomainsRequest$outboundSchema.parse(
      registerApplePayMerchantDomainsRequest,
    ),
  );
}

export function registerApplePayMerchantDomainsRequestFromJSON(
  jsonString: string,
): SafeParseResult<RegisterApplePayMerchantDomainsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      RegisterApplePayMerchantDomainsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RegisterApplePayMerchantDomainsRequest' from JSON`,
  );
}
