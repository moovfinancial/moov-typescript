/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTransferGlobals = {
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

export type CreateTransferRequest = {
  /**
   * Prevents duplicate transfers from being created.
   */
  xIdempotencyKey: string;
  /**
   * Optional header that indicates whether to return a synchronous response that includes full transfer and rail-specific details or an
   *
   * @remarks
   * asynchronous response indicating the transfer was created (this is the default response if the header is omitted).
   */
  xWaitFor?: components.TransferWaitFor | undefined;
  /**
   * The merchant's Moov account ID.
   */
  accountID: string;
  createTransfer: components.CreateTransfer;
};

export type CreateTransferResponseResult =
  | components.AsyncTransfer
  | components.Transfer
  | components.TransferResponse;

export type CreateTransferResponse = {
  headers: { [k: string]: Array<string> };
  result:
    | components.AsyncTransfer
    | components.Transfer
    | components.TransferResponse;
};

/** @internal */
export const CreateTransferGlobals$inboundSchema: z.ZodType<
  CreateTransferGlobals,
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
export type CreateTransferGlobals$Outbound = {
  "x-moov-version": string;
};

/** @internal */
export const CreateTransferGlobals$outboundSchema: z.ZodType<
  CreateTransferGlobals$Outbound,
  z.ZodTypeDef,
  CreateTransferGlobals
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
export namespace CreateTransferGlobals$ {
  /** @deprecated use `CreateTransferGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateTransferGlobals$inboundSchema;
  /** @deprecated use `CreateTransferGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateTransferGlobals$outboundSchema;
  /** @deprecated use `CreateTransferGlobals$Outbound` instead. */
  export type Outbound = CreateTransferGlobals$Outbound;
}

export function createTransferGlobalsToJSON(
  createTransferGlobals: CreateTransferGlobals,
): string {
  return JSON.stringify(
    CreateTransferGlobals$outboundSchema.parse(createTransferGlobals),
  );
}

export function createTransferGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransferGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransferGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransferGlobals' from JSON`,
  );
}

/** @internal */
export const CreateTransferRequest$inboundSchema: z.ZodType<
  CreateTransferRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-idempotency-key": z.string(),
  "x-wait-for": components.TransferWaitFor$inboundSchema.optional(),
  accountID: z.string(),
  CreateTransfer: components.CreateTransfer$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-idempotency-key": "xIdempotencyKey",
    "x-wait-for": "xWaitFor",
    "CreateTransfer": "createTransfer",
  });
});

/** @internal */
export type CreateTransferRequest$Outbound = {
  "x-idempotency-key": string;
  "x-wait-for"?: string | undefined;
  accountID: string;
  CreateTransfer: components.CreateTransfer$Outbound;
};

/** @internal */
export const CreateTransferRequest$outboundSchema: z.ZodType<
  CreateTransferRequest$Outbound,
  z.ZodTypeDef,
  CreateTransferRequest
> = z.object({
  xIdempotencyKey: z.string(),
  xWaitFor: components.TransferWaitFor$outboundSchema.optional(),
  accountID: z.string(),
  createTransfer: components.CreateTransfer$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xIdempotencyKey: "x-idempotency-key",
    xWaitFor: "x-wait-for",
    createTransfer: "CreateTransfer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransferRequest$ {
  /** @deprecated use `CreateTransferRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTransferRequest$inboundSchema;
  /** @deprecated use `CreateTransferRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTransferRequest$outboundSchema;
  /** @deprecated use `CreateTransferRequest$Outbound` instead. */
  export type Outbound = CreateTransferRequest$Outbound;
}

export function createTransferRequestToJSON(
  createTransferRequest: CreateTransferRequest,
): string {
  return JSON.stringify(
    CreateTransferRequest$outboundSchema.parse(createTransferRequest),
  );
}

export function createTransferRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransferRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransferRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransferRequest' from JSON`,
  );
}

/** @internal */
export const CreateTransferResponseResult$inboundSchema: z.ZodType<
  CreateTransferResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AsyncTransfer$inboundSchema,
  components.Transfer$inboundSchema,
  components.TransferResponse$inboundSchema,
]);

/** @internal */
export type CreateTransferResponseResult$Outbound =
  | components.AsyncTransfer$Outbound
  | components.Transfer$Outbound
  | components.TransferResponse$Outbound;

/** @internal */
export const CreateTransferResponseResult$outboundSchema: z.ZodType<
  CreateTransferResponseResult$Outbound,
  z.ZodTypeDef,
  CreateTransferResponseResult
> = z.union([
  components.AsyncTransfer$outboundSchema,
  components.Transfer$outboundSchema,
  components.TransferResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransferResponseResult$ {
  /** @deprecated use `CreateTransferResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateTransferResponseResult$inboundSchema;
  /** @deprecated use `CreateTransferResponseResult$outboundSchema` instead. */
  export const outboundSchema = CreateTransferResponseResult$outboundSchema;
  /** @deprecated use `CreateTransferResponseResult$Outbound` instead. */
  export type Outbound = CreateTransferResponseResult$Outbound;
}

export function createTransferResponseResultToJSON(
  createTransferResponseResult: CreateTransferResponseResult,
): string {
  return JSON.stringify(
    CreateTransferResponseResult$outboundSchema.parse(
      createTransferResponseResult,
    ),
  );
}

export function createTransferResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransferResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransferResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransferResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateTransferResponse$inboundSchema: z.ZodType<
  CreateTransferResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([
    components.AsyncTransfer$inboundSchema,
    components.Transfer$inboundSchema,
    components.TransferResponse$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type CreateTransferResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result:
    | components.AsyncTransfer$Outbound
    | components.Transfer$Outbound
    | components.TransferResponse$Outbound;
};

/** @internal */
export const CreateTransferResponse$outboundSchema: z.ZodType<
  CreateTransferResponse$Outbound,
  z.ZodTypeDef,
  CreateTransferResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([
    components.AsyncTransfer$outboundSchema,
    components.Transfer$outboundSchema,
    components.TransferResponse$outboundSchema,
  ]),
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
export namespace CreateTransferResponse$ {
  /** @deprecated use `CreateTransferResponse$inboundSchema` instead. */
  export const inboundSchema = CreateTransferResponse$inboundSchema;
  /** @deprecated use `CreateTransferResponse$outboundSchema` instead. */
  export const outboundSchema = CreateTransferResponse$outboundSchema;
  /** @deprecated use `CreateTransferResponse$Outbound` instead. */
  export type Outbound = CreateTransferResponse$Outbound;
}

export function createTransferResponseToJSON(
  createTransferResponse: CreateTransferResponse,
): string {
  return JSON.stringify(
    CreateTransferResponse$outboundSchema.parse(createTransferResponse),
  );
}

export function createTransferResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransferResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransferResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransferResponse' from JSON`,
  );
}
