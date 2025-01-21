/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdatePaymentLinkSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type UpdatePaymentLinkRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
  paymentLinkCode: string;
  updatePaymentLink: components.UpdatePaymentLink;
};

/** @internal */
export const UpdatePaymentLinkSecurity$inboundSchema: z.ZodType<
  UpdatePaymentLinkSecurity,
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
export type UpdatePaymentLinkSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const UpdatePaymentLinkSecurity$outboundSchema: z.ZodType<
  UpdatePaymentLinkSecurity$Outbound,
  z.ZodTypeDef,
  UpdatePaymentLinkSecurity
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
export namespace UpdatePaymentLinkSecurity$ {
  /** @deprecated use `UpdatePaymentLinkSecurity$inboundSchema` instead. */
  export const inboundSchema = UpdatePaymentLinkSecurity$inboundSchema;
  /** @deprecated use `UpdatePaymentLinkSecurity$outboundSchema` instead. */
  export const outboundSchema = UpdatePaymentLinkSecurity$outboundSchema;
  /** @deprecated use `UpdatePaymentLinkSecurity$Outbound` instead. */
  export type Outbound = UpdatePaymentLinkSecurity$Outbound;
}

export function updatePaymentLinkSecurityToJSON(
  updatePaymentLinkSecurity: UpdatePaymentLinkSecurity,
): string {
  return JSON.stringify(
    UpdatePaymentLinkSecurity$outboundSchema.parse(updatePaymentLinkSecurity),
  );
}

export function updatePaymentLinkSecurityFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePaymentLinkSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePaymentLinkSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePaymentLinkSecurity' from JSON`,
  );
}

/** @internal */
export const UpdatePaymentLinkRequest$inboundSchema: z.ZodType<
  UpdatePaymentLinkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  paymentLinkCode: z.string(),
  UpdatePaymentLink: components.UpdatePaymentLink$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
    "UpdatePaymentLink": "updatePaymentLink",
  });
});

/** @internal */
export type UpdatePaymentLinkRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  paymentLinkCode: string;
  UpdatePaymentLink: components.UpdatePaymentLink$Outbound;
};

/** @internal */
export const UpdatePaymentLinkRequest$outboundSchema: z.ZodType<
  UpdatePaymentLinkRequest$Outbound,
  z.ZodTypeDef,
  UpdatePaymentLinkRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  paymentLinkCode: z.string(),
  updatePaymentLink: components.UpdatePaymentLink$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
    updatePaymentLink: "UpdatePaymentLink",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePaymentLinkRequest$ {
  /** @deprecated use `UpdatePaymentLinkRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePaymentLinkRequest$inboundSchema;
  /** @deprecated use `UpdatePaymentLinkRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePaymentLinkRequest$outboundSchema;
  /** @deprecated use `UpdatePaymentLinkRequest$Outbound` instead. */
  export type Outbound = UpdatePaymentLinkRequest$Outbound;
}

export function updatePaymentLinkRequestToJSON(
  updatePaymentLinkRequest: UpdatePaymentLinkRequest,
): string {
  return JSON.stringify(
    UpdatePaymentLinkRequest$outboundSchema.parse(updatePaymentLinkRequest),
  );
}

export function updatePaymentLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePaymentLinkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePaymentLinkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePaymentLinkRequest' from JSON`,
  );
}
