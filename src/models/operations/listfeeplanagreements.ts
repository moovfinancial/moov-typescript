/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListFeePlanAgreementsGlobals = {
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

export type ListFeePlanAgreementsRequest = {
  skip?: number | undefined;
  count?: number | undefined;
  accountID: string;
  /**
   * A comma-separated list of agreement IDs to filter the results by.
   */
  agreementID?: Array<string> | undefined;
  /**
   * A comma-separated list of statuses to filter the results by.
   */
  status?: Array<components.FeePlanAgreementStatus> | undefined;
};

export type ListFeePlanAgreementsResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.FeePlanAgreement>;
};

/** @internal */
export const ListFeePlanAgreementsGlobals$inboundSchema: z.ZodType<
  ListFeePlanAgreementsGlobals,
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
export type ListFeePlanAgreementsGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const ListFeePlanAgreementsGlobals$outboundSchema: z.ZodType<
  ListFeePlanAgreementsGlobals$Outbound,
  z.ZodTypeDef,
  ListFeePlanAgreementsGlobals
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
export namespace ListFeePlanAgreementsGlobals$ {
  /** @deprecated use `ListFeePlanAgreementsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListFeePlanAgreementsGlobals$inboundSchema;
  /** @deprecated use `ListFeePlanAgreementsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListFeePlanAgreementsGlobals$outboundSchema;
  /** @deprecated use `ListFeePlanAgreementsGlobals$Outbound` instead. */
  export type Outbound = ListFeePlanAgreementsGlobals$Outbound;
}

export function listFeePlanAgreementsGlobalsToJSON(
  listFeePlanAgreementsGlobals: ListFeePlanAgreementsGlobals,
): string {
  return JSON.stringify(
    ListFeePlanAgreementsGlobals$outboundSchema.parse(
      listFeePlanAgreementsGlobals,
    ),
  );
}

export function listFeePlanAgreementsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListFeePlanAgreementsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListFeePlanAgreementsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFeePlanAgreementsGlobals' from JSON`,
  );
}

/** @internal */
export const ListFeePlanAgreementsRequest$inboundSchema: z.ZodType<
  ListFeePlanAgreementsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  accountID: z.string(),
  agreementID: z.array(z.string()).optional(),
  status: z.array(components.FeePlanAgreementStatus$inboundSchema).optional(),
});

/** @internal */
export type ListFeePlanAgreementsRequest$Outbound = {
  skip?: number | undefined;
  count?: number | undefined;
  accountID: string;
  agreementID?: Array<string> | undefined;
  status?: Array<string> | undefined;
};

/** @internal */
export const ListFeePlanAgreementsRequest$outboundSchema: z.ZodType<
  ListFeePlanAgreementsRequest$Outbound,
  z.ZodTypeDef,
  ListFeePlanAgreementsRequest
> = z.object({
  skip: z.number().int().optional(),
  count: z.number().int().optional(),
  accountID: z.string(),
  agreementID: z.array(z.string()).optional(),
  status: z.array(components.FeePlanAgreementStatus$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFeePlanAgreementsRequest$ {
  /** @deprecated use `ListFeePlanAgreementsRequest$inboundSchema` instead. */
  export const inboundSchema = ListFeePlanAgreementsRequest$inboundSchema;
  /** @deprecated use `ListFeePlanAgreementsRequest$outboundSchema` instead. */
  export const outboundSchema = ListFeePlanAgreementsRequest$outboundSchema;
  /** @deprecated use `ListFeePlanAgreementsRequest$Outbound` instead. */
  export type Outbound = ListFeePlanAgreementsRequest$Outbound;
}

export function listFeePlanAgreementsRequestToJSON(
  listFeePlanAgreementsRequest: ListFeePlanAgreementsRequest,
): string {
  return JSON.stringify(
    ListFeePlanAgreementsRequest$outboundSchema.parse(
      listFeePlanAgreementsRequest,
    ),
  );
}

export function listFeePlanAgreementsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListFeePlanAgreementsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListFeePlanAgreementsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFeePlanAgreementsRequest' from JSON`,
  );
}

/** @internal */
export const ListFeePlanAgreementsResponse$inboundSchema: z.ZodType<
  ListFeePlanAgreementsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.FeePlanAgreement$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type ListFeePlanAgreementsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.FeePlanAgreement$Outbound>;
};

/** @internal */
export const ListFeePlanAgreementsResponse$outboundSchema: z.ZodType<
  ListFeePlanAgreementsResponse$Outbound,
  z.ZodTypeDef,
  ListFeePlanAgreementsResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.FeePlanAgreement$outboundSchema),
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
export namespace ListFeePlanAgreementsResponse$ {
  /** @deprecated use `ListFeePlanAgreementsResponse$inboundSchema` instead. */
  export const inboundSchema = ListFeePlanAgreementsResponse$inboundSchema;
  /** @deprecated use `ListFeePlanAgreementsResponse$outboundSchema` instead. */
  export const outboundSchema = ListFeePlanAgreementsResponse$outboundSchema;
  /** @deprecated use `ListFeePlanAgreementsResponse$Outbound` instead. */
  export type Outbound = ListFeePlanAgreementsResponse$Outbound;
}

export function listFeePlanAgreementsResponseToJSON(
  listFeePlanAgreementsResponse: ListFeePlanAgreementsResponse,
): string {
  return JSON.stringify(
    ListFeePlanAgreementsResponse$outboundSchema.parse(
      listFeePlanAgreementsResponse,
    ),
  );
}

export function listFeePlanAgreementsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListFeePlanAgreementsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListFeePlanAgreementsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFeePlanAgreementsResponse' from JSON`,
  );
}
