/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CancelScheduleSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type CancelScheduleRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
  scheduleID: string;
};

/** @internal */
export const CancelScheduleSecurity$inboundSchema: z.ZodType<
  CancelScheduleSecurity,
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
export type CancelScheduleSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const CancelScheduleSecurity$outboundSchema: z.ZodType<
  CancelScheduleSecurity$Outbound,
  z.ZodTypeDef,
  CancelScheduleSecurity
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
export namespace CancelScheduleSecurity$ {
  /** @deprecated use `CancelScheduleSecurity$inboundSchema` instead. */
  export const inboundSchema = CancelScheduleSecurity$inboundSchema;
  /** @deprecated use `CancelScheduleSecurity$outboundSchema` instead. */
  export const outboundSchema = CancelScheduleSecurity$outboundSchema;
  /** @deprecated use `CancelScheduleSecurity$Outbound` instead. */
  export type Outbound = CancelScheduleSecurity$Outbound;
}

export function cancelScheduleSecurityToJSON(
  cancelScheduleSecurity: CancelScheduleSecurity,
): string {
  return JSON.stringify(
    CancelScheduleSecurity$outboundSchema.parse(cancelScheduleSecurity),
  );
}

export function cancelScheduleSecurityFromJSON(
  jsonString: string,
): SafeParseResult<CancelScheduleSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelScheduleSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelScheduleSecurity' from JSON`,
  );
}

/** @internal */
export const CancelScheduleRequest$inboundSchema: z.ZodType<
  CancelScheduleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  scheduleID: z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type CancelScheduleRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  scheduleID: string;
};

/** @internal */
export const CancelScheduleRequest$outboundSchema: z.ZodType<
  CancelScheduleRequest$Outbound,
  z.ZodTypeDef,
  CancelScheduleRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  scheduleID: z.string(),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelScheduleRequest$ {
  /** @deprecated use `CancelScheduleRequest$inboundSchema` instead. */
  export const inboundSchema = CancelScheduleRequest$inboundSchema;
  /** @deprecated use `CancelScheduleRequest$outboundSchema` instead. */
  export const outboundSchema = CancelScheduleRequest$outboundSchema;
  /** @deprecated use `CancelScheduleRequest$Outbound` instead. */
  export type Outbound = CancelScheduleRequest$Outbound;
}

export function cancelScheduleRequestToJSON(
  cancelScheduleRequest: CancelScheduleRequest,
): string {
  return JSON.stringify(
    CancelScheduleRequest$outboundSchema.parse(cancelScheduleRequest),
  );
}

export function cancelScheduleRequestFromJSON(
  jsonString: string,
): SafeParseResult<CancelScheduleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelScheduleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelScheduleRequest' from JSON`,
  );
}
