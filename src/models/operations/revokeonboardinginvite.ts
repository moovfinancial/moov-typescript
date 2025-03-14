/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RevokeOnboardingInviteGlobals = {
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

export type RevokeOnboardingInviteRequest = {
  code: string;
};

export type RevokeOnboardingInviteResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const RevokeOnboardingInviteGlobals$inboundSchema: z.ZodType<
  RevokeOnboardingInviteGlobals,
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
export type RevokeOnboardingInviteGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const RevokeOnboardingInviteGlobals$outboundSchema: z.ZodType<
  RevokeOnboardingInviteGlobals$Outbound,
  z.ZodTypeDef,
  RevokeOnboardingInviteGlobals
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
export namespace RevokeOnboardingInviteGlobals$ {
  /** @deprecated use `RevokeOnboardingInviteGlobals$inboundSchema` instead. */
  export const inboundSchema = RevokeOnboardingInviteGlobals$inboundSchema;
  /** @deprecated use `RevokeOnboardingInviteGlobals$outboundSchema` instead. */
  export const outboundSchema = RevokeOnboardingInviteGlobals$outboundSchema;
  /** @deprecated use `RevokeOnboardingInviteGlobals$Outbound` instead. */
  export type Outbound = RevokeOnboardingInviteGlobals$Outbound;
}

export function revokeOnboardingInviteGlobalsToJSON(
  revokeOnboardingInviteGlobals: RevokeOnboardingInviteGlobals,
): string {
  return JSON.stringify(
    RevokeOnboardingInviteGlobals$outboundSchema.parse(
      revokeOnboardingInviteGlobals,
    ),
  );
}

export function revokeOnboardingInviteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<RevokeOnboardingInviteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RevokeOnboardingInviteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RevokeOnboardingInviteGlobals' from JSON`,
  );
}

/** @internal */
export const RevokeOnboardingInviteRequest$inboundSchema: z.ZodType<
  RevokeOnboardingInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
});

/** @internal */
export type RevokeOnboardingInviteRequest$Outbound = {
  code: string;
};

/** @internal */
export const RevokeOnboardingInviteRequest$outboundSchema: z.ZodType<
  RevokeOnboardingInviteRequest$Outbound,
  z.ZodTypeDef,
  RevokeOnboardingInviteRequest
> = z.object({
  code: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeOnboardingInviteRequest$ {
  /** @deprecated use `RevokeOnboardingInviteRequest$inboundSchema` instead. */
  export const inboundSchema = RevokeOnboardingInviteRequest$inboundSchema;
  /** @deprecated use `RevokeOnboardingInviteRequest$outboundSchema` instead. */
  export const outboundSchema = RevokeOnboardingInviteRequest$outboundSchema;
  /** @deprecated use `RevokeOnboardingInviteRequest$Outbound` instead. */
  export type Outbound = RevokeOnboardingInviteRequest$Outbound;
}

export function revokeOnboardingInviteRequestToJSON(
  revokeOnboardingInviteRequest: RevokeOnboardingInviteRequest,
): string {
  return JSON.stringify(
    RevokeOnboardingInviteRequest$outboundSchema.parse(
      revokeOnboardingInviteRequest,
    ),
  );
}

export function revokeOnboardingInviteRequestFromJSON(
  jsonString: string,
): SafeParseResult<RevokeOnboardingInviteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RevokeOnboardingInviteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RevokeOnboardingInviteRequest' from JSON`,
  );
}

/** @internal */
export const RevokeOnboardingInviteResponse$inboundSchema: z.ZodType<
  RevokeOnboardingInviteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type RevokeOnboardingInviteResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const RevokeOnboardingInviteResponse$outboundSchema: z.ZodType<
  RevokeOnboardingInviteResponse$Outbound,
  z.ZodTypeDef,
  RevokeOnboardingInviteResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeOnboardingInviteResponse$ {
  /** @deprecated use `RevokeOnboardingInviteResponse$inboundSchema` instead. */
  export const inboundSchema = RevokeOnboardingInviteResponse$inboundSchema;
  /** @deprecated use `RevokeOnboardingInviteResponse$outboundSchema` instead. */
  export const outboundSchema = RevokeOnboardingInviteResponse$outboundSchema;
  /** @deprecated use `RevokeOnboardingInviteResponse$Outbound` instead. */
  export type Outbound = RevokeOnboardingInviteResponse$Outbound;
}

export function revokeOnboardingInviteResponseToJSON(
  revokeOnboardingInviteResponse: RevokeOnboardingInviteResponse,
): string {
  return JSON.stringify(
    RevokeOnboardingInviteResponse$outboundSchema.parse(
      revokeOnboardingInviteResponse,
    ),
  );
}

export function revokeOnboardingInviteResponseFromJSON(
  jsonString: string,
): SafeParseResult<RevokeOnboardingInviteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RevokeOnboardingInviteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RevokeOnboardingInviteResponse' from JSON`,
  );
}
