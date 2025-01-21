/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UpdateColors,
  UpdateColors$inboundSchema,
  UpdateColors$Outbound,
  UpdateColors$outboundSchema,
} from "./updatecolors.js";

export type UpdateBrand = {
  colors?: UpdateColors | undefined;
};

/** @internal */
export const UpdateBrand$inboundSchema: z.ZodType<
  UpdateBrand,
  z.ZodTypeDef,
  unknown
> = z.object({
  colors: UpdateColors$inboundSchema.optional(),
});

/** @internal */
export type UpdateBrand$Outbound = {
  colors?: UpdateColors$Outbound | undefined;
};

/** @internal */
export const UpdateBrand$outboundSchema: z.ZodType<
  UpdateBrand$Outbound,
  z.ZodTypeDef,
  UpdateBrand
> = z.object({
  colors: UpdateColors$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateBrand$ {
  /** @deprecated use `UpdateBrand$inboundSchema` instead. */
  export const inboundSchema = UpdateBrand$inboundSchema;
  /** @deprecated use `UpdateBrand$outboundSchema` instead. */
  export const outboundSchema = UpdateBrand$outboundSchema;
  /** @deprecated use `UpdateBrand$Outbound` instead. */
  export type Outbound = UpdateBrand$Outbound;
}

export function updateBrandToJSON(updateBrand: UpdateBrand): string {
  return JSON.stringify(UpdateBrand$outboundSchema.parse(updateBrand));
}

export function updateBrandFromJSON(
  jsonString: string,
): SafeParseResult<UpdateBrand, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateBrand$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateBrand' from JSON`,
  );
}
