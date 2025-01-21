/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressError,
  AddressError$inboundSchema,
  AddressError$Outbound,
  AddressError$outboundSchema,
} from "./addresserror.js";
import {
  BirthDateError,
  BirthDateError$inboundSchema,
  BirthDateError$Outbound,
  BirthDateError$outboundSchema,
} from "./birthdateerror.js";
import {
  IndividualNameError,
  IndividualNameError$inboundSchema,
  IndividualNameError$Outbound,
  IndividualNameError$outboundSchema,
} from "./individualnameerror.js";
import {
  PhoneNumberError,
  PhoneNumberError$inboundSchema,
  PhoneNumberError$Outbound,
  PhoneNumberError$outboundSchema,
} from "./phonenumbererror.js";

export type CreateIndividualErrorSsn = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

export type CreateIndividualErrorItin = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

export type CreateIndividualErrorGovernmentID = {
  ssn?: CreateIndividualErrorSsn | undefined;
  itin?: CreateIndividualErrorItin | undefined;
};

export type CreateIndividualError = {
  name?: IndividualNameError | undefined;
  phone?: PhoneNumberError | undefined;
  email?: string | undefined;
  address?: AddressError | undefined;
  birthDate?: BirthDateError | undefined;
  governmentID?: CreateIndividualErrorGovernmentID | undefined;
};

/** @internal */
export const CreateIndividualErrorSsn$inboundSchema: z.ZodType<
  CreateIndividualErrorSsn,
  z.ZodTypeDef,
  unknown
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/** @internal */
export type CreateIndividualErrorSsn$Outbound = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

/** @internal */
export const CreateIndividualErrorSsn$outboundSchema: z.ZodType<
  CreateIndividualErrorSsn$Outbound,
  z.ZodTypeDef,
  CreateIndividualErrorSsn
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIndividualErrorSsn$ {
  /** @deprecated use `CreateIndividualErrorSsn$inboundSchema` instead. */
  export const inboundSchema = CreateIndividualErrorSsn$inboundSchema;
  /** @deprecated use `CreateIndividualErrorSsn$outboundSchema` instead. */
  export const outboundSchema = CreateIndividualErrorSsn$outboundSchema;
  /** @deprecated use `CreateIndividualErrorSsn$Outbound` instead. */
  export type Outbound = CreateIndividualErrorSsn$Outbound;
}

export function createIndividualErrorSsnToJSON(
  createIndividualErrorSsn: CreateIndividualErrorSsn,
): string {
  return JSON.stringify(
    CreateIndividualErrorSsn$outboundSchema.parse(createIndividualErrorSsn),
  );
}

export function createIndividualErrorSsnFromJSON(
  jsonString: string,
): SafeParseResult<CreateIndividualErrorSsn, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIndividualErrorSsn$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIndividualErrorSsn' from JSON`,
  );
}

/** @internal */
export const CreateIndividualErrorItin$inboundSchema: z.ZodType<
  CreateIndividualErrorItin,
  z.ZodTypeDef,
  unknown
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/** @internal */
export type CreateIndividualErrorItin$Outbound = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

/** @internal */
export const CreateIndividualErrorItin$outboundSchema: z.ZodType<
  CreateIndividualErrorItin$Outbound,
  z.ZodTypeDef,
  CreateIndividualErrorItin
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIndividualErrorItin$ {
  /** @deprecated use `CreateIndividualErrorItin$inboundSchema` instead. */
  export const inboundSchema = CreateIndividualErrorItin$inboundSchema;
  /** @deprecated use `CreateIndividualErrorItin$outboundSchema` instead. */
  export const outboundSchema = CreateIndividualErrorItin$outboundSchema;
  /** @deprecated use `CreateIndividualErrorItin$Outbound` instead. */
  export type Outbound = CreateIndividualErrorItin$Outbound;
}

export function createIndividualErrorItinToJSON(
  createIndividualErrorItin: CreateIndividualErrorItin,
): string {
  return JSON.stringify(
    CreateIndividualErrorItin$outboundSchema.parse(createIndividualErrorItin),
  );
}

export function createIndividualErrorItinFromJSON(
  jsonString: string,
): SafeParseResult<CreateIndividualErrorItin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIndividualErrorItin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIndividualErrorItin' from JSON`,
  );
}

/** @internal */
export const CreateIndividualErrorGovernmentID$inboundSchema: z.ZodType<
  CreateIndividualErrorGovernmentID,
  z.ZodTypeDef,
  unknown
> = z.object({
  ssn: z.lazy(() => CreateIndividualErrorSsn$inboundSchema).optional(),
  itin: z.lazy(() => CreateIndividualErrorItin$inboundSchema).optional(),
});

/** @internal */
export type CreateIndividualErrorGovernmentID$Outbound = {
  ssn?: CreateIndividualErrorSsn$Outbound | undefined;
  itin?: CreateIndividualErrorItin$Outbound | undefined;
};

/** @internal */
export const CreateIndividualErrorGovernmentID$outboundSchema: z.ZodType<
  CreateIndividualErrorGovernmentID$Outbound,
  z.ZodTypeDef,
  CreateIndividualErrorGovernmentID
> = z.object({
  ssn: z.lazy(() => CreateIndividualErrorSsn$outboundSchema).optional(),
  itin: z.lazy(() => CreateIndividualErrorItin$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIndividualErrorGovernmentID$ {
  /** @deprecated use `CreateIndividualErrorGovernmentID$inboundSchema` instead. */
  export const inboundSchema = CreateIndividualErrorGovernmentID$inboundSchema;
  /** @deprecated use `CreateIndividualErrorGovernmentID$outboundSchema` instead. */
  export const outboundSchema =
    CreateIndividualErrorGovernmentID$outboundSchema;
  /** @deprecated use `CreateIndividualErrorGovernmentID$Outbound` instead. */
  export type Outbound = CreateIndividualErrorGovernmentID$Outbound;
}

export function createIndividualErrorGovernmentIDToJSON(
  createIndividualErrorGovernmentID: CreateIndividualErrorGovernmentID,
): string {
  return JSON.stringify(
    CreateIndividualErrorGovernmentID$outboundSchema.parse(
      createIndividualErrorGovernmentID,
    ),
  );
}

export function createIndividualErrorGovernmentIDFromJSON(
  jsonString: string,
): SafeParseResult<CreateIndividualErrorGovernmentID, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIndividualErrorGovernmentID$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIndividualErrorGovernmentID' from JSON`,
  );
}

/** @internal */
export const CreateIndividualError$inboundSchema: z.ZodType<
  CreateIndividualError,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: IndividualNameError$inboundSchema.optional(),
  phone: PhoneNumberError$inboundSchema.optional(),
  email: z.string().optional(),
  address: AddressError$inboundSchema.optional(),
  birthDate: BirthDateError$inboundSchema.optional(),
  governmentID: z.lazy(() => CreateIndividualErrorGovernmentID$inboundSchema)
    .optional(),
});

/** @internal */
export type CreateIndividualError$Outbound = {
  name?: IndividualNameError$Outbound | undefined;
  phone?: PhoneNumberError$Outbound | undefined;
  email?: string | undefined;
  address?: AddressError$Outbound | undefined;
  birthDate?: BirthDateError$Outbound | undefined;
  governmentID?: CreateIndividualErrorGovernmentID$Outbound | undefined;
};

/** @internal */
export const CreateIndividualError$outboundSchema: z.ZodType<
  CreateIndividualError$Outbound,
  z.ZodTypeDef,
  CreateIndividualError
> = z.object({
  name: IndividualNameError$outboundSchema.optional(),
  phone: PhoneNumberError$outboundSchema.optional(),
  email: z.string().optional(),
  address: AddressError$outboundSchema.optional(),
  birthDate: BirthDateError$outboundSchema.optional(),
  governmentID: z.lazy(() => CreateIndividualErrorGovernmentID$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIndividualError$ {
  /** @deprecated use `CreateIndividualError$inboundSchema` instead. */
  export const inboundSchema = CreateIndividualError$inboundSchema;
  /** @deprecated use `CreateIndividualError$outboundSchema` instead. */
  export const outboundSchema = CreateIndividualError$outboundSchema;
  /** @deprecated use `CreateIndividualError$Outbound` instead. */
  export type Outbound = CreateIndividualError$Outbound;
}

export function createIndividualErrorToJSON(
  createIndividualError: CreateIndividualError,
): string {
  return JSON.stringify(
    CreateIndividualError$outboundSchema.parse(createIndividualError),
  );
}

export function createIndividualErrorFromJSON(
  jsonString: string,
): SafeParseResult<CreateIndividualError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIndividualError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIndividualError' from JSON`,
  );
}
