/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * An optional override of your default ACH hold period in banking days. The hold period must be longer than or equal to your default setting.
 */
export const DebitHoldPeriod = {
  NoHold: "no-hold",
  OneMinusDay: "1-day",
  TwoMinusDays: "2-days",
} as const;
/**
 * An optional override of your default ACH hold period in banking days. The hold period must be longer than or equal to your default setting.
 */
export type DebitHoldPeriod = ClosedEnum<typeof DebitHoldPeriod>;

/** @internal */
export const DebitHoldPeriod$inboundSchema: z.ZodNativeEnum<
  typeof DebitHoldPeriod
> = z.nativeEnum(DebitHoldPeriod);

/** @internal */
export const DebitHoldPeriod$outboundSchema: z.ZodNativeEnum<
  typeof DebitHoldPeriod
> = DebitHoldPeriod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DebitHoldPeriod$ {
  /** @deprecated use `DebitHoldPeriod$inboundSchema` instead. */
  export const inboundSchema = DebitHoldPeriod$inboundSchema;
  /** @deprecated use `DebitHoldPeriod$outboundSchema` instead. */
  export const outboundSchema = DebitHoldPeriod$outboundSchema;
}
