import { expect, test, describe, beforeAll } from "bun:test";
import { Chance } from "chance";
import { moov } from "../setup";
import { createAccount } from "../utils/utils";
import type { Account, AccountType } from "../../models/components";
const chance = new Chance();

let account: Account;

describe("Accounts", () => {
  describe("Account creation", () => {
    test("should create an account", async () => {
      const legalBusinessName = `${chance.company()} ${new Date().getTime()}`;
      const acc = await createAccount({
        profile: {
          business: {
            legalBusinessName,
          },
        },
      });

      expect(acc).toBeDefined();
      expect(acc.accountID).toBeDefined();
      expect(acc.displayName).toEqual(legalBusinessName);
      account = acc;
    });
    describe("Failure cases", () => {
      test("should fail if the account type is not supported", async () => {
        await expect(() =>
          createAccount({
            accountType: "not-a-valid-account-type" as AccountType,
          }),
        ).toThrowError();
      });
    });

    test("should fail if we pass an empty business profile", async () => {
      await expect(() =>
        createAccount({
          profile: {},
        }),
      ).toThrow();
      // @TODO: Once error hanling is 100% consistent, we should be able to narrow this assertion
      // Right now it's throwing a Zod validation error, but it should be a custom error instead
      // ).toThrowError('API error occurred: {"error":{"profile":"business profile is required for business account"}}');
    });
  });

  describe("Account-dependent tests", () => {
    beforeAll(async () => {
      if (!account) {
        account = await createAccount();
      }
    });

    describe("Account listing", () => {
      test("should be able to list accounts", async () => {
        const { result } = await moov.accounts.list({
          name: account.displayName,
        });
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].accountID).toEqual(account.accountID);
      });

      test("Should be able to filter accounts by type and status", async () => {
        const { result } = await moov.accounts.list({
          type: "business",
          capabilityStatus: "pending",
        });
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
        const { result: result2 } = await moov.accounts.list({
          type: "individual",
          capabilityStatus: "enabled",
        });
        expect(result2).toBeDefined();
        expect(result2.length).toBeGreaterThan(0);
      });

      test("should be able to filter accounts by capability", async () => {
        const { result } = await moov.accounts.list({
          capability: "transfers",
        });
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
        const { result: result2 } = await moov.accounts.list({
          capability: "collect-funds",
        });
        expect(result2).toBeDefined();
        expect(result2.length).toBeGreaterThan(0);
      });
    });

    test("should be able to get an account", async () => {
      const { result } = await moov.accounts.get({ accountID: account.accountID });
      expect(result).toBeDefined();
      expect(result.accountID).toEqual(account.accountID);
    });

    test("should be able to update an account", async () => {
      const legalBusinessName = chance.company();
      const { result } = await moov.accounts.update({
        accountID: account.accountID,
        createAccountUpdate: { profile: { business: { legalBusinessName } } },
      });
      expect(result).toBeDefined();
      expect(result.accountID).toEqual(account.accountID);
      expect(result.profile?.business?.legalBusinessName).toEqual(legalBusinessName);
    });

    test("should be able to get the terms of service token for an account", async () => {
      const { result } = await moov.accounts.getTermsOfServiceToken({
        origin: "https://example.com",
        referer: "https://example.com",
      });
      expect(result).toBeDefined();
      expect(result.token).toEqual(expect.any(String));
    });

    test("should be able to disconnect an account", async () => {
      const response = await moov.accounts.disconnect({ accountID: account.accountID });
      const headers = response?.headers;
      expect(headers).toBeDefined();
    });
  });
});
