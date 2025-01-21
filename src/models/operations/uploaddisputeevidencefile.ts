/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UploadDisputeEvidenceFileSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type UploadDisputeEvidenceFileRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  accountID: string;
  disputeID: string;
  createEvidenceFileMultiPart: components.CreateEvidenceFileMultiPart;
};

/** @internal */
export const UploadDisputeEvidenceFileSecurity$inboundSchema: z.ZodType<
  UploadDisputeEvidenceFileSecurity,
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
export type UploadDisputeEvidenceFileSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const UploadDisputeEvidenceFileSecurity$outboundSchema: z.ZodType<
  UploadDisputeEvidenceFileSecurity$Outbound,
  z.ZodTypeDef,
  UploadDisputeEvidenceFileSecurity
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
export namespace UploadDisputeEvidenceFileSecurity$ {
  /** @deprecated use `UploadDisputeEvidenceFileSecurity$inboundSchema` instead. */
  export const inboundSchema = UploadDisputeEvidenceFileSecurity$inboundSchema;
  /** @deprecated use `UploadDisputeEvidenceFileSecurity$outboundSchema` instead. */
  export const outboundSchema =
    UploadDisputeEvidenceFileSecurity$outboundSchema;
  /** @deprecated use `UploadDisputeEvidenceFileSecurity$Outbound` instead. */
  export type Outbound = UploadDisputeEvidenceFileSecurity$Outbound;
}

export function uploadDisputeEvidenceFileSecurityToJSON(
  uploadDisputeEvidenceFileSecurity: UploadDisputeEvidenceFileSecurity,
): string {
  return JSON.stringify(
    UploadDisputeEvidenceFileSecurity$outboundSchema.parse(
      uploadDisputeEvidenceFileSecurity,
    ),
  );
}

export function uploadDisputeEvidenceFileSecurityFromJSON(
  jsonString: string,
): SafeParseResult<UploadDisputeEvidenceFileSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadDisputeEvidenceFileSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadDisputeEvidenceFileSecurity' from JSON`,
  );
}

/** @internal */
export const UploadDisputeEvidenceFileRequest$inboundSchema: z.ZodType<
  UploadDisputeEvidenceFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  disputeID: z.string(),
  CreateEvidenceFileMultiPart:
    components.CreateEvidenceFileMultiPart$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
    "CreateEvidenceFileMultiPart": "createEvidenceFileMultiPart",
  });
});

/** @internal */
export type UploadDisputeEvidenceFileRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  disputeID: string;
  CreateEvidenceFileMultiPart: components.CreateEvidenceFileMultiPart$Outbound;
};

/** @internal */
export const UploadDisputeEvidenceFileRequest$outboundSchema: z.ZodType<
  UploadDisputeEvidenceFileRequest$Outbound,
  z.ZodTypeDef,
  UploadDisputeEvidenceFileRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  disputeID: z.string(),
  createEvidenceFileMultiPart:
    components.CreateEvidenceFileMultiPart$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
    createEvidenceFileMultiPart: "CreateEvidenceFileMultiPart",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadDisputeEvidenceFileRequest$ {
  /** @deprecated use `UploadDisputeEvidenceFileRequest$inboundSchema` instead. */
  export const inboundSchema = UploadDisputeEvidenceFileRequest$inboundSchema;
  /** @deprecated use `UploadDisputeEvidenceFileRequest$outboundSchema` instead. */
  export const outboundSchema = UploadDisputeEvidenceFileRequest$outboundSchema;
  /** @deprecated use `UploadDisputeEvidenceFileRequest$Outbound` instead. */
  export type Outbound = UploadDisputeEvidenceFileRequest$Outbound;
}

export function uploadDisputeEvidenceFileRequestToJSON(
  uploadDisputeEvidenceFileRequest: UploadDisputeEvidenceFileRequest,
): string {
  return JSON.stringify(
    UploadDisputeEvidenceFileRequest$outboundSchema.parse(
      uploadDisputeEvidenceFileRequest,
    ),
  );
}

export function uploadDisputeEvidenceFileRequestFromJSON(
  jsonString: string,
): SafeParseResult<UploadDisputeEvidenceFileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadDisputeEvidenceFileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadDisputeEvidenceFileRequest' from JSON`,
  );
}
