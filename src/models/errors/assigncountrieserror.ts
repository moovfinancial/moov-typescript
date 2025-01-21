/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type AssignCountriesErrorData = {
  error: components.CountriesErrors;
};

export class AssignCountriesError extends Error {
  error: components.CountriesErrors;

  /** The original data that was passed to this error instance. */
  data$: AssignCountriesErrorData;

  constructor(err: AssignCountriesErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AssignCountriesError";
  }
}

/** @internal */
export const AssignCountriesError$inboundSchema: z.ZodType<
  AssignCountriesError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: components.CountriesErrors$inboundSchema,
})
  .transform((v) => {
    return new AssignCountriesError(v);
  });

/** @internal */
export type AssignCountriesError$Outbound = {
  error: components.CountriesErrors$Outbound;
};

/** @internal */
export const AssignCountriesError$outboundSchema: z.ZodType<
  AssignCountriesError$Outbound,
  z.ZodTypeDef,
  AssignCountriesError
> = z.instanceof(AssignCountriesError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: components.CountriesErrors$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignCountriesError$ {
  /** @deprecated use `AssignCountriesError$inboundSchema` instead. */
  export const inboundSchema = AssignCountriesError$inboundSchema;
  /** @deprecated use `AssignCountriesError$outboundSchema` instead. */
  export const outboundSchema = AssignCountriesError$outboundSchema;
  /** @deprecated use `AssignCountriesError$Outbound` instead. */
  export type Outbound = AssignCountriesError$Outbound;
}
