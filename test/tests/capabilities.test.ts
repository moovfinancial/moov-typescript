import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { createAccount, createRepresentative } from "../utils/utils";
import type { Account, CapabilityID } from "../../models/components";
import { moov } from "../setup";
import { sleep } from "bun";

let account: Account;

describe("Capabilities", () => {
  beforeAll(async () => {
    account = await createAccount({ capabilities: ["collect-funds"] });
  });

  describe("Listing capabilities", () => {
    test("should list capabilities for an account", async () => {
      const { result } = await moov.capabilities.list({
        accountID: account.accountID,
      });
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      // Capabilities should include some standard capabilities
      expect(result.some((cap) => cap.capability === "transfers")).toBe(true);
    });

    test("listing capabilities should fail if the account is not found", async () => {
      expect(() =>
        moov.capabilities.list({
          accountID: "not-a-valid-account-id",
        }),
      ).toThrowError("API error occurred: Status 403 Content-Type  Body ");
    });
  });

  describe("Getting specific capabilities", () => {
    test("should get details of a specific capability", async () => {
      const { result } = await moov.capabilities.get({
        accountID: account.accountID,
        capabilityID: "transfers",
      });
      expect(result).toBeDefined();
      expect(result.capability).toBe("transfers");
      expect(result.status).toEqual("enabled");
    });

    test("should contain currentlyDue for pending capabilities", async () => {
      const { result } = await moov.capabilities.get({
        accountID: account.accountID,
        capabilityID: "collect-funds",
      });
      expect(result).toBeDefined();
      expect(result.requirements?.currentlyDue?.length).toBeGreaterThan(0);
      // somee of the requirements should be business.ein
      expect(result.requirements?.currentlyDue?.some((req) => req === "business.ein")).toBe(true);
    });

    test.todo("should contain errors for collect-funds capability", async () => {
      await createRepresentative(account.accountID, {
        birthDate: {
          day: 1,
          month: 1,
          year: 1900, // will fail automatic verification
        },
        email: "a@a.com",
      });
      await sleep(1000);
      const { result } = await moov.capabilities.get({
        accountID: account.accountID,
        capabilityID: "collect-funds",
      });
      expect(result).toBeDefined();
      expect(result.requirements?.errors?.length).toBeGreaterThan(0);
      // some of the errors should be business.ein
      expect(result.requirements?.errors?.some((err) => err.errorCode === "failed-automatic-verification")).toBe(true);
    });

    test("getting a capability should fail if the account is not found", async () => {
      expect(() =>
        moov.capabilities.get({
          accountID: "not-a-valid-account-id",
          capabilityID: "transfers",
        }),
      ).toThrowError("API error occurred: Status 403 Content-Type  Body ");
    });

    test("getting a capability should fail if the capability does not exist", async () => {
      expect(() =>
        moov.capabilities.get({
          accountID: account.accountID,
          capabilityID: "not-a-valid-capability" as CapabilityID,
        }),
      ).toThrowError();
    });
  });

  describe("Requesting capabilities", () => {
    test("should request new capabilities", async () => {
      const { result } = await moov.capabilities.request({
        accountID: account.accountID,
        addCapabilities: {
          capabilities: ["transfers", "send-funds", "collect-funds"],
        },
      });
      expect(result).toBeDefined();
      expect(result[0].capability).toBe("collect-funds");
      expect(result[0].status).toBeDefined();
    });

    test("requesting capabilities should fail if the account is not found", async () => {
      expect(() =>
        moov.capabilities.request({
          accountID: "not-a-valid-account-id",
          addCapabilities: {
            capabilities: ["transfers"],
          },
        }),
      ).toThrowError("API error occurred: Status 403 Content-Type  Body ");
    });

    test("requesting capabilities should fail if the capability is invalid", async () => {
      expect(() =>
        moov.capabilities.request({
          accountID: account.accountID,
          addCapabilities: {
            capabilities: ["not-a-valid-capability" as CapabilityID],
          },
        }),
      ).toThrowError();
    });

    test("requesting capabilities should NOT fail if we request the same capability twice", async () => {
      const { result } = await moov.capabilities.request({
        accountID: account.accountID,
        addCapabilities: { capabilities: ["transfers"] },
      });
      expect(result).toBeDefined();
      // capability array should containe "transfers"
      expect(result.some((cap) => cap.capability === "transfers")).toBe(true);
      expect(result[0].status).toBeDefined();
      expect(() =>
        moov.capabilities.request({
          accountID: account.accountID,
          addCapabilities: { capabilities: ["transfers"] },
        }),
      ).not.toThrowError();
    });
  });
});
