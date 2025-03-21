/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Describes the job responsibilities of a business representative.
 */
export type RepresentativeResponsibilities = {
  /**
   * Indicates whether this individual has significant management responsibilities within the business.
   */
  isController?: boolean | undefined;
  /**
   * If `true`, this field indicates that the individual has a business ownership stake of at least 25% in the
   *
   * @remarks
   * business. If the representative does not own at least 25% of the business, this field should be `false`.
   */
  isOwner?: boolean | undefined;
  /**
   * The percentage of ownership this individual has in the business (required if `isOwner` is `true`).
   */
  ownershipPercentage?: number | undefined;
  jobTitle?: string | undefined;
};

/** @internal */
export const RepresentativeResponsibilities$inboundSchema: z.ZodType<
  RepresentativeResponsibilities,
  z.ZodTypeDef,
  unknown
> = z.object({
  isController: z.boolean().optional(),
  isOwner: z.boolean().optional(),
  ownershipPercentage: z.number().int().optional(),
  jobTitle: z.string().optional(),
});

/** @internal */
export type RepresentativeResponsibilities$Outbound = {
  isController?: boolean | undefined;
  isOwner?: boolean | undefined;
  ownershipPercentage?: number | undefined;
  jobTitle?: string | undefined;
};

/** @internal */
export const RepresentativeResponsibilities$outboundSchema: z.ZodType<
  RepresentativeResponsibilities$Outbound,
  z.ZodTypeDef,
  RepresentativeResponsibilities
> = z.object({
  isController: z.boolean().optional(),
  isOwner: z.boolean().optional(),
  ownershipPercentage: z.number().int().optional(),
  jobTitle: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RepresentativeResponsibilities$ {
  /** @deprecated use `RepresentativeResponsibilities$inboundSchema` instead. */
  export const inboundSchema = RepresentativeResponsibilities$inboundSchema;
  /** @deprecated use `RepresentativeResponsibilities$outboundSchema` instead. */
  export const outboundSchema = RepresentativeResponsibilities$outboundSchema;
  /** @deprecated use `RepresentativeResponsibilities$Outbound` instead. */
  export type Outbound = RepresentativeResponsibilities$Outbound;
}

export function representativeResponsibilitiesToJSON(
  representativeResponsibilities: RepresentativeResponsibilities,
): string {
  return JSON.stringify(
    RepresentativeResponsibilities$outboundSchema.parse(
      representativeResponsibilities,
    ),
  );
}

export function representativeResponsibilitiesFromJSON(
  jsonString: string,
): SafeParseResult<RepresentativeResponsibilities, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RepresentativeResponsibilities$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RepresentativeResponsibilities' from JSON`,
  );
}
