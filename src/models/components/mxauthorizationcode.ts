/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The authorization code of a MX account which allows a processor to retrieve a linked payment account.
 *
 * @remarks
 *
 * `sandbox` - When linking a bank account to a `sandbox` account using a MX authorization code it will utilize MX's sandbox environment.
 * The MX authorization code provided must be generated from MX's sandbox environment.
 */
export type MXAuthorizationCode = {
  authorizationCode: string;
};

/** @internal */
export const MXAuthorizationCode$inboundSchema: z.ZodType<
  MXAuthorizationCode,
  z.ZodTypeDef,
  unknown
> = z.object({
  authorizationCode: z.string(),
});

/** @internal */
export type MXAuthorizationCode$Outbound = {
  authorizationCode: string;
};

/** @internal */
export const MXAuthorizationCode$outboundSchema: z.ZodType<
  MXAuthorizationCode$Outbound,
  z.ZodTypeDef,
  MXAuthorizationCode
> = z.object({
  authorizationCode: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MXAuthorizationCode$ {
  /** @deprecated use `MXAuthorizationCode$inboundSchema` instead. */
  export const inboundSchema = MXAuthorizationCode$inboundSchema;
  /** @deprecated use `MXAuthorizationCode$outboundSchema` instead. */
  export const outboundSchema = MXAuthorizationCode$outboundSchema;
  /** @deprecated use `MXAuthorizationCode$Outbound` instead. */
  export type Outbound = MXAuthorizationCode$Outbound;
}

export function mxAuthorizationCodeToJSON(
  mxAuthorizationCode: MXAuthorizationCode,
): string {
  return JSON.stringify(
    MXAuthorizationCode$outboundSchema.parse(mxAuthorizationCode),
  );
}

export function mxAuthorizationCodeFromJSON(
  jsonString: string,
): SafeParseResult<MXAuthorizationCode, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MXAuthorizationCode$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MXAuthorizationCode' from JSON`,
  );
}
