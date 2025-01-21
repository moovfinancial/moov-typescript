/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateScheduleSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type CreateScheduleRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
  upsertSchedule: components.UpsertSchedule;
};

/** @internal */
export const CreateScheduleSecurity$inboundSchema: z.ZodType<
  CreateScheduleSecurity,
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
export type CreateScheduleSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const CreateScheduleSecurity$outboundSchema: z.ZodType<
  CreateScheduleSecurity$Outbound,
  z.ZodTypeDef,
  CreateScheduleSecurity
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
export namespace CreateScheduleSecurity$ {
  /** @deprecated use `CreateScheduleSecurity$inboundSchema` instead. */
  export const inboundSchema = CreateScheduleSecurity$inboundSchema;
  /** @deprecated use `CreateScheduleSecurity$outboundSchema` instead. */
  export const outboundSchema = CreateScheduleSecurity$outboundSchema;
  /** @deprecated use `CreateScheduleSecurity$Outbound` instead. */
  export type Outbound = CreateScheduleSecurity$Outbound;
}

export function createScheduleSecurityToJSON(
  createScheduleSecurity: CreateScheduleSecurity,
): string {
  return JSON.stringify(
    CreateScheduleSecurity$outboundSchema.parse(createScheduleSecurity),
  );
}

export function createScheduleSecurityFromJSON(
  jsonString: string,
): SafeParseResult<CreateScheduleSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScheduleSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScheduleSecurity' from JSON`,
  );
}

/** @internal */
export const CreateScheduleRequest$inboundSchema: z.ZodType<
  CreateScheduleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  UpsertSchedule: components.UpsertSchedule$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
    "UpsertSchedule": "upsertSchedule",
  });
});

/** @internal */
export type CreateScheduleRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  UpsertSchedule: components.UpsertSchedule$Outbound;
};

/** @internal */
export const CreateScheduleRequest$outboundSchema: z.ZodType<
  CreateScheduleRequest$Outbound,
  z.ZodTypeDef,
  CreateScheduleRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  upsertSchedule: components.UpsertSchedule$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
    upsertSchedule: "UpsertSchedule",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateScheduleRequest$ {
  /** @deprecated use `CreateScheduleRequest$inboundSchema` instead. */
  export const inboundSchema = CreateScheduleRequest$inboundSchema;
  /** @deprecated use `CreateScheduleRequest$outboundSchema` instead. */
  export const outboundSchema = CreateScheduleRequest$outboundSchema;
  /** @deprecated use `CreateScheduleRequest$Outbound` instead. */
  export type Outbound = CreateScheduleRequest$Outbound;
}

export function createScheduleRequestToJSON(
  createScheduleRequest: CreateScheduleRequest,
): string {
  return JSON.stringify(
    CreateScheduleRequest$outboundSchema.parse(createScheduleRequest),
  );
}

export function createScheduleRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateScheduleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScheduleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScheduleRequest' from JSON`,
  );
}
