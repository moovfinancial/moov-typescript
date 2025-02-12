import { Chance } from "chance";
import type { Moov } from "../..";
import { ids } from "../tests/setup";
const chance = new Chance();

export const createAccount = async (moov: Moov, type: "business" | "individual" = "business") => {
	const legalBusinessName = `${chance.company()} ${new Date().getTime()}`;
	const { result } = await moov.accounts.create({
		accountType: type,
		profile: {
			business: {
				legalBusinessName,
			},
		},
	});
	ids.seen({ accountID: result.accountID });
	return result;
};

export const createBankAccount = async (moov: Moov, accountID: string) => {
	const { result } = await moov.bankAccounts.link({
		accountID,
		linkBankAccount: {
			account: {
				holderName: "Marcellus Wallace",
				holderType: "individual",
				accountNumber: "1234567890",
				bankAccountType: "checking",
				routingNumber: "121000248",
			},
		},
	});
	ids.seen({ accountID, bankAccountID: result.bankAccountID });
	return result;
};
