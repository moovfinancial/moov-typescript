/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BrandColors,
  BrandColors$inboundSchema,
  BrandColors$Outbound,
  BrandColors$outboundSchema,
} from "./brandcolors.js";

export type BrandProperties = {
  /**
   * Brand colors for light and dark modes.
   */
  colors: BrandColors;
};

/** @internal */
export const BrandProperties$inboundSchema: z.ZodType<
  BrandProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  colors: BrandColors$inboundSchema,
});

/** @internal */
export type BrandProperties$Outbound = {
  colors: BrandColors$Outbound;
};

/** @internal */
export const BrandProperties$outboundSchema: z.ZodType<
  BrandProperties$Outbound,
  z.ZodTypeDef,
  BrandProperties
> = z.object({
  colors: BrandColors$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BrandProperties$ {
  /** @deprecated use `BrandProperties$inboundSchema` instead. */
  export const inboundSchema = BrandProperties$inboundSchema;
  /** @deprecated use `BrandProperties$outboundSchema` instead. */
  export const outboundSchema = BrandProperties$outboundSchema;
  /** @deprecated use `BrandProperties$Outbound` instead. */
  export type Outbound = BrandProperties$Outbound;
}

export function brandPropertiesToJSON(
  brandProperties: BrandProperties,
): string {
  return JSON.stringify(BrandProperties$outboundSchema.parse(brandProperties));
}

export function brandPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BrandProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BrandProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BrandProperties' from JSON`,
  );
}
