/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CapabilityID,
  CapabilityID$inboundSchema,
  CapabilityID$outboundSchema,
} from "./capabilityid.js";
import {
  CapabilityStatus,
  CapabilityStatus$inboundSchema,
  CapabilityStatus$outboundSchema,
} from "./capabilitystatus.js";

export type WebhookDataCapabilityUpdated = {
  accountID: string;
  foreignID?: string | undefined;
  /**
   * Moov account capabilities.
   *
   * @remarks
   *
   * The `production-app`, `platform.production-app`, and / or `platform.wallet-transfers` capabilities might appear in your list. These are read-only capabilities that Moov requests and uses for account verification purposes. These capabilities remains active with your account and require no additional action.
   */
  capabilityID: CapabilityID;
  /**
   * The status of the capability requested for an account.
   */
  status: CapabilityStatus;
};

/** @internal */
export const WebhookDataCapabilityUpdated$inboundSchema: z.ZodType<
  WebhookDataCapabilityUpdated,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.string(),
  foreignID: z.string().optional(),
  capabilityID: CapabilityID$inboundSchema,
  status: CapabilityStatus$inboundSchema,
});

/** @internal */
export type WebhookDataCapabilityUpdated$Outbound = {
  accountID: string;
  foreignID?: string | undefined;
  capabilityID: string;
  status: string;
};

/** @internal */
export const WebhookDataCapabilityUpdated$outboundSchema: z.ZodType<
  WebhookDataCapabilityUpdated$Outbound,
  z.ZodTypeDef,
  WebhookDataCapabilityUpdated
> = z.object({
  accountID: z.string(),
  foreignID: z.string().optional(),
  capabilityID: CapabilityID$outboundSchema,
  status: CapabilityStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookDataCapabilityUpdated$ {
  /** @deprecated use `WebhookDataCapabilityUpdated$inboundSchema` instead. */
  export const inboundSchema = WebhookDataCapabilityUpdated$inboundSchema;
  /** @deprecated use `WebhookDataCapabilityUpdated$outboundSchema` instead. */
  export const outboundSchema = WebhookDataCapabilityUpdated$outboundSchema;
  /** @deprecated use `WebhookDataCapabilityUpdated$Outbound` instead. */
  export type Outbound = WebhookDataCapabilityUpdated$Outbound;
}

export function webhookDataCapabilityUpdatedToJSON(
  webhookDataCapabilityUpdated: WebhookDataCapabilityUpdated,
): string {
  return JSON.stringify(
    WebhookDataCapabilityUpdated$outboundSchema.parse(
      webhookDataCapabilityUpdated,
    ),
  );
}

export function webhookDataCapabilityUpdatedFromJSON(
  jsonString: string,
): SafeParseResult<WebhookDataCapabilityUpdated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookDataCapabilityUpdated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookDataCapabilityUpdated' from JSON`,
  );
}
