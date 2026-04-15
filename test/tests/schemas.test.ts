/**
 * Unit tests for Zod schema validation behavior on core SDK models.
 */
import { describe, expect, test } from "bun:test";
import { Amount$inboundSchema, Amount$outboundSchema } from "@moovio/sdk/models/components/amount.js";
import {
  LinkBankAccount$inboundSchema,
  LinkBankAccount$outboundSchema,
} from "@moovio/sdk/models/components/linkbankaccount.js";
import {
  ManualTermsOfService$inboundSchema,
  ManualTermsOfService$outboundSchema,
} from "@moovio/sdk/models/components/manualtermsofservice.js";
import { PaymentMethod$inboundSchema } from "@moovio/sdk/models/components/paymentmethod.js";
import { TransferPaymentMethod$inboundSchema } from "@moovio/sdk/models/components/transferpaymentmethod.js";

// ---------------------------------------------------------------------------
// Amount
// ---------------------------------------------------------------------------
describe("Amount schema", () => {
  const validAmount = { currency: "USD", value: 1000 };

  test("inbound: accepts integer values", () => {
    const result = Amount$inboundSchema.safeParse(validAmount);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.value).toBe(1000);
      expect(result.data.currency).toBe("USD");
    }
  });

  test("inbound: accepts float values (no int constraint on inbound)", () => {
    const result = Amount$inboundSchema.safeParse({ currency: "USD", value: 10.5 });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.value).toBe(10.5);
    }
  });

  test("inbound: coerces numeric string to number", () => {
    const result = Amount$inboundSchema.safeParse({ currency: "USD", value: "1000" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.value).toBe(1000);
    }
  });

  test("outbound: accepts integer values", () => {
    const result = Amount$outboundSchema.safeParse(validAmount);
    expect(result.success).toBe(true);
  });

  test("outbound: rejects float values", () => {
    const result = Amount$outboundSchema.safeParse({ currency: "USD", value: 10.5 });
    expect(result.success).toBe(false);
  });

  test("inbound: zero is a valid integer", () => {
    const result = Amount$inboundSchema.safeParse({ currency: "USD", value: 0 });
    expect(result.success).toBe(true);
  });

  test("inbound: negative integers are valid", () => {
    const result = Amount$inboundSchema.safeParse({ currency: "USD", value: -500 });
    expect(result.success).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// LinkBankAccount
// ---------------------------------------------------------------------------
describe("LinkBankAccount schema", () => {
  const bankAccountPayload = {
    account: {
      holderName: "John Doe",
      holderType: "individual",
      accountNumber: "1111222233330000",
      bankAccountType: "checking",
      routingNumber: "011401533",
    },
  };

  const plaidPayload = {
    plaid: { token: "processor-sandbox-abc123" },
  };

  const plaidLinkPayload = {
    plaidLink: { publicToken: "public-sandbox-abc123" },
  };

  const mxPayload = {
    mx: { authorizationCode: "mx-auth-code-123" },
  };

  test("inbound: parses BankAccountPayload (account key)", () => {
    const result = LinkBankAccount$inboundSchema.safeParse(bankAccountPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect("account" in result.data).toBe(true);
    }
  });

  test("inbound: parses PlaidPayload (plaid key)", () => {
    const result = LinkBankAccount$inboundSchema.safeParse(plaidPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect("plaid" in result.data).toBe(true);
    }
  });

  test("inbound: parses PlaidLinkPayload (plaidLink key)", () => {
    const result = LinkBankAccount$inboundSchema.safeParse(plaidLinkPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect("plaidLink" in result.data).toBe(true);
    }
  });

  test("inbound: parses MxPayload (mx key)", () => {
    const result = LinkBankAccount$inboundSchema.safeParse(mxPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect("mx" in result.data).toBe(true);
    }
  });

  test("inbound: rejects invalid payload", () => {
    const result = LinkBankAccount$inboundSchema.safeParse({ invalid: "data" });
    expect(result.success).toBe(false);
  });

  test("inbound: rejects empty object", () => {
    const result = LinkBankAccount$inboundSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  test("outbound: BankAccountPayload round-trips", () => {
    const parsed = LinkBankAccount$inboundSchema.parse(bankAccountPayload);
    const result = LinkBankAccount$outboundSchema.safeParse(parsed);
    expect(result.success).toBe(true);
  });

  test("outbound: PlaidPayload round-trips", () => {
    const parsed = LinkBankAccount$inboundSchema.parse(plaidPayload);
    const result = LinkBankAccount$outboundSchema.safeParse(parsed);
    expect(result.success).toBe(true);
  });

  test("outbound: PlaidLinkPayload round-trips", () => {
    const parsed = LinkBankAccount$inboundSchema.parse(plaidLinkPayload);
    const result = LinkBankAccount$outboundSchema.safeParse(parsed);
    expect(result.success).toBe(true);
  });

  test("outbound: MxPayload round-trips", () => {
    const parsed = LinkBankAccount$inboundSchema.parse(mxPayload);
    const result = LinkBankAccount$outboundSchema.safeParse(parsed);
    expect(result.success).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// ManualTermsOfService
// ---------------------------------------------------------------------------
describe("ManualTermsOfService schema", () => {
  const baseFields = {
    acceptedIP: "192.168.1.1",
    acceptedUserAgent: "Mozilla/5.0",
    acceptedDomain: "example.com",
  };

  test("inbound: parses ISO 8601 with +00:00 offset", () => {
    const result = ManualTermsOfService$inboundSchema.safeParse({
      ...baseFields,
      acceptedDate: "2024-01-15T10:30:00+00:00",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.acceptedDate).toBeInstanceOf(Date);
    }
  });

  test("inbound: parses ISO 8601 with Z suffix", () => {
    const result = ManualTermsOfService$inboundSchema.safeParse({
      ...baseFields,
      acceptedDate: "2024-01-15T10:30:00Z",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.acceptedDate).toBeInstanceOf(Date);
    }
  });

  test("inbound: parses ISO 8601 with non-zero offset", () => {
    const result = ManualTermsOfService$inboundSchema.safeParse({
      ...baseFields,
      acceptedDate: "2024-01-15T10:30:00-05:00",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.acceptedDate).toBeInstanceOf(Date);
      // The Date should represent 15:30 UTC (10:30 - (-05:00))
      expect(result.data.acceptedDate.getUTCHours()).toBe(15);
    }
  });

  test("inbound: parses ISO 8601 with milliseconds", () => {
    const result = ManualTermsOfService$inboundSchema.safeParse({
      ...baseFields,
      acceptedDate: "2024-01-15T10:30:00.000Z",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.acceptedDate).toBeInstanceOf(Date);
    }
  });

  test("inbound: rejects non-datetime string", () => {
    const result = ManualTermsOfService$inboundSchema.safeParse({
      ...baseFields,
      acceptedDate: "not-a-date",
    });
    expect(result.success).toBe(false);
  });

  test("inbound: accepts plain date without time (permissive Date parsing)", () => {
    const result = ManualTermsOfService$inboundSchema.safeParse({
      ...baseFields,
      acceptedDate: "2024-01-15",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.acceptedDate).toBeInstanceOf(Date);
    }
  });

  test("outbound: Date serializes to ISO string", () => {
    const date = new Date("2024-01-15T10:30:00Z");
    const result = ManualTermsOfService$outboundSchema.safeParse({
      ...baseFields,
      acceptedDate: date,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(typeof result.data.acceptedDate).toBe("string");
      expect(result.data.acceptedDate).toContain("2024-01-15");
    }
  });

  test("round-trip: inbound then outbound produces valid ISO string", () => {
    const input = { ...baseFields, acceptedDate: "2024-01-15T10:30:00+00:00" };
    const parsed = ManualTermsOfService$inboundSchema.parse(input);
    const serialized = ManualTermsOfService$outboundSchema.parse(parsed);
    expect(typeof serialized.acceptedDate).toBe("string");
    // Should be parseable as a date
    expect(new Date(serialized.acceptedDate).toISOString()).toBe(serialized.acceptedDate);
  });
});

// ---------------------------------------------------------------------------
// PaymentMethod
// ---------------------------------------------------------------------------
describe("PaymentMethod schema", () => {
  const moovWalletPayload = {
    paymentMethodID: "pm-wallet-001",
    paymentMethodType: "moov-wallet",
    wallet: {
      walletID: "wal-001",
      partnerAccountID: "acct-001",
      walletType: "default",
    },
  };

  const achDebitFundPayload = {
    paymentMethodID: "pm-ach-001",
    paymentMethodType: "ach-debit-fund",
    bankAccount: {
      bankAccountID: "ba-001",
      fingerprint: "fp-001",
      status: "verified",
      holderName: "Jane Doe",
      holderType: "individual",
      bankName: "Test Bank",
      bankAccountType: "checking",
      routingNumber: "011401533",
      lastFourAccountNumber: "0000",
      updatedOn: "2024-01-15T10:30:00Z",
    },
  };

  const cardPaymentPayload = {
    paymentMethodID: "pm-card-001",
    paymentMethodType: "card-payment",
    card: {
      cardID: "card-001",
      fingerprint: "fp-card-001",
      brand: "Visa",
      cardType: "debit",
      lastFourCardNumber: "1234",
      bin: "411111",
      expiration: { month: "12", year: "28" },
      billingAddress: {
        addressLine1: "123 Main St",
        city: "Anytown",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      cardVerification: {
        cvv: "match",
        addressLine1: "match",
        postalCode: "match",
      },
    },
  };

  test("inbound: parses moov-wallet variant", () => {
    const result = PaymentMethod$inboundSchema.safeParse(moovWalletPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("moov-wallet");
    }
  });

  test("inbound: parses ach-debit-fund variant", () => {
    const result = PaymentMethod$inboundSchema.safeParse(achDebitFundPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("ach-debit-fund");
    }
  });

  test("inbound: parses card-payment variant", () => {
    const result = PaymentMethod$inboundSchema.safeParse(cardPaymentPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("card-payment");
    }
  });

  test("inbound: unknown paymentMethodType produces isUnknown fallback", () => {
    const result = PaymentMethod$inboundSchema.safeParse({
      paymentMethodID: "pm-unknown",
      paymentMethodType: "unknown-type",
      data: {},
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("UNKNOWN");
      expect((result.data as any).isUnknown).toBe(true);
    }
  });

  test("inbound: missing paymentMethodType produces isUnknown fallback", () => {
    const result = PaymentMethod$inboundSchema.safeParse({
      paymentMethodID: "pm-001",
      wallet: {
        walletID: "wal-001",
        partnerAccountID: "acct-001",
        walletType: "default",
      },
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("UNKNOWN");
      expect((result.data as any).isUnknown).toBe(true);
    }
  });

  test("inbound: mismatched paymentMethodType and payload produces isUnknown fallback", () => {
    // wallet data with ach-debit-fund type
    const result = PaymentMethod$inboundSchema.safeParse({
      paymentMethodID: "pm-001",
      paymentMethodType: "ach-debit-fund",
      wallet: {
        walletID: "wal-001",
        partnerAccountID: "acct-001",
        walletType: "default",
      },
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("UNKNOWN");
      expect((result.data as any).isUnknown).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// TransferPaymentMethod
// ---------------------------------------------------------------------------
describe("TransferPaymentMethod schema", () => {
  const moovWalletPayload = {
    paymentMethodID: "pm-wallet-001",
    paymentMethodType: "moov-wallet",
    wallet: {
      walletID: "wal-001",
      partnerAccountID: "acct-001",
      walletType: "default",
    },
  };

  const achDebitFundPayload = {
    paymentMethodID: "pm-ach-001",
    paymentMethodType: "ach-debit-fund",
    bankAccount: {
      bankAccountID: "ba-001",
      fingerprint: "fp-001",
      status: "verified",
      holderName: "Jane Doe",
      holderType: "individual",
      bankName: "Test Bank",
      bankAccountType: "checking",
      routingNumber: "011401533",
      lastFourAccountNumber: "0000",
      updatedOn: "2024-01-15T10:30:00Z",
    },
  };

  test("inbound: parses moov-wallet variant", () => {
    const result = TransferPaymentMethod$inboundSchema.safeParse(moovWalletPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("moov-wallet");
    }
  });

  test("inbound: parses ach-debit-fund variant", () => {
    const result = TransferPaymentMethod$inboundSchema.safeParse(achDebitFundPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("ach-debit-fund");
    }
  });

  test("inbound: unknown paymentMethodType produces isUnknown fallback", () => {
    const result = TransferPaymentMethod$inboundSchema.safeParse({
      paymentMethodID: "pm-unknown",
      paymentMethodType: "unknown-type",
      data: {},
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("UNKNOWN");
      expect((result.data as any).isUnknown).toBe(true);
    }
  });

  test("inbound: missing paymentMethodType produces isUnknown fallback", () => {
    const result = TransferPaymentMethod$inboundSchema.safeParse({
      paymentMethodID: "pm-001",
      wallet: {
        walletID: "wal-001",
        partnerAccountID: "acct-001",
        walletType: "default",
      },
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.paymentMethodType).toBe("UNKNOWN");
      expect((result.data as any).isUnknown).toBe(true);
    }
  });
});
