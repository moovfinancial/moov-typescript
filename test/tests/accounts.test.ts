import { expect, test, describe } from "bun:test";
import { Chance } from "chance";
import { moov } from "./setup";
const chance = new Chance();

let accountID = "a920f147-ed53-4aa1-977c-d11cc192979c"; // default account ID
let accountName = "Hollywood Entertainment Corp.";

describe("Accounts", () => {
	test("should create an account", async () => {
		const legalBusinessName = `${chance.company()} ${new Date().getTime()}`;
		const { result } = await moov.accounts.create({
			accountType: "business",
			profile: {
				business: {
					legalBusinessName,
				},
			},
		});

		expect(result).toBeDefined();
		expect(result.accountID).toBeDefined();
		expect(result.displayName).toEqual(legalBusinessName);
		accountID = result.accountID;
		accountName = legalBusinessName;
	});

	test("should be able to list accounts", async () => {
		const { result } = await moov.accounts.list({
			name: accountName,
		});
		expect(result).toBeDefined();
		expect(result.length).toBeGreaterThan(0);
		expect(result[0].accountID).toEqual(accountID);
	});

	test("should be able to get an account", async () => {
		const { result } = await moov.accounts.get({ accountID });
		expect(result).toBeDefined();
		expect(result.accountID).toEqual(accountID);
	});

	test("should be able to update an account", async () => {
		const legalBusinessName = chance.company();
		const { result } = await moov.accounts.update({
			accountID,
			createAccountUpdate: { profile: { business: { legalBusinessName } } },
		});
		expect(result).toBeDefined();
		expect(result.accountID).toEqual(accountID);
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
		const response = await moov.accounts.disconnect({ accountID });
		const headers = response?.headers;
		expect(headers).toBeDefined();
	});
});
