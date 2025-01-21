/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IssuingIntervalLimit,
  IssuingIntervalLimit$inboundSchema,
  IssuingIntervalLimit$outboundSchema,
} from "./issuingintervallimit.js";

export type IssuingVelocityLimit = {
  /**
   * The maximum amount in cents that can be spent in a given interval.
   */
  amount: number;
  /**
   * Specifies the time frame for the velocity limit. Currently supports only per-transaction limits.
   */
  interval: IssuingIntervalLimit;
};

/** @internal */
export const IssuingVelocityLimit$inboundSchema: z.ZodType<
  IssuingVelocityLimit,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().int(),
  interval: IssuingIntervalLimit$inboundSchema,
});

/** @internal */
export type IssuingVelocityLimit$Outbound = {
  amount: number;
  interval: string;
};

/** @internal */
export const IssuingVelocityLimit$outboundSchema: z.ZodType<
  IssuingVelocityLimit$Outbound,
  z.ZodTypeDef,
  IssuingVelocityLimit
> = z.object({
  amount: z.number().int(),
  interval: IssuingIntervalLimit$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssuingVelocityLimit$ {
  /** @deprecated use `IssuingVelocityLimit$inboundSchema` instead. */
  export const inboundSchema = IssuingVelocityLimit$inboundSchema;
  /** @deprecated use `IssuingVelocityLimit$outboundSchema` instead. */
  export const outboundSchema = IssuingVelocityLimit$outboundSchema;
  /** @deprecated use `IssuingVelocityLimit$Outbound` instead. */
  export type Outbound = IssuingVelocityLimit$Outbound;
}

export function issuingVelocityLimitToJSON(
  issuingVelocityLimit: IssuingVelocityLimit,
): string {
  return JSON.stringify(
    IssuingVelocityLimit$outboundSchema.parse(issuingVelocityLimit),
  );
}

export function issuingVelocityLimitFromJSON(
  jsonString: string,
): SafeParseResult<IssuingVelocityLimit, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IssuingVelocityLimit$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IssuingVelocityLimit' from JSON`,
  );
}
