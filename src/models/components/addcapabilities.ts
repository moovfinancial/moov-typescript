/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CapabilityID,
  CapabilityID$inboundSchema,
  CapabilityID$outboundSchema,
} from "./capabilityid.js";

export type AddCapabilities = {
  capabilities: Array<CapabilityID>;
};

/** @internal */
export const AddCapabilities$inboundSchema: z.ZodType<
  AddCapabilities,
  z.ZodTypeDef,
  unknown
> = z.object({
  capabilities: z.array(CapabilityID$inboundSchema),
});

/** @internal */
export type AddCapabilities$Outbound = {
  capabilities: Array<string>;
};

/** @internal */
export const AddCapabilities$outboundSchema: z.ZodType<
  AddCapabilities$Outbound,
  z.ZodTypeDef,
  AddCapabilities
> = z.object({
  capabilities: z.array(CapabilityID$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddCapabilities$ {
  /** @deprecated use `AddCapabilities$inboundSchema` instead. */
  export const inboundSchema = AddCapabilities$inboundSchema;
  /** @deprecated use `AddCapabilities$outboundSchema` instead. */
  export const outboundSchema = AddCapabilities$outboundSchema;
  /** @deprecated use `AddCapabilities$Outbound` instead. */
  export type Outbound = AddCapabilities$Outbound;
}

export function addCapabilitiesToJSON(
  addCapabilities: AddCapabilities,
): string {
  return JSON.stringify(AddCapabilities$outboundSchema.parse(addCapabilities));
}

export function addCapabilitiesFromJSON(
  jsonString: string,
): SafeParseResult<AddCapabilities, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddCapabilities$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddCapabilities' from JSON`,
  );
}
