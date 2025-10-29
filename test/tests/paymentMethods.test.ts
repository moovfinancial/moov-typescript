import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { ids, moov } from "../setup";
import { createAccount, createBankAccount, createCard } from "../utils/utils";
import type { BankAccount, Card } from "../../models/components";

let accountID = "a920f147-ed53-4aa1-977c-d11cc192979c"; // default account ID
let card: Partial<Card> = {};
let bankAccount: Partial<BankAccount> = {};
let cardNumber: string;
describe("PaymentMethods", () => {
  beforeAll(async () => {
    const account = await createAccount();
    accountID = account.accountID;
    const result = await createCard(accountID);
    card = result.card;
    cardNumber = result.cardNumber;
    const bankAccountResult = await createBankAccount(accountID);
    bankAccount = bankAccountResult.bankAccount;
  });

  describe("Listing", () => {
    test("should be able to list payment methods", async () => {
      const { result } = await moov.paymentMethods.list({ accountID });
      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    });
    test("listing should fail if accountID is not provided", async () => {
      expect(() => moov.paymentMethods.list({ accountID: "" })).toThrowError(
        /API error occurred: Status 403/i,
      );
    });
  });

  describe("Getting PaymentMethods", () => {
    test("should be able to get a payment method", async () => {
      const { result: listResult } = await moov.paymentMethods.list({ accountID });
      const { result } = await moov.paymentMethods.get({
        accountID: accountID,
        paymentMethodID: listResult[0].paymentMethodID,
      });
      expect(result).toBeDefined();
      expect(result.paymentMethodID).toBe(listResult[0].paymentMethodID);
    });
    test("getting should fail if accountID and paymentMethodID are not correct", async () => {
      expect(() => moov.paymentMethods.get({ accountID: "@#$@#$@$", paymentMethodID: "@#$@#$@#$@" })).toThrowError(
        /API error occurred: Status 403/i,
      );
    });
    test("getting should fail if paymentMethodID is not provided", async () => {
      expect(() => moov.paymentMethods.get({ accountID: accountID, paymentMethodID: "" })).toThrowError(
        /API error occurred: Status 403/i,
      );
    });
  });
});
