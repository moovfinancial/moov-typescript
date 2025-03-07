/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status of the completed occurrence.
 */
export const OccurrenceStatus = {
  Pending: "pending",
  Failed: "failed",
  Completed: "completed",
} as const;
/**
 * Status of the completed occurrence.
 */
export type OccurrenceStatus = ClosedEnum<typeof OccurrenceStatus>;

/** @internal */
export const OccurrenceStatus$inboundSchema: z.ZodNativeEnum<
  typeof OccurrenceStatus
> = z.nativeEnum(OccurrenceStatus);

/** @internal */
export const OccurrenceStatus$outboundSchema: z.ZodNativeEnum<
  typeof OccurrenceStatus
> = OccurrenceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OccurrenceStatus$ {
  /** @deprecated use `OccurrenceStatus$inboundSchema` instead. */
  export const inboundSchema = OccurrenceStatus$inboundSchema;
  /** @deprecated use `OccurrenceStatus$outboundSchema` instead. */
  export const outboundSchema = OccurrenceStatus$outboundSchema;
}
