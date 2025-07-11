/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTicketContactError = {
  email?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const CreateTicketContactError$inboundSchema: z.ZodType<
  CreateTicketContactError,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
});

/** @internal */
export type CreateTicketContactError$Outbound = {
  email?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const CreateTicketContactError$outboundSchema: z.ZodType<
  CreateTicketContactError$Outbound,
  z.ZodTypeDef,
  CreateTicketContactError
> = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTicketContactError$ {
  /** @deprecated use `CreateTicketContactError$inboundSchema` instead. */
  export const inboundSchema = CreateTicketContactError$inboundSchema;
  /** @deprecated use `CreateTicketContactError$outboundSchema` instead. */
  export const outboundSchema = CreateTicketContactError$outboundSchema;
  /** @deprecated use `CreateTicketContactError$Outbound` instead. */
  export type Outbound = CreateTicketContactError$Outbound;
}

export function createTicketContactErrorToJSON(
  createTicketContactError: CreateTicketContactError,
): string {
  return JSON.stringify(
    CreateTicketContactError$outboundSchema.parse(createTicketContactError),
  );
}

export function createTicketContactErrorFromJSON(
  jsonString: string,
): SafeParseResult<CreateTicketContactError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTicketContactError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTicketContactError' from JSON`,
  );
}
