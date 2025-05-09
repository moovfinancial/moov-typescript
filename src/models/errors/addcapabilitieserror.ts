/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type AddCapabilitiesErrorData = {
  error?: components.CapabilitiesError | undefined;
};

export class AddCapabilitiesError extends Error {
  error?: components.CapabilitiesError | undefined;

  /** The original data that was passed to this error instance. */
  data$: AddCapabilitiesErrorData;

  constructor(err: AddCapabilitiesErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.error != null) this.error = err.error;

    this.name = "AddCapabilitiesError";
  }
}

/** @internal */
export const AddCapabilitiesError$inboundSchema: z.ZodType<
  AddCapabilitiesError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: components.CapabilitiesError$inboundSchema.optional(),
})
  .transform((v) => {
    return new AddCapabilitiesError(v);
  });

/** @internal */
export type AddCapabilitiesError$Outbound = {
  error?: components.CapabilitiesError$Outbound | undefined;
};

/** @internal */
export const AddCapabilitiesError$outboundSchema: z.ZodType<
  AddCapabilitiesError$Outbound,
  z.ZodTypeDef,
  AddCapabilitiesError
> = z.instanceof(AddCapabilitiesError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: components.CapabilitiesError$outboundSchema.optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddCapabilitiesError$ {
  /** @deprecated use `AddCapabilitiesError$inboundSchema` instead. */
  export const inboundSchema = AddCapabilitiesError$inboundSchema;
  /** @deprecated use `AddCapabilitiesError$outboundSchema` instead. */
  export const outboundSchema = AddCapabilitiesError$outboundSchema;
  /** @deprecated use `AddCapabilitiesError$Outbound` instead. */
  export type Outbound = AddCapabilitiesError$Outbound;
}
