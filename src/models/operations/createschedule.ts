/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateScheduleGlobals = {
  /**
   * Specify an API version.
   *
   * @remarks
   *
   * API versioning follows the format `vYYYY.QQ.BB`, where
   *   - `YYYY` is the year
   *   - `QQ` is the two-digit month for the first month of the quarter (e.g., 01, 04, 07, 10)
   *   - `BB` is the build number, starting at `.01`, for subsequent builds in the same quarter.
   *     - For example, `v2024.01.00` is the initial release of the first quarter of 2024.
   *
   * The `latest` version represents the most recent development state. It may include breaking changes and should be treated as a beta release.
   */
  xMoovVersion?: string | undefined;
};

export type CreateScheduleRequest = {
  accountID: string;
  upsertSchedule: components.UpsertSchedule;
};

export type CreateScheduleResponse = {
  headers: { [k: string]: Array<string> };
  result: components.ScheduleResponse;
};

/** @internal */
export const CreateScheduleGlobals$inboundSchema: z.ZodType<
  CreateScheduleGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": z.string().default("v2024.01.00"),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type CreateScheduleGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const CreateScheduleGlobals$outboundSchema: z.ZodType<
  CreateScheduleGlobals$Outbound,
  z.ZodTypeDef,
  CreateScheduleGlobals
> = z.object({
  xMoovVersion: z.string().default("v2024.01.00"),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateScheduleGlobals$ {
  /** @deprecated use `CreateScheduleGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateScheduleGlobals$inboundSchema;
  /** @deprecated use `CreateScheduleGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateScheduleGlobals$outboundSchema;
  /** @deprecated use `CreateScheduleGlobals$Outbound` instead. */
  export type Outbound = CreateScheduleGlobals$Outbound;
}

export function createScheduleGlobalsToJSON(
  createScheduleGlobals: CreateScheduleGlobals,
): string {
  return JSON.stringify(
    CreateScheduleGlobals$outboundSchema.parse(createScheduleGlobals),
  );
}

export function createScheduleGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateScheduleGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScheduleGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScheduleGlobals' from JSON`,
  );
}

/** @internal */
export const CreateScheduleRequest$inboundSchema: z.ZodType<
  CreateScheduleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  UpsertSchedule: components.UpsertSchedule$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpsertSchedule": "upsertSchedule",
  });
});

/** @internal */
export type CreateScheduleRequest$Outbound = {
  accountID: string;
  UpsertSchedule: components.UpsertSchedule$Outbound;
};

/** @internal */
export const CreateScheduleRequest$outboundSchema: z.ZodType<
  CreateScheduleRequest$Outbound,
  z.ZodTypeDef,
  CreateScheduleRequest
> = z.object({
  accountID: z.string(),
  upsertSchedule: components.UpsertSchedule$outboundSchema,
}).transform((v) => {
  return remap$(v, {
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

/** @internal */
export const CreateScheduleResponse$inboundSchema: z.ZodType<
  CreateScheduleResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.ScheduleResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type CreateScheduleResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.ScheduleResponse$Outbound;
};

/** @internal */
export const CreateScheduleResponse$outboundSchema: z.ZodType<
  CreateScheduleResponse$Outbound,
  z.ZodTypeDef,
  CreateScheduleResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.ScheduleResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateScheduleResponse$ {
  /** @deprecated use `CreateScheduleResponse$inboundSchema` instead. */
  export const inboundSchema = CreateScheduleResponse$inboundSchema;
  /** @deprecated use `CreateScheduleResponse$outboundSchema` instead. */
  export const outboundSchema = CreateScheduleResponse$outboundSchema;
  /** @deprecated use `CreateScheduleResponse$Outbound` instead. */
  export type Outbound = CreateScheduleResponse$Outbound;
}

export function createScheduleResponseToJSON(
  createScheduleResponse: CreateScheduleResponse,
): string {
  return JSON.stringify(
    CreateScheduleResponse$outboundSchema.parse(createScheduleResponse),
  );
}

export function createScheduleResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateScheduleResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateScheduleResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateScheduleResponse' from JSON`,
  );
}
