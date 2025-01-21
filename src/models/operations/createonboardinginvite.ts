/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateOnboardingInviteSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type CreateOnboardingInviteRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  onboardingInviteRequest: components.OnboardingInviteRequest;
};

/** @internal */
export const CreateOnboardingInviteSecurity$inboundSchema: z.ZodType<
  CreateOnboardingInviteSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  BasicAuth: components.SchemeBasicAuth$inboundSchema.optional(),
  OAuth2Auth: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "BasicAuth": "basicAuth",
    "OAuth2Auth": "oAuth2Auth",
  });
});

/** @internal */
export type CreateOnboardingInviteSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const CreateOnboardingInviteSecurity$outboundSchema: z.ZodType<
  CreateOnboardingInviteSecurity$Outbound,
  z.ZodTypeDef,
  CreateOnboardingInviteSecurity
> = z.object({
  basicAuth: components.SchemeBasicAuth$outboundSchema.optional(),
  oAuth2Auth: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    basicAuth: "BasicAuth",
    oAuth2Auth: "OAuth2Auth",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOnboardingInviteSecurity$ {
  /** @deprecated use `CreateOnboardingInviteSecurity$inboundSchema` instead. */
  export const inboundSchema = CreateOnboardingInviteSecurity$inboundSchema;
  /** @deprecated use `CreateOnboardingInviteSecurity$outboundSchema` instead. */
  export const outboundSchema = CreateOnboardingInviteSecurity$outboundSchema;
  /** @deprecated use `CreateOnboardingInviteSecurity$Outbound` instead. */
  export type Outbound = CreateOnboardingInviteSecurity$Outbound;
}

export function createOnboardingInviteSecurityToJSON(
  createOnboardingInviteSecurity: CreateOnboardingInviteSecurity,
): string {
  return JSON.stringify(
    CreateOnboardingInviteSecurity$outboundSchema.parse(
      createOnboardingInviteSecurity,
    ),
  );
}

export function createOnboardingInviteSecurityFromJSON(
  jsonString: string,
): SafeParseResult<CreateOnboardingInviteSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOnboardingInviteSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOnboardingInviteSecurity' from JSON`,
  );
}

/** @internal */
export const CreateOnboardingInviteRequest$inboundSchema: z.ZodType<
  CreateOnboardingInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  OnboardingInviteRequest: components.OnboardingInviteRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
    "OnboardingInviteRequest": "onboardingInviteRequest",
  });
});

/** @internal */
export type CreateOnboardingInviteRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  OnboardingInviteRequest: components.OnboardingInviteRequest$Outbound;
};

/** @internal */
export const CreateOnboardingInviteRequest$outboundSchema: z.ZodType<
  CreateOnboardingInviteRequest$Outbound,
  z.ZodTypeDef,
  CreateOnboardingInviteRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  onboardingInviteRequest: components.OnboardingInviteRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
    onboardingInviteRequest: "OnboardingInviteRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateOnboardingInviteRequest$ {
  /** @deprecated use `CreateOnboardingInviteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateOnboardingInviteRequest$inboundSchema;
  /** @deprecated use `CreateOnboardingInviteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateOnboardingInviteRequest$outboundSchema;
  /** @deprecated use `CreateOnboardingInviteRequest$Outbound` instead. */
  export type Outbound = CreateOnboardingInviteRequest$Outbound;
}

export function createOnboardingInviteRequestToJSON(
  createOnboardingInviteRequest: CreateOnboardingInviteRequest,
): string {
  return JSON.stringify(
    CreateOnboardingInviteRequest$outboundSchema.parse(
      createOnboardingInviteRequest,
    ),
  );
}

export function createOnboardingInviteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateOnboardingInviteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOnboardingInviteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOnboardingInviteRequest' from JSON`,
  );
}
