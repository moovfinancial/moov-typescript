/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const EvidenceType = {
  Receipt: "receipt",
  ProofOfDelivery: "proof-of-delivery",
  CancelationPolicy: "cancelation-policy",
  TermsOfService: "terms-of-service",
  CustomerCommunication: "customer-communication",
  GenericEvidence: "generic-evidence",
  CoverLetter: "cover-letter",
  Other: "other",
} as const;
export type EvidenceType = ClosedEnum<typeof EvidenceType>;

/** @internal */
export const EvidenceType$inboundSchema: z.ZodNativeEnum<typeof EvidenceType> =
  z.nativeEnum(EvidenceType);

/** @internal */
export const EvidenceType$outboundSchema: z.ZodNativeEnum<typeof EvidenceType> =
  EvidenceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvidenceType$ {
  /** @deprecated use `EvidenceType$inboundSchema` instead. */
  export const inboundSchema = EvidenceType$inboundSchema;
  /** @deprecated use `EvidenceType$outboundSchema` instead. */
  export const outboundSchema = EvidenceType$outboundSchema;
}
