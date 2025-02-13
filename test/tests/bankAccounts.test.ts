import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { moov } from "../setup";
import { createAccount, createBankAccount } from "../utils/utils";
import type { BankAccount } from "../../models/components";
import { sleep } from "bun";

let accountID = "a920f147-ed53-4aa1-977c-d11cc192979c"; // default account ID
let bankAccount: Partial<BankAccount> = {}; // default bank account ID
const accountNumber = "1234567890";

describe("Bank Accounts", () => {
	beforeAll(async () => {
		const account = await createAccount();
		accountID = account.accountID;
	});

	test("should be able to link a bank account", async () => {
		const { result } = await moov.bankAccounts.link({
			accountID,
			linkBankAccount: {
				account: {
					holderName: "Marcellus Wallace",
					holderType: "individual",
					accountNumber,
					bankAccountType: "checking",
					routingNumber: "121000248",
				},
			},
		});
		expect(result).toBeDefined();
		expect(result.bankAccountID).toBeDefined();
		expect(result.bankAccountType).toEqual("checking");
		bankAccount = result;
	});
	describe("Bank-account dependent tests", () => {
		// Create a bank account if it doesn't exist yet
		beforeEach(async () => {
			if (!bankAccount.bankAccountID) {
				bankAccount = await createBankAccount(accountID);
			}
		});
		test("should be able to retrieve a bank account", async () => {
			const { result } = await moov.bankAccounts.get({
				accountID,
				bankAccountID: bankAccount.bankAccountID!,
			});
			expect(result).toBeDefined();
			expect(result.bankAccountID).toEqual(bankAccount.bankAccountID!);
			expect(result.bankAccountType).toEqual(bankAccount.bankAccountType!);
			expect(result.holderName).toEqual(bankAccount.holderName!);
			expect(result.holderType).toEqual(bankAccount.holderType!);
			expect(result.routingNumber).toEqual(bankAccount.routingNumber!);
			expect(result.lastFourAccountNumber).toEqual(accountNumber.slice(-4));
		});

		test("should be able to list bank accounts", async () => {
			const { result } = await moov.bankAccounts.list({
				accountID,
			});
			expect(result).toBeDefined();
			expect(result.length).toBeGreaterThan(0);
			expect(result[0].bankAccountID).toEqual(bankAccount.bankAccountID!);
			expect(result[0].bankAccountType).toEqual(bankAccount.bankAccountType!);
			expect(result[0].holderName).toEqual(bankAccount.holderName!);
			expect(result[0].holderType).toEqual(bankAccount.holderType!);
			expect(result[0].routingNumber).toEqual(bankAccount.routingNumber!);
			expect(result[0].lastFourAccountNumber).toEqual(accountNumber.slice(-4));
		});

		describe("Bank account verification", () => {
			beforeEach(async () => {
				bankAccount = await createBankAccount(accountID);
			});
			describe("RTP verification", () => {
				test("should be able to initiate bank account verification and complete it, and get a 409 error when I try to verify an already-verified bank account", async () => {
					const { result } = await moov.bankAccounts.initiateVerification({
						accountID,
						bankAccountID: bankAccount.bankAccountID!,
						xWaitFor: "rail-response",
					});
					expect(result).toBeDefined();
					expect(result.status).toEqual("sent-credit");
					const { result: result2 } = await moov.bankAccounts.completeVerification({
						accountID,
						bankAccountID: bankAccount.bankAccountID!,
						completeBankAccountVerification: {
							code: "0001",
						},
					});
					expect(result2).toBeDefined();
					expect(result2.status).toEqual("successful");
					expect(
						async () =>
							await moov.bankAccounts.initiateVerification({
								accountID,
								bankAccountID: bankAccount.bankAccountID!,
							}),
					).toThrowError(
						expect.objectContaining({ error: "unacceptable bank account status verified for verification" }),
					);
				});
				test("should be able to get the bank account verification status", async () => {
					const { result } = await moov.bankAccounts.initiateVerification({
						accountID,
						bankAccountID: bankAccount.bankAccountID!,
					});
					expect(result).toBeDefined();
					expect(result.status).toEqual("new");
					await sleep(2000);
					const { result: result2 } = await moov.bankAccounts.getVerification({
						accountID,
						bankAccountID: bankAccount.bankAccountID!,
					});
					expect(result2).toBeDefined();
					expect(result2.status).toEqual("sent-credit");
				});
			});

			describe("Micro deposits", () => {
				beforeEach(async () => {
					bankAccount = await createBankAccount(accountID);
				});
				test("should be able to initiate micro deposits and complete them and should get a 409 error when we try to complete micro deposits for an already-completed bank account", async () => {
					const result = await moov.bankAccounts.initiateMicroDeposits({
						accountID,
						bankAccountID: bankAccount.bankAccountID!,
					});
					expect(result).toBeDefined();
					await sleep(2000);
					const { result: result2 } = await moov.bankAccounts.completeMicroDeposits({
						accountID,
						bankAccountID: bankAccount.bankAccountID!,
						completeMicroDeposits: {
							amounts: [0, 0],
						},
					});
					expect(result2).toBeDefined();
					expect(result2.status).toEqual("verified");
					expect(
						async () =>
							await moov.bankAccounts.initiateMicroDeposits({
								accountID,
								bankAccountID: bankAccount.bankAccountID!,
							}),
					).toThrowError(
						expect.objectContaining({
							error: "unexpected account status: expected 'new' or 'verificationFailed', found 'verified'",
						}),
					);
				});
			});
		});

		test("should be able to disable a bank account", async () => {
			const result = await moov.bankAccounts.disable({
				accountID,
				bankAccountID: bankAccount.bankAccountID!,
			});
			expect(result).toBeDefined();
		});
	});
});
