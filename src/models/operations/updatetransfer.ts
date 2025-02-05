/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateTransferGlobals = {
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

export type UpdateTransferRequest = {
  /**
   * Identifier for the transfer.
   */
  transferID: string;
  accountID: string;
};

export type UpdateTransferResponse = {
  headers: { [k: string]: Array<string> };
  result: components.Transfer;
};

/** @internal */
export const UpdateTransferGlobals$inboundSchema: z.ZodType<
  UpdateTransferGlobals,
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
export type UpdateTransferGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const UpdateTransferGlobals$outboundSchema: z.ZodType<
  UpdateTransferGlobals$Outbound,
  z.ZodTypeDef,
  UpdateTransferGlobals
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
export namespace UpdateTransferGlobals$ {
  /** @deprecated use `UpdateTransferGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateTransferGlobals$inboundSchema;
  /** @deprecated use `UpdateTransferGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateTransferGlobals$outboundSchema;
  /** @deprecated use `UpdateTransferGlobals$Outbound` instead. */
  export type Outbound = UpdateTransferGlobals$Outbound;
}

export function updateTransferGlobalsToJSON(
  updateTransferGlobals: UpdateTransferGlobals,
): string {
  return JSON.stringify(
    UpdateTransferGlobals$outboundSchema.parse(updateTransferGlobals),
  );
}

export function updateTransferGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTransferGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTransferGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTransferGlobals' from JSON`,
  );
}

/** @internal */
export const UpdateTransferRequest$inboundSchema: z.ZodType<
  UpdateTransferRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  transferID: z.string(),
  accountID: z.string(),
});

/** @internal */
export type UpdateTransferRequest$Outbound = {
  transferID: string;
  accountID: string;
};

/** @internal */
export const UpdateTransferRequest$outboundSchema: z.ZodType<
  UpdateTransferRequest$Outbound,
  z.ZodTypeDef,
  UpdateTransferRequest
> = z.object({
  transferID: z.string(),
  accountID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTransferRequest$ {
  /** @deprecated use `UpdateTransferRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateTransferRequest$inboundSchema;
  /** @deprecated use `UpdateTransferRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateTransferRequest$outboundSchema;
  /** @deprecated use `UpdateTransferRequest$Outbound` instead. */
  export type Outbound = UpdateTransferRequest$Outbound;
}

export function updateTransferRequestToJSON(
  updateTransferRequest: UpdateTransferRequest,
): string {
  return JSON.stringify(
    UpdateTransferRequest$outboundSchema.parse(updateTransferRequest),
  );
}

export function updateTransferRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTransferRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTransferRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTransferRequest' from JSON`,
  );
}

/** @internal */
export const UpdateTransferResponse$inboundSchema: z.ZodType<
  UpdateTransferResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.Transfer$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type UpdateTransferResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.Transfer$Outbound;
};

/** @internal */
export const UpdateTransferResponse$outboundSchema: z.ZodType<
  UpdateTransferResponse$Outbound,
  z.ZodTypeDef,
  UpdateTransferResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.Transfer$outboundSchema,
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
export namespace UpdateTransferResponse$ {
  /** @deprecated use `UpdateTransferResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateTransferResponse$inboundSchema;
  /** @deprecated use `UpdateTransferResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateTransferResponse$outboundSchema;
  /** @deprecated use `UpdateTransferResponse$Outbound` instead. */
  export type Outbound = UpdateTransferResponse$Outbound;
}

export function updateTransferResponseToJSON(
  updateTransferResponse: UpdateTransferResponse,
): string {
  return JSON.stringify(
    UpdateTransferResponse$outboundSchema.parse(updateTransferResponse),
  );
}

export function updateTransferResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTransferResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateTransferResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTransferResponse' from JSON`,
  );
}
