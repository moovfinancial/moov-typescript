/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GenerateEndToEndKeyRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
};

/** @internal */
export const GenerateEndToEndKeyRequest$inboundSchema: z.ZodType<
  GenerateEndToEndKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type GenerateEndToEndKeyRequest$Outbound = {
  "x-moov-version"?: string | undefined;
};

/** @internal */
export const GenerateEndToEndKeyRequest$outboundSchema: z.ZodType<
  GenerateEndToEndKeyRequest$Outbound,
  z.ZodTypeDef,
  GenerateEndToEndKeyRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateEndToEndKeyRequest$ {
  /** @deprecated use `GenerateEndToEndKeyRequest$inboundSchema` instead. */
  export const inboundSchema = GenerateEndToEndKeyRequest$inboundSchema;
  /** @deprecated use `GenerateEndToEndKeyRequest$outboundSchema` instead. */
  export const outboundSchema = GenerateEndToEndKeyRequest$outboundSchema;
  /** @deprecated use `GenerateEndToEndKeyRequest$Outbound` instead. */
  export type Outbound = GenerateEndToEndKeyRequest$Outbound;
}

export function generateEndToEndKeyRequestToJSON(
  generateEndToEndKeyRequest: GenerateEndToEndKeyRequest,
): string {
  return JSON.stringify(
    GenerateEndToEndKeyRequest$outboundSchema.parse(generateEndToEndKeyRequest),
  );
}

export function generateEndToEndKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<GenerateEndToEndKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenerateEndToEndKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenerateEndToEndKeyRequest' from JSON`,
  );
}
