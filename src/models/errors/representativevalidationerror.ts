/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { MoovError } from "./mooverror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type ErrorT = {
  name?: components.IndividualNameError | undefined;
  phone?: components.PhoneNumberError | undefined;
  email?: string | undefined;
  address?: components.AddressError | undefined;
  birthDate?: components.BirthDateValidationError | undefined;
  governmentID?: components.GovernmentIDError | undefined;
  responsibilities?: components.RepresentativeResponsibilitiesError | undefined;
};

export type RepresentativeValidationErrorData = {
  error: ErrorT;
};

export class RepresentativeValidationError extends MoovError {
  error: ErrorT;

  /** The original data that was passed to this error instance. */
  data$: RepresentativeValidationErrorData;

  constructor(
    err: RepresentativeValidationErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "RepresentativeValidationError";
  }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    name: components.IndividualNameError$inboundSchema.optional(),
    phone: components.PhoneNumberError$inboundSchema.optional(),
    email: z.string().optional(),
    address: components.AddressError$inboundSchema.optional(),
    birthDate: components.BirthDateValidationError$inboundSchema.optional(),
    governmentID: components.GovernmentIDError$inboundSchema.optional(),
    responsibilities: components
      .RepresentativeResponsibilitiesError$inboundSchema.optional(),
  });

/** @internal */
export type ErrorT$Outbound = {
  name?: components.IndividualNameError$Outbound | undefined;
  phone?: components.PhoneNumberError$Outbound | undefined;
  email?: string | undefined;
  address?: components.AddressError$Outbound | undefined;
  birthDate?: components.BirthDateValidationError$Outbound | undefined;
  governmentID?: components.GovernmentIDError$Outbound | undefined;
  responsibilities?:
    | components.RepresentativeResponsibilitiesError$Outbound
    | undefined;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  name: components.IndividualNameError$outboundSchema.optional(),
  phone: components.PhoneNumberError$outboundSchema.optional(),
  email: z.string().optional(),
  address: components.AddressError$outboundSchema.optional(),
  birthDate: components.BirthDateValidationError$outboundSchema.optional(),
  governmentID: components.GovernmentIDError$outboundSchema.optional(),
  responsibilities: components
    .RepresentativeResponsibilitiesError$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}

export function errorToJSON(errorT: ErrorT): string {
  return JSON.stringify(ErrorT$outboundSchema.parse(errorT));
}

export function errorFromJSON(
  jsonString: string,
): SafeParseResult<ErrorT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorT' from JSON`,
  );
}

/** @internal */
export const RepresentativeValidationError$inboundSchema: z.ZodType<
  RepresentativeValidationError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => ErrorT$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new RepresentativeValidationError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type RepresentativeValidationError$Outbound = {
  error: ErrorT$Outbound;
};

/** @internal */
export const RepresentativeValidationError$outboundSchema: z.ZodType<
  RepresentativeValidationError$Outbound,
  z.ZodTypeDef,
  RepresentativeValidationError
> = z.instanceof(RepresentativeValidationError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => ErrorT$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RepresentativeValidationError$ {
  /** @deprecated use `RepresentativeValidationError$inboundSchema` instead. */
  export const inboundSchema = RepresentativeValidationError$inboundSchema;
  /** @deprecated use `RepresentativeValidationError$outboundSchema` instead. */
  export const outboundSchema = RepresentativeValidationError$outboundSchema;
  /** @deprecated use `RepresentativeValidationError$Outbound` instead. */
  export type Outbound = RepresentativeValidationError$Outbound;
}
