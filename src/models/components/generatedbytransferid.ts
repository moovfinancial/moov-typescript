/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GeneratedByTransferID = {
  transferID?: string | undefined;
};

/** @internal */
export const GeneratedByTransferID$inboundSchema: z.ZodType<
  GeneratedByTransferID,
  z.ZodTypeDef,
  unknown
> = z.object({
  transferID: z.string().optional(),
});

/** @internal */
export type GeneratedByTransferID$Outbound = {
  transferID?: string | undefined;
};

/** @internal */
export const GeneratedByTransferID$outboundSchema: z.ZodType<
  GeneratedByTransferID$Outbound,
  z.ZodTypeDef,
  GeneratedByTransferID
> = z.object({
  transferID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratedByTransferID$ {
  /** @deprecated use `GeneratedByTransferID$inboundSchema` instead. */
  export const inboundSchema = GeneratedByTransferID$inboundSchema;
  /** @deprecated use `GeneratedByTransferID$outboundSchema` instead. */
  export const outboundSchema = GeneratedByTransferID$outboundSchema;
  /** @deprecated use `GeneratedByTransferID$Outbound` instead. */
  export type Outbound = GeneratedByTransferID$Outbound;
}

export function generatedByTransferIDToJSON(
  generatedByTransferID: GeneratedByTransferID,
): string {
  return JSON.stringify(
    GeneratedByTransferID$outboundSchema.parse(generatedByTransferID),
  );
}

export function generatedByTransferIDFromJSON(
  jsonString: string,
): SafeParseResult<GeneratedByTransferID, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GeneratedByTransferID$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GeneratedByTransferID' from JSON`,
  );
}
