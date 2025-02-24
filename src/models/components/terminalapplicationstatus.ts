/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status of the terminal application.
 */
export const TerminalApplicationStatus = {
  Undefined: "undefined",
  Pending: "pending",
  Enabled: "enabled",
  Disabled: "disabled",
} as const;
/**
 * Status of the terminal application.
 */
export type TerminalApplicationStatus = ClosedEnum<
  typeof TerminalApplicationStatus
>;

/** @internal */
export const TerminalApplicationStatus$inboundSchema: z.ZodNativeEnum<
  typeof TerminalApplicationStatus
> = z.nativeEnum(TerminalApplicationStatus);

/** @internal */
export const TerminalApplicationStatus$outboundSchema: z.ZodNativeEnum<
  typeof TerminalApplicationStatus
> = TerminalApplicationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TerminalApplicationStatus$ {
  /** @deprecated use `TerminalApplicationStatus$inboundSchema` instead. */
  export const inboundSchema = TerminalApplicationStatus$inboundSchema;
  /** @deprecated use `TerminalApplicationStatus$outboundSchema` instead. */
  export const outboundSchema = TerminalApplicationStatus$outboundSchema;
}
