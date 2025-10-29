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
      expect(result.length).toEqual(1);
      expect(result[0].availableBalance).toEqual({
        currency: "USD",
        value: 0,
        valueDecimal: "0",
      });
    });
    test("listing should fail if accountID is not provided", async () => {
      expect(() => moov.wallets.list({ accountID: "" })).toThrowError(
        /API error occurred: Status 403/i
      );
    });
  });

  describe.todo("Getting Wallets", () => {});
});
