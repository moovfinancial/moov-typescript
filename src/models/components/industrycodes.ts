/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IndustryCodes = {
  naics?: string | undefined;
  sic?: string | undefined;
  mcc?: string | undefined;
};

/** @internal */
export const IndustryCodes$inboundSchema: z.ZodType<
  IndustryCodes,
  z.ZodTypeDef,
  unknown
> = z.object({
  naics: z.string().optional(),
  sic: z.string().optional(),
  mcc: z.string().optional(),
});

/** @internal */
export type IndustryCodes$Outbound = {
  naics?: string | undefined;
  sic?: string | undefined;
  mcc?: string | undefined;
};

/** @internal */
export const IndustryCodes$outboundSchema: z.ZodType<
  IndustryCodes$Outbound,
  z.ZodTypeDef,
  IndustryCodes
> = z.object({
  naics: z.string().optional(),
  sic: z.string().optional(),
  mcc: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndustryCodes$ {
  /** @deprecated use `IndustryCodes$inboundSchema` instead. */
  export const inboundSchema = IndustryCodes$inboundSchema;
  /** @deprecated use `IndustryCodes$outboundSchema` instead. */
  export const outboundSchema = IndustryCodes$outboundSchema;
  /** @deprecated use `IndustryCodes$Outbound` instead. */
  export type Outbound = IndustryCodes$Outbound;
}

export function industryCodesToJSON(industryCodes: IndustryCodes): string {
  return JSON.stringify(IndustryCodes$outboundSchema.parse(industryCodes));
}

export function industryCodesFromJSON(
  jsonString: string,
): SafeParseResult<IndustryCodes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndustryCodes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndustryCodes' from JSON`,
  );
}
