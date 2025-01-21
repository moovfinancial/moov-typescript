/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BrandColorValidationError = {
  accent?: string | undefined;
};

/** @internal */
export const BrandColorValidationError$inboundSchema: z.ZodType<
  BrandColorValidationError,
  z.ZodTypeDef,
  unknown
> = z.object({
  accent: z.string().optional(),
});

/** @internal */
export type BrandColorValidationError$Outbound = {
  accent?: string | undefined;
};

/** @internal */
export const BrandColorValidationError$outboundSchema: z.ZodType<
  BrandColorValidationError$Outbound,
  z.ZodTypeDef,
  BrandColorValidationError
> = z.object({
  accent: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BrandColorValidationError$ {
  /** @deprecated use `BrandColorValidationError$inboundSchema` instead. */
  export const inboundSchema = BrandColorValidationError$inboundSchema;
  /** @deprecated use `BrandColorValidationError$outboundSchema` instead. */
  export const outboundSchema = BrandColorValidationError$outboundSchema;
  /** @deprecated use `BrandColorValidationError$Outbound` instead. */
  export type Outbound = BrandColorValidationError$Outbound;
}

export function brandColorValidationErrorToJSON(
  brandColorValidationError: BrandColorValidationError,
): string {
  return JSON.stringify(
    BrandColorValidationError$outboundSchema.parse(brandColorValidationError),
  );
}

export function brandColorValidationErrorFromJSON(
  jsonString: string,
): SafeParseResult<BrandColorValidationError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BrandColorValidationError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BrandColorValidationError' from JSON`,
  );
}
