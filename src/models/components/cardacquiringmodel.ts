/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Specifies the card processing pricing model
 */
export const CardAcquiringModel = {
  CostPlus: "cost-plus",
  FlatRate: "flat-rate",
} as const;
/**
 * Specifies the card processing pricing model
 */
export type CardAcquiringModel = ClosedEnum<typeof CardAcquiringModel>;

/** @internal */
export const CardAcquiringModel$inboundSchema: z.ZodNativeEnum<
  typeof CardAcquiringModel
> = z.nativeEnum(CardAcquiringModel);

/** @internal */
export const CardAcquiringModel$outboundSchema: z.ZodNativeEnum<
  typeof CardAcquiringModel
> = CardAcquiringModel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CardAcquiringModel$ {
  /** @deprecated use `CardAcquiringModel$inboundSchema` instead. */
  export const inboundSchema = CardAcquiringModel$inboundSchema;
  /** @deprecated use `CardAcquiringModel$outboundSchema` instead. */
  export const outboundSchema = CardAcquiringModel$outboundSchema;
}
