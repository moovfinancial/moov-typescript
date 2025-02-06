/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  BirthDate,
  BirthDate$inboundSchema,
  BirthDate$Outbound,
  BirthDate$outboundSchema,
} from "./birthdate.js";
import {
  GovernmentID,
  GovernmentID$inboundSchema,
  GovernmentID$Outbound,
  GovernmentID$outboundSchema,
} from "./governmentid.js";
import {
  IndividualName,
  IndividualName$inboundSchema,
  IndividualName$Outbound,
  IndividualName$outboundSchema,
} from "./individualname.js";
import {
  PhoneNumber,
  PhoneNumber$inboundSchema,
  PhoneNumber$Outbound,
  PhoneNumber$outboundSchema,
} from "./phonenumber.js";
import {
  RepresentativeResponsibilities,
  RepresentativeResponsibilities$inboundSchema,
  RepresentativeResponsibilities$Outbound,
  RepresentativeResponsibilities$outboundSchema,
} from "./representativeresponsibilities.js";

/**
 * Describes a business representative to create.
 */
export type CreateRepresentative = {
  name: IndividualName;
  phone?: PhoneNumber | undefined;
  email?: string | undefined;
  address?: Address | undefined;
  birthDate?: BirthDate | undefined;
  governmentID?: GovernmentID | undefined;
  /**
   * Describes the job responsibilities of a business representative.
   */
  responsibilities?: RepresentativeResponsibilities | undefined;
};

/** @internal */
export const CreateRepresentative$inboundSchema: z.ZodType<
  CreateRepresentative,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: IndividualName$inboundSchema,
  phone: PhoneNumber$inboundSchema.optional(),
  email: z.string().optional(),
  address: Address$inboundSchema.optional(),
  birthDate: BirthDate$inboundSchema.optional(),
  governmentID: GovernmentID$inboundSchema.optional(),
  responsibilities: RepresentativeResponsibilities$inboundSchema.optional(),
});

/** @internal */
export type CreateRepresentative$Outbound = {
  name: IndividualName$Outbound;
  phone?: PhoneNumber$Outbound | undefined;
  email?: string | undefined;
  address?: Address$Outbound | undefined;
  birthDate?: BirthDate$Outbound | undefined;
  governmentID?: GovernmentID$Outbound | undefined;
  responsibilities?: RepresentativeResponsibilities$Outbound | undefined;
};

/** @internal */
export const CreateRepresentative$outboundSchema: z.ZodType<
  CreateRepresentative$Outbound,
  z.ZodTypeDef,
  CreateRepresentative
> = z.object({
  name: IndividualName$outboundSchema,
  phone: PhoneNumber$outboundSchema.optional(),
  email: z.string().optional(),
  address: Address$outboundSchema.optional(),
  birthDate: BirthDate$outboundSchema.optional(),
  governmentID: GovernmentID$outboundSchema.optional(),
  responsibilities: RepresentativeResponsibilities$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRepresentative$ {
  /** @deprecated use `CreateRepresentative$inboundSchema` instead. */
  export const inboundSchema = CreateRepresentative$inboundSchema;
  /** @deprecated use `CreateRepresentative$outboundSchema` instead. */
  export const outboundSchema = CreateRepresentative$outboundSchema;
  /** @deprecated use `CreateRepresentative$Outbound` instead. */
  export type Outbound = CreateRepresentative$Outbound;
}

export function createRepresentativeToJSON(
  createRepresentative: CreateRepresentative,
): string {
  return JSON.stringify(
    CreateRepresentative$outboundSchema.parse(createRepresentative),
  );
}

export function createRepresentativeFromJSON(
  jsonString: string,
): SafeParseResult<CreateRepresentative, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRepresentative$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRepresentative' from JSON`,
  );
}
