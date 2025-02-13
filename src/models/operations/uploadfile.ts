/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UploadFileGlobals = {
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

export type UploadFileRequest = {
  accountID: string;
  fileUploadRequestMultiPart: components.FileUploadRequestMultiPart;
};

export type UploadFileResponse = {
  headers: { [k: string]: Array<string> };
  result: components.FileDetails;
};

/** @internal */
export const UploadFileGlobals$inboundSchema: z.ZodType<
  UploadFileGlobals,
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
export type UploadFileGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const UploadFileGlobals$outboundSchema: z.ZodType<
  UploadFileGlobals$Outbound,
  z.ZodTypeDef,
  UploadFileGlobals
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
export namespace UploadFileGlobals$ {
  /** @deprecated use `UploadFileGlobals$inboundSchema` instead. */
  export const inboundSchema = UploadFileGlobals$inboundSchema;
  /** @deprecated use `UploadFileGlobals$outboundSchema` instead. */
  export const outboundSchema = UploadFileGlobals$outboundSchema;
  /** @deprecated use `UploadFileGlobals$Outbound` instead. */
  export type Outbound = UploadFileGlobals$Outbound;
}

export function uploadFileGlobalsToJSON(
  uploadFileGlobals: UploadFileGlobals,
): string {
  return JSON.stringify(
    UploadFileGlobals$outboundSchema.parse(uploadFileGlobals),
  );
}

export function uploadFileGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UploadFileGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadFileGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadFileGlobals' from JSON`,
  );
}

/** @internal */
export const UploadFileRequest$inboundSchema: z.ZodType<
  UploadFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  FileUploadRequestMultiPart:
    components.FileUploadRequestMultiPart$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "FileUploadRequestMultiPart": "fileUploadRequestMultiPart",
  });
});

/** @internal */
export type UploadFileRequest$Outbound = {
  accountID: string;
  FileUploadRequestMultiPart: components.FileUploadRequestMultiPart$Outbound;
};

/** @internal */
export const UploadFileRequest$outboundSchema: z.ZodType<
  UploadFileRequest$Outbound,
  z.ZodTypeDef,
  UploadFileRequest
> = z.object({
  accountID: z.string(),
  fileUploadRequestMultiPart:
    components.FileUploadRequestMultiPart$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    fileUploadRequestMultiPart: "FileUploadRequestMultiPart",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadFileRequest$ {
  /** @deprecated use `UploadFileRequest$inboundSchema` instead. */
  export const inboundSchema = UploadFileRequest$inboundSchema;
  /** @deprecated use `UploadFileRequest$outboundSchema` instead. */
  export const outboundSchema = UploadFileRequest$outboundSchema;
  /** @deprecated use `UploadFileRequest$Outbound` instead. */
  export type Outbound = UploadFileRequest$Outbound;
}

export function uploadFileRequestToJSON(
  uploadFileRequest: UploadFileRequest,
): string {
  return JSON.stringify(
    UploadFileRequest$outboundSchema.parse(uploadFileRequest),
  );
}

export function uploadFileRequestFromJSON(
  jsonString: string,
): SafeParseResult<UploadFileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadFileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadFileRequest' from JSON`,
  );
}

/** @internal */
export const UploadFileResponse$inboundSchema: z.ZodType<
  UploadFileResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.FileDetails$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type UploadFileResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.FileDetails$Outbound;
};

/** @internal */
export const UploadFileResponse$outboundSchema: z.ZodType<
  UploadFileResponse$Outbound,
  z.ZodTypeDef,
  UploadFileResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.FileDetails$outboundSchema,
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
export namespace UploadFileResponse$ {
  /** @deprecated use `UploadFileResponse$inboundSchema` instead. */
  export const inboundSchema = UploadFileResponse$inboundSchema;
  /** @deprecated use `UploadFileResponse$outboundSchema` instead. */
  export const outboundSchema = UploadFileResponse$outboundSchema;
  /** @deprecated use `UploadFileResponse$Outbound` instead. */
  export type Outbound = UploadFileResponse$Outbound;
}

export function uploadFileResponseToJSON(
  uploadFileResponse: UploadFileResponse,
): string {
  return JSON.stringify(
    UploadFileResponse$outboundSchema.parse(uploadFileResponse),
  );
}

export function uploadFileResponseFromJSON(
  jsonString: string,
): SafeParseResult<UploadFileResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadFileResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadFileResponse' from JSON`,
  );
}
