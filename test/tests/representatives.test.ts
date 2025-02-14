import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { createAccount, createAccountWithWallet, createRepresentative } from "../utils/utils";
import type { Account, Representative } from "../../models/components";
import { moov } from "../setup";

let account: Account;
let representative: Representative;
describe("Representative", () => {
  beforeAll(async () => {
    account = await createAccount();
  });
  describe("Creating a representative", () => {
    test("should create a representative", async () => {
      const representativeCreated = await createRepresentative(account.accountID);
      expect(representativeCreated).toBeDefined();
      representative = representativeCreated;
    });
  });
  describe("Representative-dependent tests", () => {
    beforeEach(async () => {
      if (!representative) {
        representative = await createRepresentative(account.accountID);
      }
    });
    describe("Listing and getting representatives", () => {
      test("should list representatives", async () => {
        const { result } = await moov.representatives.list({ accountID: account.accountID });
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
        expect(result.some((r) => r.representativeID === representative.representativeID)).toBe(true);
      });
      test("should be able to get a representative", async () => {
        const { result } = await moov.representatives.get({
          accountID: account.accountID,
          representativeID: representative.representativeID,
        });
        expect(result).toBeDefined();
        expect(result.representativeID).toBe(representative.representativeID);
        expect(result.email).toBe(representative.email!);
      });
      test("listing representatives should fail if the account is not found", async () => {
        expect(() => moov.representatives.list({ accountID: "not-a-valid-account-id" })).toThrowError(
          "API error occurred: Status 403 Content-Type  Body ",
        );
      });
      test("getting a representative should fail if the account is not found", async () => {
        expect(() =>
          moov.representatives.get({
            accountID: "not-a-valid-account-id",
            representativeID: representative.representativeID,
          }),
        ).toThrowError("API error occurred: Status 403 Content-Type  Body ");
      });
    });
    describe("Updating a representative", () => {
      beforeEach(async () => {
        representative = await createRepresentative(account.accountID);
      });
      test("should be able to update a representative", async () => {
        const { result } = await moov.representatives.update({
          accountID: account.accountID,
          representativeID: representative.representativeID,
          updateRepresentative: {
            email: "mia.wallece@bigkahunaburger.com",
          },
        });
        expect(result).toBeDefined();
        expect(result.email).toBe("mia.wallece@bigkahunaburger.com");
      });
      test("updating a representative should fail if the account is not found", async () => {
        expect(() =>
          moov.representatives.update({
            accountID: "not-a-valid-account-id",
            representativeID: representative.representativeID,
            updateRepresentative: {
              email: "mia.wallece@bigkahunaburger.com",
            },
          }),
        ).toThrowError("API error occurred: Status 403 Content-Type  Body ");
      });
    });
  });
});
