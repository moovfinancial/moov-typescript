/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  EnrichedIndustryCodes,
  EnrichedIndustryCodes$inboundSchema,
  EnrichedIndustryCodes$Outbound,
  EnrichedIndustryCodes$outboundSchema,
} from "./enrichedindustrycodes.js";
import {
  PhoneNumber,
  PhoneNumber$inboundSchema,
  PhoneNumber$Outbound,
  PhoneNumber$outboundSchema,
} from "./phonenumber.js";

export type EnrichedBusinessProfile = {
  address?: Address | undefined;
  email?: string | undefined;
  industryCodes?: EnrichedIndustryCodes | undefined;
  legalBusinessName?: string | undefined;
  phone?: PhoneNumber | undefined;
  website?: string | undefined;
};

/** @internal */
export const EnrichedBusinessProfile$inboundSchema: z.ZodType<
  EnrichedBusinessProfile,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: Address$inboundSchema.optional(),
  email: z.string().optional(),
  industryCodes: EnrichedIndustryCodes$inboundSchema.optional(),
  legalBusinessName: z.string().optional(),
  phone: PhoneNumber$inboundSchema.optional(),
  website: z.string().optional(),
});

/** @internal */
export type EnrichedBusinessProfile$Outbound = {
  address?: Address$Outbound | undefined;
  email?: string | undefined;
  industryCodes?: EnrichedIndustryCodes$Outbound | undefined;
  legalBusinessName?: string | undefined;
  phone?: PhoneNumber$Outbound | undefined;
  website?: string | undefined;
};

/** @internal */
export const EnrichedBusinessProfile$outboundSchema: z.ZodType<
  EnrichedBusinessProfile$Outbound,
  z.ZodTypeDef,
  EnrichedBusinessProfile
> = z.object({
  address: Address$outboundSchema.optional(),
  email: z.string().optional(),
  industryCodes: EnrichedIndustryCodes$outboundSchema.optional(),
  legalBusinessName: z.string().optional(),
  phone: PhoneNumber$outboundSchema.optional(),
  website: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrichedBusinessProfile$ {
  /** @deprecated use `EnrichedBusinessProfile$inboundSchema` instead. */
  export const inboundSchema = EnrichedBusinessProfile$inboundSchema;
  /** @deprecated use `EnrichedBusinessProfile$outboundSchema` instead. */
  export const outboundSchema = EnrichedBusinessProfile$outboundSchema;
  /** @deprecated use `EnrichedBusinessProfile$Outbound` instead. */
  export type Outbound = EnrichedBusinessProfile$Outbound;
}

export function enrichedBusinessProfileToJSON(
  enrichedBusinessProfile: EnrichedBusinessProfile,
): string {
  return JSON.stringify(
    EnrichedBusinessProfile$outboundSchema.parse(enrichedBusinessProfile),
  );
}

export function enrichedBusinessProfileFromJSON(
  jsonString: string,
): SafeParseResult<EnrichedBusinessProfile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnrichedBusinessProfile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnrichedBusinessProfile' from JSON`,
  );
}
