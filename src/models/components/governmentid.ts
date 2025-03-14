/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Ssn = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

export type Itin = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

export type GovernmentID = {
  ssn?: Ssn | undefined;
  itin?: Itin | undefined;
};

/** @internal */
export const Ssn$inboundSchema: z.ZodType<Ssn, z.ZodTypeDef, unknown> = z
  .object({
    full: z.string().optional(),
    lastFour: z.string().optional(),
  });

/** @internal */
export type Ssn$Outbound = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

/** @internal */
export const Ssn$outboundSchema: z.ZodType<Ssn$Outbound, z.ZodTypeDef, Ssn> = z
  .object({
    full: z.string().optional(),
    lastFour: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Ssn$ {
  /** @deprecated use `Ssn$inboundSchema` instead. */
  export const inboundSchema = Ssn$inboundSchema;
  /** @deprecated use `Ssn$outboundSchema` instead. */
  export const outboundSchema = Ssn$outboundSchema;
  /** @deprecated use `Ssn$Outbound` instead. */
  export type Outbound = Ssn$Outbound;
}

export function ssnToJSON(ssn: Ssn): string {
  return JSON.stringify(Ssn$outboundSchema.parse(ssn));
}

export function ssnFromJSON(
  jsonString: string,
): SafeParseResult<Ssn, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Ssn$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Ssn' from JSON`,
  );
}

/** @internal */
export const Itin$inboundSchema: z.ZodType<Itin, z.ZodTypeDef, unknown> = z
  .object({
    full: z.string().optional(),
    lastFour: z.string().optional(),
  });

/** @internal */
export type Itin$Outbound = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

/** @internal */
export const Itin$outboundSchema: z.ZodType<Itin$Outbound, z.ZodTypeDef, Itin> =
  z.object({
    full: z.string().optional(),
    lastFour: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Itin$ {
  /** @deprecated use `Itin$inboundSchema` instead. */
  export const inboundSchema = Itin$inboundSchema;
  /** @deprecated use `Itin$outboundSchema` instead. */
  export const outboundSchema = Itin$outboundSchema;
  /** @deprecated use `Itin$Outbound` instead. */
  export type Outbound = Itin$Outbound;
}

export function itinToJSON(itin: Itin): string {
  return JSON.stringify(Itin$outboundSchema.parse(itin));
}

export function itinFromJSON(
  jsonString: string,
): SafeParseResult<Itin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Itin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Itin' from JSON`,
  );
}

/** @internal */
export const GovernmentID$inboundSchema: z.ZodType<
  GovernmentID,
  z.ZodTypeDef,
  unknown
> = z.object({
  ssn: z.lazy(() => Ssn$inboundSchema).optional(),
  itin: z.lazy(() => Itin$inboundSchema).optional(),
});

/** @internal */
export type GovernmentID$Outbound = {
  ssn?: Ssn$Outbound | undefined;
  itin?: Itin$Outbound | undefined;
};

/** @internal */
export const GovernmentID$outboundSchema: z.ZodType<
  GovernmentID$Outbound,
  z.ZodTypeDef,
  GovernmentID
> = z.object({
  ssn: z.lazy(() => Ssn$outboundSchema).optional(),
  itin: z.lazy(() => Itin$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GovernmentID$ {
  /** @deprecated use `GovernmentID$inboundSchema` instead. */
  export const inboundSchema = GovernmentID$inboundSchema;
  /** @deprecated use `GovernmentID$outboundSchema` instead. */
  export const outboundSchema = GovernmentID$outboundSchema;
  /** @deprecated use `GovernmentID$Outbound` instead. */
  export type Outbound = GovernmentID$Outbound;
}

export function governmentIDToJSON(governmentID: GovernmentID): string {
  return JSON.stringify(GovernmentID$outboundSchema.parse(governmentID));
}

export function governmentIDFromJSON(
  jsonString: string,
): SafeParseResult<GovernmentID, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GovernmentID$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GovernmentID' from JSON`,
  );
}
