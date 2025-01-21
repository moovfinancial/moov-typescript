/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CardAddress,
  CardAddress$inboundSchema,
  CardAddress$Outbound,
  CardAddress$outboundSchema,
} from "./cardaddress.js";
import {
  CardExpiration,
  CardExpiration$inboundSchema,
  CardExpiration$Outbound,
  CardExpiration$outboundSchema,
} from "./cardexpiration.js";
import {
  E2EEToken,
  E2EEToken$inboundSchema,
  E2EEToken$Outbound,
  E2EEToken$outboundSchema,
} from "./e2eetoken.js";

export type LinkCard = {
  /**
   * Wraps a compact-serialized JSON Web Encryption (JWE) token used for secure transmission of sensitive data (e.g., PCI information) through intermediaries.
   *
   * @remarks
   * This token is encrypted using the public key from /end-to-end-keys and wraps an AES key. For details and examples, refer to our
   * [GitHub repository](https://github.com/moovfinancial/moov-go/blob/main/examples/e2ee/e2ee_test.go).
   */
  e2ee?: E2EEToken | undefined;
  cardNumber: string;
  cardCvv: string;
  /**
   * The expiration date of the card or token.
   */
  expiration: CardExpiration;
  holderName?: string | undefined;
  billingAddress: CardAddress;
  cardOnFile?: boolean | undefined;
  merchantAccountID?: string | undefined;
  verifyName?: boolean | undefined;
};

/** @internal */
export const LinkCard$inboundSchema: z.ZodType<
  LinkCard,
  z.ZodTypeDef,
  unknown
> = z.object({
  e2ee: E2EEToken$inboundSchema.optional(),
  cardNumber: z.string(),
  cardCvv: z.string(),
  expiration: CardExpiration$inboundSchema,
  holderName: z.string().optional(),
  billingAddress: CardAddress$inboundSchema,
  cardOnFile: z.boolean().optional(),
  merchantAccountID: z.string().optional(),
  verifyName: z.boolean().optional(),
});

/** @internal */
export type LinkCard$Outbound = {
  e2ee?: E2EEToken$Outbound | undefined;
  cardNumber: string;
  cardCvv: string;
  expiration: CardExpiration$Outbound;
  holderName?: string | undefined;
  billingAddress: CardAddress$Outbound;
  cardOnFile?: boolean | undefined;
  merchantAccountID?: string | undefined;
  verifyName?: boolean | undefined;
};

/** @internal */
export const LinkCard$outboundSchema: z.ZodType<
  LinkCard$Outbound,
  z.ZodTypeDef,
  LinkCard
> = z.object({
  e2ee: E2EEToken$outboundSchema.optional(),
  cardNumber: z.string(),
  cardCvv: z.string(),
  expiration: CardExpiration$outboundSchema,
  holderName: z.string().optional(),
  billingAddress: CardAddress$outboundSchema,
  cardOnFile: z.boolean().optional(),
  merchantAccountID: z.string().optional(),
  verifyName: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkCard$ {
  /** @deprecated use `LinkCard$inboundSchema` instead. */
  export const inboundSchema = LinkCard$inboundSchema;
  /** @deprecated use `LinkCard$outboundSchema` instead. */
  export const outboundSchema = LinkCard$outboundSchema;
  /** @deprecated use `LinkCard$Outbound` instead. */
  export type Outbound = LinkCard$Outbound;
}

export function linkCardToJSON(linkCard: LinkCard): string {
  return JSON.stringify(LinkCard$outboundSchema.parse(linkCard));
}

export function linkCardFromJSON(
  jsonString: string,
): SafeParseResult<LinkCard, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkCard$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkCard' from JSON`,
  );
}
