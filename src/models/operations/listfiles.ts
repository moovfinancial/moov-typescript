/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListFilesGlobals = {
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

export type ListFilesRequest = {
  accountID: string;
};

export type ListFilesResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.FileDetails>;
};

/** @internal */
export const ListFilesGlobals$inboundSchema: z.ZodType<
  ListFilesGlobals,
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
export type ListFilesGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const ListFilesGlobals$outboundSchema: z.ZodType<
  ListFilesGlobals$Outbound,
  z.ZodTypeDef,
  ListFilesGlobals
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
export namespace ListFilesGlobals$ {
  /** @deprecated use `ListFilesGlobals$inboundSchema` instead. */
  export const inboundSchema = ListFilesGlobals$inboundSchema;
  /** @deprecated use `ListFilesGlobals$outboundSchema` instead. */
  export const outboundSchema = ListFilesGlobals$outboundSchema;
  /** @deprecated use `ListFilesGlobals$Outbound` instead. */
  export type Outbound = ListFilesGlobals$Outbound;
}

export function listFilesGlobalsToJSON(
  listFilesGlobals: ListFilesGlobals,
): string {
  return JSON.stringify(
    ListFilesGlobals$outboundSchema.parse(listFilesGlobals),
  );
}

export function listFilesGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListFilesGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListFilesGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFilesGlobals' from JSON`,
  );
}

/** @internal */
export const ListFilesRequest$inboundSchema: z.ZodType<
  ListFilesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
});

/** @internal */
export type ListFilesRequest$Outbound = {
  accountID: string;
};

/** @internal */
export const ListFilesRequest$outboundSchema: z.ZodType<
  ListFilesRequest$Outbound,
  z.ZodTypeDef,
  ListFilesRequest
> = z.object({
  accountID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFilesRequest$ {
  /** @deprecated use `ListFilesRequest$inboundSchema` instead. */
  export const inboundSchema = ListFilesRequest$inboundSchema;
  /** @deprecated use `ListFilesRequest$outboundSchema` instead. */
  export const outboundSchema = ListFilesRequest$outboundSchema;
  /** @deprecated use `ListFilesRequest$Outbound` instead. */
  export type Outbound = ListFilesRequest$Outbound;
}

export function listFilesRequestToJSON(
  listFilesRequest: ListFilesRequest,
): string {
  return JSON.stringify(
    ListFilesRequest$outboundSchema.parse(listFilesRequest),
  );
}

export function listFilesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListFilesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListFilesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFilesRequest' from JSON`,
  );
}

/** @internal */
export const ListFilesResponse$inboundSchema: z.ZodType<
  ListFilesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.FileDetails$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type ListFilesResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.FileDetails$Outbound>;
};

/** @internal */
export const ListFilesResponse$outboundSchema: z.ZodType<
  ListFilesResponse$Outbound,
  z.ZodTypeDef,
  ListFilesResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.FileDetails$outboundSchema),
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
export namespace ListFilesResponse$ {
  /** @deprecated use `ListFilesResponse$inboundSchema` instead. */
  export const inboundSchema = ListFilesResponse$inboundSchema;
  /** @deprecated use `ListFilesResponse$outboundSchema` instead. */
  export const outboundSchema = ListFilesResponse$outboundSchema;
  /** @deprecated use `ListFilesResponse$Outbound` instead. */
  export type Outbound = ListFilesResponse$Outbound;
}

export function listFilesResponseToJSON(
  listFilesResponse: ListFilesResponse,
): string {
  return JSON.stringify(
    ListFilesResponse$outboundSchema.parse(listFilesResponse),
  );
}

export function listFilesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListFilesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListFilesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFilesResponse' from JSON`,
  );
}
