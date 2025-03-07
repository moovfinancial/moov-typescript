/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const FeePlanAgreementStatus = {
  Active: "active",
  Terminated: "terminated",
} as const;
export type FeePlanAgreementStatus = ClosedEnum<typeof FeePlanAgreementStatus>;

/** @internal */
export const FeePlanAgreementStatus$inboundSchema: z.ZodNativeEnum<
  typeof FeePlanAgreementStatus
> = z.nativeEnum(FeePlanAgreementStatus);

/** @internal */
export const FeePlanAgreementStatus$outboundSchema: z.ZodNativeEnum<
  typeof FeePlanAgreementStatus
> = FeePlanAgreementStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeePlanAgreementStatus$ {
  /** @deprecated use `FeePlanAgreementStatus$inboundSchema` instead. */
  export const inboundSchema = FeePlanAgreementStatus$inboundSchema;
  /** @deprecated use `FeePlanAgreementStatus$outboundSchema` instead. */
  export const outboundSchema = FeePlanAgreementStatus$outboundSchema;
}
