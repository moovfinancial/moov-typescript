/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteRepresentativeGlobals = {
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

export type DeleteRepresentativeRequest = {
  /**
   * ID of the account.
   */
  accountID: string;
  /**
   * ID of the representative.
   */
  representativeID: string;
};

export type DeleteRepresentativeResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const DeleteRepresentativeGlobals$inboundSchema: z.ZodType<
  DeleteRepresentativeGlobals,
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
export type DeleteRepresentativeGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const DeleteRepresentativeGlobals$outboundSchema: z.ZodType<
  DeleteRepresentativeGlobals$Outbound,
  z.ZodTypeDef,
  DeleteRepresentativeGlobals
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
export namespace DeleteRepresentativeGlobals$ {
  /** @deprecated use `DeleteRepresentativeGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteRepresentativeGlobals$inboundSchema;
  /** @deprecated use `DeleteRepresentativeGlobals$outboundSchema` instead. */
  export const outboundSchema = DeleteRepresentativeGlobals$outboundSchema;
  /** @deprecated use `DeleteRepresentativeGlobals$Outbound` instead. */
  export type Outbound = DeleteRepresentativeGlobals$Outbound;
}

export function deleteRepresentativeGlobalsToJSON(
  deleteRepresentativeGlobals: DeleteRepresentativeGlobals,
): string {
  return JSON.stringify(
    DeleteRepresentativeGlobals$outboundSchema.parse(
      deleteRepresentativeGlobals,
    ),
  );
}

export function deleteRepresentativeGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRepresentativeGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRepresentativeGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRepresentativeGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteRepresentativeRequest$inboundSchema: z.ZodType<
  DeleteRepresentativeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  representativeID: z.string(),
});

/** @internal */
export type DeleteRepresentativeRequest$Outbound = {
  accountID: string;
  representativeID: string;
};

/** @internal */
export const DeleteRepresentativeRequest$outboundSchema: z.ZodType<
  DeleteRepresentativeRequest$Outbound,
  z.ZodTypeDef,
  DeleteRepresentativeRequest
> = z.object({
  accountID: z.string(),
  representativeID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRepresentativeRequest$ {
  /** @deprecated use `DeleteRepresentativeRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteRepresentativeRequest$inboundSchema;
  /** @deprecated use `DeleteRepresentativeRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteRepresentativeRequest$outboundSchema;
  /** @deprecated use `DeleteRepresentativeRequest$Outbound` instead. */
  export type Outbound = DeleteRepresentativeRequest$Outbound;
}

export function deleteRepresentativeRequestToJSON(
  deleteRepresentativeRequest: DeleteRepresentativeRequest,
): string {
  return JSON.stringify(
    DeleteRepresentativeRequest$outboundSchema.parse(
      deleteRepresentativeRequest,
    ),
  );
}

export function deleteRepresentativeRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRepresentativeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRepresentativeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRepresentativeRequest' from JSON`,
  );
}

/** @internal */
export const DeleteRepresentativeResponse$inboundSchema: z.ZodType<
  DeleteRepresentativeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type DeleteRepresentativeResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const DeleteRepresentativeResponse$outboundSchema: z.ZodType<
  DeleteRepresentativeResponse$Outbound,
  z.ZodTypeDef,
  DeleteRepresentativeResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRepresentativeResponse$ {
  /** @deprecated use `DeleteRepresentativeResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteRepresentativeResponse$inboundSchema;
  /** @deprecated use `DeleteRepresentativeResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteRepresentativeResponse$outboundSchema;
  /** @deprecated use `DeleteRepresentativeResponse$Outbound` instead. */
  export type Outbound = DeleteRepresentativeResponse$Outbound;
}

export function deleteRepresentativeResponseToJSON(
  deleteRepresentativeResponse: DeleteRepresentativeResponse,
): string {
  return JSON.stringify(
    DeleteRepresentativeResponse$outboundSchema.parse(
      deleteRepresentativeResponse,
    ),
  );
}

export function deleteRepresentativeResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRepresentativeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRepresentativeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRepresentativeResponse' from JSON`,
  );
}
