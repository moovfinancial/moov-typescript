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
  PhoneNumberError,
  PhoneNumberError$inboundSchema,
  PhoneNumberError$Outbound,
  PhoneNumberError$outboundSchema,
} from "./phonenumbererror.js";

export type CustomerSupportError = {
  phone?: PhoneNumberError | undefined;
  email?: string | undefined;
  address?: AddressError | undefined;
  website?: string | undefined;
};

/** @internal */
export const CustomerSupportError$inboundSchema: z.ZodType<
  CustomerSupportError,
  z.ZodTypeDef,
  unknown
> = z.object({
  phone: PhoneNumberError$inboundSchema.optional(),
  email: z.string().optional(),
  address: AddressError$inboundSchema.optional(),
  website: z.string().optional(),
});

/** @internal */
export type CustomerSupportError$Outbound = {
  phone?: PhoneNumberError$Outbound | undefined;
  email?: string | undefined;
  address?: AddressError$Outbound | undefined;
  website?: string | undefined;
};

/** @internal */
export const CustomerSupportError$outboundSchema: z.ZodType<
  CustomerSupportError$Outbound,
  z.ZodTypeDef,
  CustomerSupportError
> = z.object({
  phone: PhoneNumberError$outboundSchema.optional(),
  email: z.string().optional(),
  address: AddressError$outboundSchema.optional(),
  website: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerSupportError$ {
  /** @deprecated use `CustomerSupportError$inboundSchema` instead. */
  export const inboundSchema = CustomerSupportError$inboundSchema;
  /** @deprecated use `CustomerSupportError$outboundSchema` instead. */
  export const outboundSchema = CustomerSupportError$outboundSchema;
  /** @deprecated use `CustomerSupportError$Outbound` instead. */
  export type Outbound = CustomerSupportError$Outbound;
}

export function customerSupportErrorToJSON(
  customerSupportError: CustomerSupportError,
): string {
  return JSON.stringify(
    CustomerSupportError$outboundSchema.parse(customerSupportError),
  );
}

export function customerSupportErrorFromJSON(
  jsonString: string,
): SafeParseResult<CustomerSupportError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerSupportError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerSupportError' from JSON`,
  );
}
