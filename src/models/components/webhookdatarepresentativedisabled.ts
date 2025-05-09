/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WebhookDataRepresentativeDisabled = {
  accountID: string;
  representativeID: string;
};

/** @internal */
export const WebhookDataRepresentativeDisabled$inboundSchema: z.ZodType<
  WebhookDataRepresentativeDisabled,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  representativeID: z.string(),
});

/** @internal */
export type WebhookDataRepresentativeDisabled$Outbound = {
  accountID: string;
  representativeID: string;
};

/** @internal */
export const WebhookDataRepresentativeDisabled$outboundSchema: z.ZodType<
  WebhookDataRepresentativeDisabled$Outbound,
  z.ZodTypeDef,
  WebhookDataRepresentativeDisabled
> = z.object({
  accountID: z.string(),
  representativeID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookDataRepresentativeDisabled$ {
  /** @deprecated use `WebhookDataRepresentativeDisabled$inboundSchema` instead. */
  export const inboundSchema = WebhookDataRepresentativeDisabled$inboundSchema;
  /** @deprecated use `WebhookDataRepresentativeDisabled$outboundSchema` instead. */
  export const outboundSchema =
    WebhookDataRepresentativeDisabled$outboundSchema;
  /** @deprecated use `WebhookDataRepresentativeDisabled$Outbound` instead. */
  export type Outbound = WebhookDataRepresentativeDisabled$Outbound;
}

export function webhookDataRepresentativeDisabledToJSON(
  webhookDataRepresentativeDisabled: WebhookDataRepresentativeDisabled,
): string {
  return JSON.stringify(
    WebhookDataRepresentativeDisabled$outboundSchema.parse(
      webhookDataRepresentativeDisabled,
    ),
  );
}

export function webhookDataRepresentativeDisabledFromJSON(
  jsonString: string,
): SafeParseResult<WebhookDataRepresentativeDisabled, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookDataRepresentativeDisabled$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookDataRepresentativeDisabled' from JSON`,
  );
}
