/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EstimatedActivityError,
  EstimatedActivityError$inboundSchema,
  EstimatedActivityError$Outbound,
  EstimatedActivityError$outboundSchema,
} from "./estimatedactivityerror.js";

export type SendFundsRtpError = {
  estimatedActivity?: EstimatedActivityError | undefined;
};

/** @internal */
export const SendFundsRtpError$inboundSchema: z.ZodType<
  SendFundsRtpError,
  z.ZodTypeDef,
  unknown
> = z.object({
  estimatedActivity: EstimatedActivityError$inboundSchema.optional(),
});

/** @internal */
export type SendFundsRtpError$Outbound = {
  estimatedActivity?: EstimatedActivityError$Outbound | undefined;
};

/** @internal */
export const SendFundsRtpError$outboundSchema: z.ZodType<
  SendFundsRtpError$Outbound,
  z.ZodTypeDef,
  SendFundsRtpError
> = z.object({
  estimatedActivity: EstimatedActivityError$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendFundsRtpError$ {
  /** @deprecated use `SendFundsRtpError$inboundSchema` instead. */
  export const inboundSchema = SendFundsRtpError$inboundSchema;
  /** @deprecated use `SendFundsRtpError$outboundSchema` instead. */
  export const outboundSchema = SendFundsRtpError$outboundSchema;
  /** @deprecated use `SendFundsRtpError$Outbound` instead. */
  export type Outbound = SendFundsRtpError$Outbound;
}

export function sendFundsRtpErrorToJSON(
  sendFundsRtpError: SendFundsRtpError,
): string {
  return JSON.stringify(
    SendFundsRtpError$outboundSchema.parse(sendFundsRtpError),
  );
}

export function sendFundsRtpErrorFromJSON(
  jsonString: string,
): SafeParseResult<SendFundsRtpError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendFundsRtpError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendFundsRtpError' from JSON`,
  );
}
