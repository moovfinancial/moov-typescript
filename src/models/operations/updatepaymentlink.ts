/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdatePaymentLinkGlobals = {
  /**
   * Specify an API version.
   *
   * @remarks
   *
   * API versioning follows the format `vYYYY.QQ.BB`, where
   *   - `YYYY` is the year
   *   - `QQ` is the two-digit month for the first month of the quarter (e.g., 01, 04, 07, 10)
   *   - `BB` is the build number, starting at `.01`, for subsequent builds in the same quarter.
   *     - For example, `v2024.01.00` is the initial release of the first quarter of 2024.
   *
   * The `latest` version represents the most recent development state. It may include breaking changes and should be treated as a beta release.
   */
  xMoovVersion?: string | undefined;
};

export type UpdatePaymentLinkRequest = {
  accountID: string;
  paymentLinkCode: string;
  updatePaymentLink: components.UpdatePaymentLink;
};

export type UpdatePaymentLinkResponse = {
  headers: { [k: string]: Array<string> };
  result: components.PaymentLink;
};

/** @internal */
export const UpdatePaymentLinkGlobals$inboundSchema: z.ZodType<
  UpdatePaymentLinkGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": z.string().default("v2024.01.00"),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type UpdatePaymentLinkGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const UpdatePaymentLinkGlobals$outboundSchema: z.ZodType<
  UpdatePaymentLinkGlobals$Outbound,
  z.ZodTypeDef,
  UpdatePaymentLinkGlobals
> = z.object({
  xMoovVersion: z.string().default("v2024.01.00"),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePaymentLinkGlobals$ {
  /** @deprecated use `UpdatePaymentLinkGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdatePaymentLinkGlobals$inboundSchema;
  /** @deprecated use `UpdatePaymentLinkGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdatePaymentLinkGlobals$outboundSchema;
  /** @deprecated use `UpdatePaymentLinkGlobals$Outbound` instead. */
  export type Outbound = UpdatePaymentLinkGlobals$Outbound;
}

export function updatePaymentLinkGlobalsToJSON(
  updatePaymentLinkGlobals: UpdatePaymentLinkGlobals,
): string {
  return JSON.stringify(
    UpdatePaymentLinkGlobals$outboundSchema.parse(updatePaymentLinkGlobals),
  );
}

export function updatePaymentLinkGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePaymentLinkGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePaymentLinkGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePaymentLinkGlobals' from JSON`,
  );
}

/** @internal */
export const UpdatePaymentLinkRequest$inboundSchema: z.ZodType<
  UpdatePaymentLinkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  paymentLinkCode: z.string(),
  UpdatePaymentLink: components.UpdatePaymentLink$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdatePaymentLink": "updatePaymentLink",
  });
});

/** @internal */
export type UpdatePaymentLinkRequest$Outbound = {
  accountID: string;
  paymentLinkCode: string;
  UpdatePaymentLink: components.UpdatePaymentLink$Outbound;
};

/** @internal */
export const UpdatePaymentLinkRequest$outboundSchema: z.ZodType<
  UpdatePaymentLinkRequest$Outbound,
  z.ZodTypeDef,
  UpdatePaymentLinkRequest
> = z.object({
  accountID: z.string(),
  paymentLinkCode: z.string(),
  updatePaymentLink: components.UpdatePaymentLink$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updatePaymentLink: "UpdatePaymentLink",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePaymentLinkRequest$ {
  /** @deprecated use `UpdatePaymentLinkRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePaymentLinkRequest$inboundSchema;
  /** @deprecated use `UpdatePaymentLinkRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePaymentLinkRequest$outboundSchema;
  /** @deprecated use `UpdatePaymentLinkRequest$Outbound` instead. */
  export type Outbound = UpdatePaymentLinkRequest$Outbound;
}

export function updatePaymentLinkRequestToJSON(
  updatePaymentLinkRequest: UpdatePaymentLinkRequest,
): string {
  return JSON.stringify(
    UpdatePaymentLinkRequest$outboundSchema.parse(updatePaymentLinkRequest),
  );
}

export function updatePaymentLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePaymentLinkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePaymentLinkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePaymentLinkRequest' from JSON`,
  );
}

/** @internal */
export const UpdatePaymentLinkResponse$inboundSchema: z.ZodType<
  UpdatePaymentLinkResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.PaymentLink$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type UpdatePaymentLinkResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.PaymentLink$Outbound;
};

/** @internal */
export const UpdatePaymentLinkResponse$outboundSchema: z.ZodType<
  UpdatePaymentLinkResponse$Outbound,
  z.ZodTypeDef,
  UpdatePaymentLinkResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.PaymentLink$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePaymentLinkResponse$ {
  /** @deprecated use `UpdatePaymentLinkResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatePaymentLinkResponse$inboundSchema;
  /** @deprecated use `UpdatePaymentLinkResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatePaymentLinkResponse$outboundSchema;
  /** @deprecated use `UpdatePaymentLinkResponse$Outbound` instead. */
  export type Outbound = UpdatePaymentLinkResponse$Outbound;
}

export function updatePaymentLinkResponseToJSON(
  updatePaymentLinkResponse: UpdatePaymentLinkResponse,
): string {
  return JSON.stringify(
    UpdatePaymentLinkResponse$outboundSchema.parse(updatePaymentLinkResponse),
  );
}

export function updatePaymentLinkResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePaymentLinkResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePaymentLinkResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePaymentLinkResponse' from JSON`,
  );
}
