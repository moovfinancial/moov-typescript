/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The result of an event.
 */
export const IssuedCardAuthorizationEventResult = {
  Approved: "approved",
  Declined: "declined",
  Processed: "processed",
} as const;
/**
 * The result of an event.
 */
export type IssuedCardAuthorizationEventResult = ClosedEnum<
  typeof IssuedCardAuthorizationEventResult
>;

/** @internal */
export const IssuedCardAuthorizationEventResult$inboundSchema: z.ZodNativeEnum<
  typeof IssuedCardAuthorizationEventResult
> = z.nativeEnum(IssuedCardAuthorizationEventResult);

/** @internal */
export const IssuedCardAuthorizationEventResult$outboundSchema: z.ZodNativeEnum<
  typeof IssuedCardAuthorizationEventResult
> = IssuedCardAuthorizationEventResult$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssuedCardAuthorizationEventResult$ {
  /** @deprecated use `IssuedCardAuthorizationEventResult$inboundSchema` instead. */
  export const inboundSchema = IssuedCardAuthorizationEventResult$inboundSchema;
  /** @deprecated use `IssuedCardAuthorizationEventResult$outboundSchema` instead. */
  export const outboundSchema =
    IssuedCardAuthorizationEventResult$outboundSchema;
}
