/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CreateBusinessError,
  CreateBusinessError$inboundSchema,
  CreateBusinessError$Outbound,
  CreateBusinessError$outboundSchema,
} from "./createbusinesserror.js";
import {
  CreateIndividualError,
  CreateIndividualError$inboundSchema,
  CreateIndividualError$Outbound,
  CreateIndividualError$outboundSchema,
} from "./createindividualerror.js";

export type CreateProfileError = {
  individual?: CreateIndividualError | undefined;
  business?: CreateBusinessError | undefined;
};

/** @internal */
export const CreateProfileError$inboundSchema: z.ZodType<
  CreateProfileError,
  z.ZodTypeDef,
  unknown
> = z.object({
  individual: CreateIndividualError$inboundSchema.optional(),
  business: CreateBusinessError$inboundSchema.optional(),
});

/** @internal */
export type CreateProfileError$Outbound = {
  individual?: CreateIndividualError$Outbound | undefined;
  business?: CreateBusinessError$Outbound | undefined;
};

/** @internal */
export const CreateProfileError$outboundSchema: z.ZodType<
  CreateProfileError$Outbound,
  z.ZodTypeDef,
  CreateProfileError
> = z.object({
  individual: CreateIndividualError$outboundSchema.optional(),
  business: CreateBusinessError$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProfileError$ {
  /** @deprecated use `CreateProfileError$inboundSchema` instead. */
  export const inboundSchema = CreateProfileError$inboundSchema;
  /** @deprecated use `CreateProfileError$outboundSchema` instead. */
  export const outboundSchema = CreateProfileError$outboundSchema;
  /** @deprecated use `CreateProfileError$Outbound` instead. */
  export type Outbound = CreateProfileError$Outbound;
}

export function createProfileErrorToJSON(
  createProfileError: CreateProfileError,
): string {
  return JSON.stringify(
    CreateProfileError$outboundSchema.parse(createProfileError),
  );
}

export function createProfileErrorFromJSON(
  jsonString: string,
): SafeParseResult<CreateProfileError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProfileError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProfileError' from JSON`,
  );
}
