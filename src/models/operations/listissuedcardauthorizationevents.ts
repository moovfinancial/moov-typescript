/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListIssuedCardAuthorizationEventsSecurity = {
  basicAuth?: components.SchemeBasicAuth | undefined;
  oAuth2Auth?: string | undefined;
};

export type ListIssuedCardAuthorizationEventsRequest = {
  /**
   * Specify an API version.
   */
  xMoovVersion?: components.Versions | undefined;
  /**
   * The Moov business account for which cards have been issued.
   */
  accountID: string;
  authorizationID: string;
  skip?: number | undefined;
  count?: number | undefined;
};

/** @internal */
export const ListIssuedCardAuthorizationEventsSecurity$inboundSchema: z.ZodType<
  ListIssuedCardAuthorizationEventsSecurity,
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
export type ListIssuedCardAuthorizationEventsSecurity$Outbound = {
  BasicAuth?: components.SchemeBasicAuth$Outbound | undefined;
  OAuth2Auth?: string | undefined;
};

/** @internal */
export const ListIssuedCardAuthorizationEventsSecurity$outboundSchema:
  z.ZodType<
    ListIssuedCardAuthorizationEventsSecurity$Outbound,
    z.ZodTypeDef,
    ListIssuedCardAuthorizationEventsSecurity
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
export namespace ListIssuedCardAuthorizationEventsSecurity$ {
  /** @deprecated use `ListIssuedCardAuthorizationEventsSecurity$inboundSchema` instead. */
  export const inboundSchema =
    ListIssuedCardAuthorizationEventsSecurity$inboundSchema;
  /** @deprecated use `ListIssuedCardAuthorizationEventsSecurity$outboundSchema` instead. */
  export const outboundSchema =
    ListIssuedCardAuthorizationEventsSecurity$outboundSchema;
  /** @deprecated use `ListIssuedCardAuthorizationEventsSecurity$Outbound` instead. */
  export type Outbound = ListIssuedCardAuthorizationEventsSecurity$Outbound;
}

export function listIssuedCardAuthorizationEventsSecurityToJSON(
  listIssuedCardAuthorizationEventsSecurity:
    ListIssuedCardAuthorizationEventsSecurity,
): string {
  return JSON.stringify(
    ListIssuedCardAuthorizationEventsSecurity$outboundSchema.parse(
      listIssuedCardAuthorizationEventsSecurity,
    ),
  );
}

export function listIssuedCardAuthorizationEventsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  ListIssuedCardAuthorizationEventsSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListIssuedCardAuthorizationEventsSecurity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListIssuedCardAuthorizationEventsSecurity' from JSON`,
  );
}

/** @internal */
export const ListIssuedCardAuthorizationEventsRequest$inboundSchema: z.ZodType<
  ListIssuedCardAuthorizationEventsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-moov-version": components.Versions$inboundSchema.optional(),
  accountID: z.string(),
  authorizationID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-moov-version": "xMoovVersion",
  });
});

/** @internal */
export type ListIssuedCardAuthorizationEventsRequest$Outbound = {
  "x-moov-version"?: string | undefined;
  accountID: string;
  authorizationID: string;
  skip?: number | undefined;
  count?: number | undefined;
};

/** @internal */
export const ListIssuedCardAuthorizationEventsRequest$outboundSchema: z.ZodType<
  ListIssuedCardAuthorizationEventsRequest$Outbound,
  z.ZodTypeDef,
  ListIssuedCardAuthorizationEventsRequest
> = z.object({
  xMoovVersion: components.Versions$outboundSchema.optional(),
  accountID: z.string(),
  authorizationID: z.string(),
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    xMoovVersion: "x-moov-version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIssuedCardAuthorizationEventsRequest$ {
  /** @deprecated use `ListIssuedCardAuthorizationEventsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListIssuedCardAuthorizationEventsRequest$inboundSchema;
  /** @deprecated use `ListIssuedCardAuthorizationEventsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListIssuedCardAuthorizationEventsRequest$outboundSchema;
  /** @deprecated use `ListIssuedCardAuthorizationEventsRequest$Outbound` instead. */
  export type Outbound = ListIssuedCardAuthorizationEventsRequest$Outbound;
}

export function listIssuedCardAuthorizationEventsRequestToJSON(
  listIssuedCardAuthorizationEventsRequest:
    ListIssuedCardAuthorizationEventsRequest,
): string {
  return JSON.stringify(
    ListIssuedCardAuthorizationEventsRequest$outboundSchema.parse(
      listIssuedCardAuthorizationEventsRequest,
    ),
  );
}

export function listIssuedCardAuthorizationEventsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ListIssuedCardAuthorizationEventsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListIssuedCardAuthorizationEventsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListIssuedCardAuthorizationEventsRequest' from JSON`,
  );
}
