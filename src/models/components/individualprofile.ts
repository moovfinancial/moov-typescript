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
  IndividualName,
  IndividualName$inboundSchema,
  IndividualName$Outbound,
  IndividualName$outboundSchema,
} from "./individualname.js";
import {
  PhoneNumber,
  PhoneNumber$inboundSchema,
  PhoneNumber$Outbound,
  PhoneNumber$outboundSchema,
} from "./phonenumber.js";

/**
 * Describes an individual.
 */
export type IndividualProfile = {
  name: IndividualName;
  phone?: PhoneNumber | undefined;
  email?: string | undefined;
  address?: Address | undefined;
  /**
   * Indicates whether this individual's birth date has been provided.
   */
  birthDateProvided?: boolean | undefined;
  /**
   * Indicates whether a government ID (SSN, ITIN, etc.) has been provided for this individual.
   */
  governmentIDProvided?: boolean | undefined;
};

/** @internal */
export const IndividualProfile$inboundSchema: z.ZodType<
  IndividualProfile,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: IndividualName$inboundSchema,
  phone: PhoneNumber$inboundSchema.optional(),
  email: z.string().optional(),
  address: Address$inboundSchema.optional(),
  birthDateProvided: z.boolean().optional(),
  governmentIDProvided: z.boolean().optional(),
});

/** @internal */
export type IndividualProfile$Outbound = {
  name: IndividualName$Outbound;
  phone?: PhoneNumber$Outbound | undefined;
  email?: string | undefined;
  address?: Address$Outbound | undefined;
  birthDateProvided?: boolean | undefined;
  governmentIDProvided?: boolean | undefined;
};

/** @internal */
export const IndividualProfile$outboundSchema: z.ZodType<
  IndividualProfile$Outbound,
  z.ZodTypeDef,
  IndividualProfile
> = z.object({
  name: IndividualName$outboundSchema,
  phone: PhoneNumber$outboundSchema.optional(),
  email: z.string().optional(),
  address: Address$outboundSchema.optional(),
  birthDateProvided: z.boolean().optional(),
  governmentIDProvided: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndividualProfile$ {
  /** @deprecated use `IndividualProfile$inboundSchema` instead. */
  export const inboundSchema = IndividualProfile$inboundSchema;
  /** @deprecated use `IndividualProfile$outboundSchema` instead. */
  export const outboundSchema = IndividualProfile$outboundSchema;
  /** @deprecated use `IndividualProfile$Outbound` instead. */
  export type Outbound = IndividualProfile$Outbound;
}

export function individualProfileToJSON(
  individualProfile: IndividualProfile,
): string {
  return JSON.stringify(
    IndividualProfile$outboundSchema.parse(individualProfile),
  );
}

export function individualProfileFromJSON(
  jsonString: string,
): SafeParseResult<IndividualProfile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndividualProfile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndividualProfile' from JSON`,
  );
}
