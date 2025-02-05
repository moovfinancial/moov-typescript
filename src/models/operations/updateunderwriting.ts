/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateUnderwritingGlobals = {
  /**
   * Specify an API version.
   *
   * @remarks
   *
   * API versioning follows the format `vYYYY.QQ.BB`, where
   *   - `YYYY` is the year
   *   - `QQ` is the two-digit month for the first month of the quarter (e.g., 01, 04, 07, 10)
   *   - `BB` is an **optional** build number starting at `.01` for subsequent builds in the same quarter.
   *     - If no build number is specified, the version refers to the initial release of the quarter.
   *
   * The `latest` version represents the most recent development state. It may include breaking changes and should be treated as a beta release.
   */
  xMoovVersion?: string | undefined;
};

export type UpdateUnderwritingRequest = {
  accountID: string;
  updateUnderwriting: components.UpdateUnderwriting;
};

export type UpdateUnderwritingResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Underwriting;
};

/** @internal */
export const UpdateUnderwritingGlobals$inboundSchema: z.ZodType<
  UpdateUnderwritingGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": z.string().default("v2024.01"),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type UpdateUnderwritingGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const UpdateUnderwritingGlobals$outboundSchema: z.ZodType<
  UpdateUnderwritingGlobals$Outbound,
  z.ZodTypeDef,
  UpdateUnderwritingGlobals
> = z.object({
  xMoovVersion: z.string().default("v2024.01"),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUnderwritingGlobals$ {
  /** @deprecated use `UpdateUnderwritingGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateUnderwritingGlobals$inboundSchema;
  /** @deprecated use `UpdateUnderwritingGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateUnderwritingGlobals$outboundSchema;
  /** @deprecated use `UpdateUnderwritingGlobals$Outbound` instead. */
  export type Outbound = UpdateUnderwritingGlobals$Outbound;
}

export function updateUnderwritingGlobalsToJSON(
  updateUnderwritingGlobals: UpdateUnderwritingGlobals,
): string {
  return JSON.stringify(
    UpdateUnderwritingGlobals$outboundSchema.parse(updateUnderwritingGlobals),
  );
}

export function updateUnderwritingGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUnderwritingGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUnderwritingGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUnderwritingGlobals' from JSON`,
  );
}

/** @internal */
export const UpdateUnderwritingRequest$inboundSchema: z.ZodType<
  UpdateUnderwritingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  UpdateUnderwriting: components.UpdateUnderwriting$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateUnderwriting": "updateUnderwriting",
  });
});

/** @internal */
export type UpdateUnderwritingRequest$Outbound = {
  accountID: string;
  UpdateUnderwriting: components.UpdateUnderwriting$Outbound;
};

/** @internal */
export const UpdateUnderwritingRequest$outboundSchema: z.ZodType<
  UpdateUnderwritingRequest$Outbound,
  z.ZodTypeDef,
  UpdateUnderwritingRequest
> = z.object({
  accountID: z.string(),
  updateUnderwriting: components.UpdateUnderwriting$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateUnderwriting: "UpdateUnderwriting",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUnderwritingRequest$ {
  /** @deprecated use `UpdateUnderwritingRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateUnderwritingRequest$inboundSchema;
  /** @deprecated use `UpdateUnderwritingRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateUnderwritingRequest$outboundSchema;
  /** @deprecated use `UpdateUnderwritingRequest$Outbound` instead. */
  export type Outbound = UpdateUnderwritingRequest$Outbound;
}

export function updateUnderwritingRequestToJSON(
  updateUnderwritingRequest: UpdateUnderwritingRequest,
): string {
  return JSON.stringify(
    UpdateUnderwritingRequest$outboundSchema.parse(updateUnderwritingRequest),
  );
}

export function updateUnderwritingRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUnderwritingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUnderwritingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUnderwritingRequest' from JSON`,
  );
}

/** @internal */
export const UpdateUnderwritingResponse$inboundSchema: z.ZodType<
  UpdateUnderwritingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.Underwriting$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type UpdateUnderwritingResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Underwriting$Outbound;
};

/** @internal */
export const UpdateUnderwritingResponse$outboundSchema: z.ZodType<
  UpdateUnderwritingResponse$Outbound,
  z.ZodTypeDef,
  UpdateUnderwritingResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.Underwriting$outboundSchema,
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
export namespace UpdateUnderwritingResponse$ {
  /** @deprecated use `UpdateUnderwritingResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateUnderwritingResponse$inboundSchema;
  /** @deprecated use `UpdateUnderwritingResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateUnderwritingResponse$outboundSchema;
  /** @deprecated use `UpdateUnderwritingResponse$Outbound` instead. */
  export type Outbound = UpdateUnderwritingResponse$Outbound;
}

export function updateUnderwritingResponseToJSON(
  updateUnderwritingResponse: UpdateUnderwritingResponse,
): string {
  return JSON.stringify(
    UpdateUnderwritingResponse$outboundSchema.parse(updateUnderwritingResponse),
  );
}

export function updateUnderwritingResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUnderwritingResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUnderwritingResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUnderwritingResponse' from JSON`,
  );
}
