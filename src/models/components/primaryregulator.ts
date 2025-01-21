/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * If the business is a financial institution, this field describes its primary regulator.
 */
export const PrimaryRegulator = {
  Occ: "OCC",
  Fdic: "FDIC",
  Ncua: "NCUA",
  Frb: "FRB",
} as const;
/**
 * If the business is a financial institution, this field describes its primary regulator.
 */
export type PrimaryRegulator = ClosedEnum<typeof PrimaryRegulator>;

/** @internal */
export const PrimaryRegulator$inboundSchema: z.ZodNativeEnum<
  typeof PrimaryRegulator
> = z.nativeEnum(PrimaryRegulator);

/** @internal */
export const PrimaryRegulator$outboundSchema: z.ZodNativeEnum<
  typeof PrimaryRegulator
> = PrimaryRegulator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryRegulator$ {
  /** @deprecated use `PrimaryRegulator$inboundSchema` instead. */
  export const inboundSchema = PrimaryRegulator$inboundSchema;
  /** @deprecated use `PrimaryRegulator$outboundSchema` instead. */
  export const outboundSchema = PrimaryRegulator$outboundSchema;
}
