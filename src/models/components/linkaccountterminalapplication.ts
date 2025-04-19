/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Describes a request to link an account with a terminal application.
 */
export type LinkAccountTerminalApplication = {
  /**
   * ID of the terminal application.
   */
  terminalApplicationID: string;
};

/** @internal */
export const LinkAccountTerminalApplication$inboundSchema: z.ZodType<
  LinkAccountTerminalApplication,
  z.ZodTypeDef,
  unknown
> = z.object({
  terminalApplicationID: z.string(),
});

/** @internal */
export type LinkAccountTerminalApplication$Outbound = {
  terminalApplicationID: string;
};

/** @internal */
export const LinkAccountTerminalApplication$outboundSchema: z.ZodType<
  LinkAccountTerminalApplication$Outbound,
  z.ZodTypeDef,
  LinkAccountTerminalApplication
> = z.object({
  terminalApplicationID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkAccountTerminalApplication$ {
  /** @deprecated use `LinkAccountTerminalApplication$inboundSchema` instead. */
  export const inboundSchema = LinkAccountTerminalApplication$inboundSchema;
  /** @deprecated use `LinkAccountTerminalApplication$outboundSchema` instead. */
  export const outboundSchema = LinkAccountTerminalApplication$outboundSchema;
  /** @deprecated use `LinkAccountTerminalApplication$Outbound` instead. */
  export type Outbound = LinkAccountTerminalApplication$Outbound;
}

export function linkAccountTerminalApplicationToJSON(
  linkAccountTerminalApplication: LinkAccountTerminalApplication,
): string {
  return JSON.stringify(
    LinkAccountTerminalApplication$outboundSchema.parse(
      linkAccountTerminalApplication,
    ),
  );
}

export function linkAccountTerminalApplicationFromJSON(
  jsonString: string,
): SafeParseResult<LinkAccountTerminalApplication, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkAccountTerminalApplication$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkAccountTerminalApplication' from JSON`,
  );
}
