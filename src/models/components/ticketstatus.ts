/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const TicketStatus = {
  New: "new",
  InProgress: "in-progress",
  OnHold: "on-hold",
  Closed: "closed",
} as const;
export type TicketStatus = ClosedEnum<typeof TicketStatus>;

/** @internal */
export const TicketStatus$inboundSchema: z.ZodNativeEnum<typeof TicketStatus> =
  z.nativeEnum(TicketStatus);

/** @internal */
export const TicketStatus$outboundSchema: z.ZodNativeEnum<typeof TicketStatus> =
  TicketStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketStatus$ {
  /** @deprecated use `TicketStatus$inboundSchema` instead. */
  export const inboundSchema = TicketStatus$inboundSchema;
  /** @deprecated use `TicketStatus$outboundSchema` instead. */
  export const outboundSchema = TicketStatus$outboundSchema;
}
