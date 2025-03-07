/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IndividualNameUpdate,
  IndividualNameUpdate$inboundSchema,
  IndividualNameUpdate$Outbound,
  IndividualNameUpdate$outboundSchema,
} from "./individualnameupdate.js";

export type Phone = {
  number?: string | undefined;
  countryCode?: string | undefined;
};

export type Two = {};

export type Email = Two | string;

export type UpdateRepresentativeAddress = {
  addressLine1?: string | undefined;
  addressLine2?: string | undefined;
  city?: string | undefined;
  stateOrProvince?: string | undefined;
  postalCode?: string | undefined;
  country?: string | undefined;
};

export type UpdateRepresentativeBirthDate = {
  day?: number | undefined;
  month?: number | undefined;
  year?: number | undefined;
};

export type UpdateRepresentativeSsn = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

export type UpdateRepresentativeItin = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

export type UpdateRepresentativeGovernmentID = {
  ssn?: UpdateRepresentativeSsn | undefined;
  itin?: UpdateRepresentativeItin | undefined;
};

/**
 * Describes the job responsibilities of a business representative.
 */
export type Responsibilities = {
  /**
   * Indicates whether this individual has significant management responsibilities within the business.
   */
  isController?: boolean | undefined;
  /**
   * If `true`, this field indicates that the individual has a business ownership stake of at least 25% in the
   *
   * @remarks
   * business. If the representative does not own at least 25% of the business, this field should be `false`.
   */
  isOwner?: boolean | undefined;
  /**
   * The percentage of ownership this individual has in the business (required if `isOwner` is `true`).
   */
  ownershipPercentage?: number | undefined;
  jobTitle?: string | undefined;
};

export type UpdateRepresentative = {
  name?: IndividualNameUpdate | undefined;
  phone?: Phone | null | undefined;
  email?: Two | string | null | undefined;
  address?: UpdateRepresentativeAddress | null | undefined;
  birthDate?: UpdateRepresentativeBirthDate | null | undefined;
  governmentID?: UpdateRepresentativeGovernmentID | null | undefined;
  responsibilities?: Responsibilities | null | undefined;
};

/** @internal */
export const Phone$inboundSchema: z.ZodType<Phone, z.ZodTypeDef, unknown> = z
  .object({
    number: z.string().optional(),
    countryCode: z.string().optional(),
  });

/** @internal */
export type Phone$Outbound = {
  number?: string | undefined;
  countryCode?: string | undefined;
};

/** @internal */
export const Phone$outboundSchema: z.ZodType<
  Phone$Outbound,
  z.ZodTypeDef,
  Phone
> = z.object({
  number: z.string().optional(),
  countryCode: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Phone$ {
  /** @deprecated use `Phone$inboundSchema` instead. */
  export const inboundSchema = Phone$inboundSchema;
  /** @deprecated use `Phone$outboundSchema` instead. */
  export const outboundSchema = Phone$outboundSchema;
  /** @deprecated use `Phone$Outbound` instead. */
  export type Outbound = Phone$Outbound;
}

export function phoneToJSON(phone: Phone): string {
  return JSON.stringify(Phone$outboundSchema.parse(phone));
}

export function phoneFromJSON(
  jsonString: string,
): SafeParseResult<Phone, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Phone$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Phone' from JSON`,
  );
}

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Two$Outbound = {};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
  /** @deprecated use `Two$Outbound` instead. */
  export type Outbound = Two$Outbound;
}

export function twoToJSON(two: Two): string {
  return JSON.stringify(Two$outboundSchema.parse(two));
}

export function twoFromJSON(
  jsonString: string,
): SafeParseResult<Two, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Two$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Two' from JSON`,
  );
}

/** @internal */
export const Email$inboundSchema: z.ZodType<Email, z.ZodTypeDef, unknown> = z
  .union([z.lazy(() => Two$inboundSchema), z.string()]);

/** @internal */
export type Email$Outbound = Two$Outbound | string;

/** @internal */
export const Email$outboundSchema: z.ZodType<
  Email$Outbound,
  z.ZodTypeDef,
  Email
> = z.union([z.lazy(() => Two$outboundSchema), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Email$ {
  /** @deprecated use `Email$inboundSchema` instead. */
  export const inboundSchema = Email$inboundSchema;
  /** @deprecated use `Email$outboundSchema` instead. */
  export const outboundSchema = Email$outboundSchema;
  /** @deprecated use `Email$Outbound` instead. */
  export type Outbound = Email$Outbound;
}

export function emailToJSON(email: Email): string {
  return JSON.stringify(Email$outboundSchema.parse(email));
}

export function emailFromJSON(
  jsonString: string,
): SafeParseResult<Email, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Email$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Email' from JSON`,
  );
}

/** @internal */
export const UpdateRepresentativeAddress$inboundSchema: z.ZodType<
  UpdateRepresentativeAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  stateOrProvince: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
});

/** @internal */
export type UpdateRepresentativeAddress$Outbound = {
  addressLine1?: string | undefined;
  addressLine2?: string | undefined;
  city?: string | undefined;
  stateOrProvince?: string | undefined;
  postalCode?: string | undefined;
  country?: string | undefined;
};

/** @internal */
export const UpdateRepresentativeAddress$outboundSchema: z.ZodType<
  UpdateRepresentativeAddress$Outbound,
  z.ZodTypeDef,
  UpdateRepresentativeAddress
> = z.object({
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  stateOrProvince: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRepresentativeAddress$ {
  /** @deprecated use `UpdateRepresentativeAddress$inboundSchema` instead. */
  export const inboundSchema = UpdateRepresentativeAddress$inboundSchema;
  /** @deprecated use `UpdateRepresentativeAddress$outboundSchema` instead. */
  export const outboundSchema = UpdateRepresentativeAddress$outboundSchema;
  /** @deprecated use `UpdateRepresentativeAddress$Outbound` instead. */
  export type Outbound = UpdateRepresentativeAddress$Outbound;
}

export function updateRepresentativeAddressToJSON(
  updateRepresentativeAddress: UpdateRepresentativeAddress,
): string {
  return JSON.stringify(
    UpdateRepresentativeAddress$outboundSchema.parse(
      updateRepresentativeAddress,
    ),
  );
}

export function updateRepresentativeAddressFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRepresentativeAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRepresentativeAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRepresentativeAddress' from JSON`,
  );
}

/** @internal */
export const UpdateRepresentativeBirthDate$inboundSchema: z.ZodType<
  UpdateRepresentativeBirthDate,
  z.ZodTypeDef,
  unknown
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/** @internal */
export type UpdateRepresentativeBirthDate$Outbound = {
  day?: number | undefined;
  month?: number | undefined;
  year?: number | undefined;
};

/** @internal */
export const UpdateRepresentativeBirthDate$outboundSchema: z.ZodType<
  UpdateRepresentativeBirthDate$Outbound,
  z.ZodTypeDef,
  UpdateRepresentativeBirthDate
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRepresentativeBirthDate$ {
  /** @deprecated use `UpdateRepresentativeBirthDate$inboundSchema` instead. */
  export const inboundSchema = UpdateRepresentativeBirthDate$inboundSchema;
  /** @deprecated use `UpdateRepresentativeBirthDate$outboundSchema` instead. */
  export const outboundSchema = UpdateRepresentativeBirthDate$outboundSchema;
  /** @deprecated use `UpdateRepresentativeBirthDate$Outbound` instead. */
  export type Outbound = UpdateRepresentativeBirthDate$Outbound;
}

export function updateRepresentativeBirthDateToJSON(
  updateRepresentativeBirthDate: UpdateRepresentativeBirthDate,
): string {
  return JSON.stringify(
    UpdateRepresentativeBirthDate$outboundSchema.parse(
      updateRepresentativeBirthDate,
    ),
  );
}

export function updateRepresentativeBirthDateFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRepresentativeBirthDate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRepresentativeBirthDate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRepresentativeBirthDate' from JSON`,
  );
}

/** @internal */
export const UpdateRepresentativeSsn$inboundSchema: z.ZodType<
  UpdateRepresentativeSsn,
  z.ZodTypeDef,
  unknown
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/** @internal */
export type UpdateRepresentativeSsn$Outbound = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

/** @internal */
export const UpdateRepresentativeSsn$outboundSchema: z.ZodType<
  UpdateRepresentativeSsn$Outbound,
  z.ZodTypeDef,
  UpdateRepresentativeSsn
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRepresentativeSsn$ {
  /** @deprecated use `UpdateRepresentativeSsn$inboundSchema` instead. */
  export const inboundSchema = UpdateRepresentativeSsn$inboundSchema;
  /** @deprecated use `UpdateRepresentativeSsn$outboundSchema` instead. */
  export const outboundSchema = UpdateRepresentativeSsn$outboundSchema;
  /** @deprecated use `UpdateRepresentativeSsn$Outbound` instead. */
  export type Outbound = UpdateRepresentativeSsn$Outbound;
}

export function updateRepresentativeSsnToJSON(
  updateRepresentativeSsn: UpdateRepresentativeSsn,
): string {
  return JSON.stringify(
    UpdateRepresentativeSsn$outboundSchema.parse(updateRepresentativeSsn),
  );
}

export function updateRepresentativeSsnFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRepresentativeSsn, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRepresentativeSsn$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRepresentativeSsn' from JSON`,
  );
}

/** @internal */
export const UpdateRepresentativeItin$inboundSchema: z.ZodType<
  UpdateRepresentativeItin,
  z.ZodTypeDef,
  unknown
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/** @internal */
export type UpdateRepresentativeItin$Outbound = {
  full?: string | undefined;
  lastFour?: string | undefined;
};

/** @internal */
export const UpdateRepresentativeItin$outboundSchema: z.ZodType<
  UpdateRepresentativeItin$Outbound,
  z.ZodTypeDef,
  UpdateRepresentativeItin
> = z.object({
  full: z.string().optional(),
  lastFour: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRepresentativeItin$ {
  /** @deprecated use `UpdateRepresentativeItin$inboundSchema` instead. */
  export const inboundSchema = UpdateRepresentativeItin$inboundSchema;
  /** @deprecated use `UpdateRepresentativeItin$outboundSchema` instead. */
  export const outboundSchema = UpdateRepresentativeItin$outboundSchema;
  /** @deprecated use `UpdateRepresentativeItin$Outbound` instead. */
  export type Outbound = UpdateRepresentativeItin$Outbound;
}

export function updateRepresentativeItinToJSON(
  updateRepresentativeItin: UpdateRepresentativeItin,
): string {
  return JSON.stringify(
    UpdateRepresentativeItin$outboundSchema.parse(updateRepresentativeItin),
  );
}

export function updateRepresentativeItinFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRepresentativeItin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRepresentativeItin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRepresentativeItin' from JSON`,
  );
}

/** @internal */
export const UpdateRepresentativeGovernmentID$inboundSchema: z.ZodType<
  UpdateRepresentativeGovernmentID,
  z.ZodTypeDef,
  unknown
> = z.object({
  ssn: z.lazy(() => UpdateRepresentativeSsn$inboundSchema).optional(),
  itin: z.lazy(() => UpdateRepresentativeItin$inboundSchema).optional(),
});

/** @internal */
export type UpdateRepresentativeGovernmentID$Outbound = {
  ssn?: UpdateRepresentativeSsn$Outbound | undefined;
  itin?: UpdateRepresentativeItin$Outbound | undefined;
};

/** @internal */
export const UpdateRepresentativeGovernmentID$outboundSchema: z.ZodType<
  UpdateRepresentativeGovernmentID$Outbound,
  z.ZodTypeDef,
  UpdateRepresentativeGovernmentID
> = z.object({
  ssn: z.lazy(() => UpdateRepresentativeSsn$outboundSchema).optional(),
  itin: z.lazy(() => UpdateRepresentativeItin$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRepresentativeGovernmentID$ {
  /** @deprecated use `UpdateRepresentativeGovernmentID$inboundSchema` instead. */
  export const inboundSchema = UpdateRepresentativeGovernmentID$inboundSchema;
  /** @deprecated use `UpdateRepresentativeGovernmentID$outboundSchema` instead. */
  export const outboundSchema = UpdateRepresentativeGovernmentID$outboundSchema;
  /** @deprecated use `UpdateRepresentativeGovernmentID$Outbound` instead. */
  export type Outbound = UpdateRepresentativeGovernmentID$Outbound;
}

export function updateRepresentativeGovernmentIDToJSON(
  updateRepresentativeGovernmentID: UpdateRepresentativeGovernmentID,
): string {
  return JSON.stringify(
    UpdateRepresentativeGovernmentID$outboundSchema.parse(
      updateRepresentativeGovernmentID,
    ),
  );
}

export function updateRepresentativeGovernmentIDFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRepresentativeGovernmentID, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRepresentativeGovernmentID$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRepresentativeGovernmentID' from JSON`,
  );
}

/** @internal */
export const Responsibilities$inboundSchema: z.ZodType<
  Responsibilities,
  z.ZodTypeDef,
  unknown
> = z.object({
  isController: z.boolean().optional(),
  isOwner: z.boolean().optional(),
  ownershipPercentage: z.number().int().optional(),
  jobTitle: z.string().optional(),
});

/** @internal */
export type Responsibilities$Outbound = {
  isController?: boolean | undefined;
  isOwner?: boolean | undefined;
  ownershipPercentage?: number | undefined;
  jobTitle?: string | undefined;
};

/** @internal */
export const Responsibilities$outboundSchema: z.ZodType<
  Responsibilities$Outbound,
  z.ZodTypeDef,
  Responsibilities
> = z.object({
  isController: z.boolean().optional(),
  isOwner: z.boolean().optional(),
  ownershipPercentage: z.number().int().optional(),
  jobTitle: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Responsibilities$ {
  /** @deprecated use `Responsibilities$inboundSchema` instead. */
  export const inboundSchema = Responsibilities$inboundSchema;
  /** @deprecated use `Responsibilities$outboundSchema` instead. */
  export const outboundSchema = Responsibilities$outboundSchema;
  /** @deprecated use `Responsibilities$Outbound` instead. */
  export type Outbound = Responsibilities$Outbound;
}

export function responsibilitiesToJSON(
  responsibilities: Responsibilities,
): string {
  return JSON.stringify(
    Responsibilities$outboundSchema.parse(responsibilities),
  );
}

export function responsibilitiesFromJSON(
  jsonString: string,
): SafeParseResult<Responsibilities, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Responsibilities$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Responsibilities' from JSON`,
  );
}

/** @internal */
export const UpdateRepresentative$inboundSchema: z.ZodType<
  UpdateRepresentative,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: IndividualNameUpdate$inboundSchema.optional(),
  phone: z.nullable(z.lazy(() => Phone$inboundSchema)).optional(),
  email: z.nullable(z.union([z.lazy(() => Two$inboundSchema), z.string()]))
    .optional(),
  address: z.nullable(z.lazy(() => UpdateRepresentativeAddress$inboundSchema))
    .optional(),
  birthDate: z.nullable(
    z.lazy(() => UpdateRepresentativeBirthDate$inboundSchema),
  ).optional(),
  governmentID: z.nullable(
    z.lazy(() => UpdateRepresentativeGovernmentID$inboundSchema),
  ).optional(),
  responsibilities: z.nullable(z.lazy(() => Responsibilities$inboundSchema))
    .optional(),
});

/** @internal */
export type UpdateRepresentative$Outbound = {
  name?: IndividualNameUpdate$Outbound | undefined;
  phone?: Phone$Outbound | null | undefined;
  email?: Two$Outbound | string | null | undefined;
  address?: UpdateRepresentativeAddress$Outbound | null | undefined;
  birthDate?: UpdateRepresentativeBirthDate$Outbound | null | undefined;
  governmentID?: UpdateRepresentativeGovernmentID$Outbound | null | undefined;
  responsibilities?: Responsibilities$Outbound | null | undefined;
};

/** @internal */
export const UpdateRepresentative$outboundSchema: z.ZodType<
  UpdateRepresentative$Outbound,
  z.ZodTypeDef,
  UpdateRepresentative
> = z.object({
  name: IndividualNameUpdate$outboundSchema.optional(),
  phone: z.nullable(z.lazy(() => Phone$outboundSchema)).optional(),
  email: z.nullable(z.union([z.lazy(() => Two$outboundSchema), z.string()]))
    .optional(),
  address: z.nullable(z.lazy(() => UpdateRepresentativeAddress$outboundSchema))
    .optional(),
  birthDate: z.nullable(
    z.lazy(() => UpdateRepresentativeBirthDate$outboundSchema),
  ).optional(),
  governmentID: z.nullable(
    z.lazy(() => UpdateRepresentativeGovernmentID$outboundSchema),
  ).optional(),
  responsibilities: z.nullable(z.lazy(() => Responsibilities$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRepresentative$ {
  /** @deprecated use `UpdateRepresentative$inboundSchema` instead. */
  export const inboundSchema = UpdateRepresentative$inboundSchema;
  /** @deprecated use `UpdateRepresentative$outboundSchema` instead. */
  export const outboundSchema = UpdateRepresentative$outboundSchema;
  /** @deprecated use `UpdateRepresentative$Outbound` instead. */
  export type Outbound = UpdateRepresentative$Outbound;
}

export function updateRepresentativeToJSON(
  updateRepresentative: UpdateRepresentative,
): string {
  return JSON.stringify(
    UpdateRepresentative$outboundSchema.parse(updateRepresentative),
  );
}

export function updateRepresentativeFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRepresentative, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRepresentative$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRepresentative' from JSON`,
  );
}
