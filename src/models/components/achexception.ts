/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ACHException = {
  code?: string | undefined;
  reason?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const ACHException$inboundSchema: z.ZodType<
  ACHException,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string().optional(),
  reason: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type ACHException$Outbound = {
  code?: string | undefined;
  reason?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const ACHException$outboundSchema: z.ZodType<
  ACHException$Outbound,
  z.ZodTypeDef,
  ACHException
> = z.object({
  code: z.string().optional(),
  reason: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ACHException$ {
  /** @deprecated use `ACHException$inboundSchema` instead. */
  export const inboundSchema = ACHException$inboundSchema;
  /** @deprecated use `ACHException$outboundSchema` instead. */
  export const outboundSchema = ACHException$outboundSchema;
  /** @deprecated use `ACHException$Outbound` instead. */
  export type Outbound = ACHException$Outbound;
}

export function achExceptionToJSON(achException: ACHException): string {
  return JSON.stringify(ACHException$outboundSchema.parse(achException));
}

export function achExceptionFromJSON(
  jsonString: string,
): SafeParseResult<ACHException, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ACHException$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ACHException' from JSON`,
  );
}
