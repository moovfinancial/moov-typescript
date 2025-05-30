/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CapabilitiesError = {
  capabilities?: { [k: string]: string } | undefined;
};

/** @internal */
export const CapabilitiesError$inboundSchema: z.ZodType<
  CapabilitiesError,
  z.ZodTypeDef,
  unknown
> = z.object({
  capabilities: z.record(z.string()).optional(),
});

/** @internal */
export type CapabilitiesError$Outbound = {
  capabilities?: { [k: string]: string } | undefined;
};

/** @internal */
export const CapabilitiesError$outboundSchema: z.ZodType<
  CapabilitiesError$Outbound,
  z.ZodTypeDef,
  CapabilitiesError
> = z.object({
  capabilities: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CapabilitiesError$ {
  /** @deprecated use `CapabilitiesError$inboundSchema` instead. */
  export const inboundSchema = CapabilitiesError$inboundSchema;
  /** @deprecated use `CapabilitiesError$outboundSchema` instead. */
  export const outboundSchema = CapabilitiesError$outboundSchema;
  /** @deprecated use `CapabilitiesError$Outbound` instead. */
  export type Outbound = CapabilitiesError$Outbound;
}

export function capabilitiesErrorToJSON(
  capabilitiesError: CapabilitiesError,
): string {
  return JSON.stringify(
    CapabilitiesError$outboundSchema.parse(capabilitiesError),
  );
}

export function capabilitiesErrorFromJSON(
  jsonString: string,
): SafeParseResult<CapabilitiesError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CapabilitiesError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CapabilitiesError' from JSON`,
  );
}
