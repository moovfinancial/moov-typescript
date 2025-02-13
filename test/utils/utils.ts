import { Chance } from "chance";
import { ids, moov } from "../setup";
import type { Account, BankAccount, CreateAccount } from "../../models/components";
import { merge } from "remeda";
const chance = new Chance();

export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;

/**
 * Creates a default account, merges the provided account with the default account, and returns the result.
 * It also adds the account to the seen list so we can later delete it in the `afterAll` hook in setup.ts.
 * @param account - The account to merge with the default account.
 * @returns The created account.
 */
export const createAccount = async (account: DeepPartial<Account> = {}) => {
	const truncatedLegalBusinessName = chance.company().slice(0, 50); // Because the total lenght has to be less than 64 chars
	const legalBusinessName = `${truncatedLegalBusinessName} ${new Date().getTime()}`; // 50 chars + ~10 chars fot the timestamp
	const defaultAccount = {
		accountType: "business",
		profile: {
			business: {
				legalBusinessName,
			},
		},
	};
	const mergedAccount = merge(defaultAccount, account) as CreateAccount;
	const { result } = await moov.accounts.create(mergedAccount);

	ids.seen({ accountID: result.accountID });
	return result;
};

/**
 * Creates a bank account for the given account ID. Optionally, you can provide a bank account to merge with the default bank account.
 * It also adds the bank account to the seen list so we can later delete it in the `afterAll` hook in setup.ts.
 * @param accountID - The ID of the account to create the bank account for.
 * @param bankAccount - The bank account to merge with the default bank account.
 * @returns The created bank account.
 */
export const createBankAccount = async (accountID: string, bankAccount: Partial<BankAccount> = {}) => {
	const { result } = await moov.bankAccounts.link({
		accountID,
		linkBankAccount: {
			account: {
				holderName: "Marcellus Wallace",
				holderType: "individual",
				accountNumber: chance.integer({ min: 1000000000, max: 9999999999 }).toString(),
				bankAccountType: "checking",
				routingNumber: "121000248",
			},
			...bankAccount,
		},
	});
	ids.seen({ accountID, bankAccountID: result.bankAccountID });
	return result;
};
