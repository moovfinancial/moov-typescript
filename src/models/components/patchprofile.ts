/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PatchBusiness,
  PatchBusiness$inboundSchema,
  PatchBusiness$Outbound,
  PatchBusiness$outboundSchema,
} from "./patchbusiness.js";
import {
  PatchIndividual,
  PatchIndividual$inboundSchema,
  PatchIndividual$Outbound,
  PatchIndividual$outboundSchema,
} from "./patchindividual.js";

/**
 * Describes the fields available when patching a profile.
 *
 * @remarks
 * Each object can be patched independent of patching the other fields.
 */
export type PatchProfile = {
  /**
   * Describes the fields available when patching an individual.
   */
  individual?: PatchIndividual | undefined;
  business?: PatchBusiness | undefined;
};

/** @internal */
export const PatchProfile$inboundSchema: z.ZodType<
  PatchProfile,
  z.ZodTypeDef,
  unknown
> = z.object({
  individual: PatchIndividual$inboundSchema.optional(),
  business: PatchBusiness$inboundSchema.optional(),
});

/** @internal */
export type PatchProfile$Outbound = {
  individual?: PatchIndividual$Outbound | undefined;
  business?: PatchBusiness$Outbound | undefined;
};

/** @internal */
export const PatchProfile$outboundSchema: z.ZodType<
  PatchProfile$Outbound,
  z.ZodTypeDef,
  PatchProfile
> = z.object({
  individual: PatchIndividual$outboundSchema.optional(),
  business: PatchBusiness$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchProfile$ {
  /** @deprecated use `PatchProfile$inboundSchema` instead. */
  export const inboundSchema = PatchProfile$inboundSchema;
  /** @deprecated use `PatchProfile$outboundSchema` instead. */
  export const outboundSchema = PatchProfile$outboundSchema;
  /** @deprecated use `PatchProfile$Outbound` instead. */
  export type Outbound = PatchProfile$Outbound;
}

export function patchProfileToJSON(patchProfile: PatchProfile): string {
  return JSON.stringify(PatchProfile$outboundSchema.parse(patchProfile));
}

export function patchProfileFromJSON(
  jsonString: string,
): SafeParseResult<PatchProfile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchProfile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchProfile' from JSON`,
  );
}
