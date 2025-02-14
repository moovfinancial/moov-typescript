import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { ids, moov } from "../setup";
import { createAccount, createAccountWithWallet } from "../utils/utils";

let accountID = "a920f147-ed53-4aa1-977c-d11cc192979c"; // default account ID
describe("Wallets", () => {
  beforeAll(async () => {
    const account = await createAccountWithWallet();
    accountID = account.accountID;
  });

  describe("Listing", () => {
    test("should be able to list wallets", async () => {
      const { result } = await moov.wallets.list({ accountID });
      expect(result).toBeDefined();
      expect(result.length).toEqual(0);
    });
    test("listing should fail if accountID is not provided", async () => {
      expect(() => moov.wallets.list({ accountID: "" })).toThrowError(
        "API error occurred: Status 403 Content-Type  Body",
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
        "API error occurred: Status 403 Content-Type  Body",
      );
    });
    test("getting should fail if paymentMethodID is not provided", async () => {
      expect(() => moov.paymentMethods.get({ accountID: accountID, paymentMethodID: "" })).toThrowError(
        "API error occurred: Status 403 Content-Type  Body",
      );
    });
  });
});
