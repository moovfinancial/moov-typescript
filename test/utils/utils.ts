import { Chance } from "chance";
import { ids, moov } from "../setup";
import type {
  BankAccount,
  BankAccountPayload,
  CreateAccount,
  CreateRepresentative,
  CreateTransferOptions,
  LinkCard,
  PaymentMethod,
} from "../../models/components";
import { merge } from "remeda";
import { sleep } from "bun";
import { expect } from "bun:test";
const chance = new Chance();

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const SOURCE_ACCOUNT_ID = "5acdc734-8c9d-448f-be13-136efa707b7b"; // Ramen Corp
export const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const getDefaultAccount = () => {
  const truncatedLegalBusinessName = chance.company().slice(0, 50); // Because the total lenght has to be less than 64 chars
  const legalBusinessName = `${truncatedLegalBusinessName} ${new Date().getTime()}`; // 50 chars + ~10 chars fot the timestamp

  return {
    accountType: "business",
    profile: {
      business: {
        legalBusinessName,
      },
    },
  };
};

const getDefaultRepresentative = (): CreateRepresentative => {
  return {
    name: {
      firstName: "Vince",
      lastName: "Vega",
    },
    email: "vince.vega@example.com",
    address: {
      addressLine1: "123 Main St",
      city: "Anytown",
      country: "US",
      stateOrProvince: "CA",
      postalCode: "12345",
    },
    birthDate: {
      day: 1,
      month: 1,
      year: 1990,
    },
    governmentID: {
      ssn: {
        full: "123456789",
      },
    },
    responsibilities: {
      isOwner: true,
      isController: true,
      ownershipPercentage: 80,
      jobTitle: "CEO",
    },
  };
};
/**
 * Creates a default account, merges the provided account with the default account, and returns the result.
 * It also adds the account to the seen list so we can later delete it in the `afterAll` hook in setup.ts.
 * @param account - The account to merge with the default account.
 * @returns The created account.
 */
export const createAccount = async (account: DeepPartial<CreateAccount> = {}) => {
  const mergedAccount = merge(getDefaultAccount(), account) as CreateAccount;
  const { result } = await moov.accounts.create(mergedAccount);

  ids.seen({ accountID: result.accountID });
  return result;
};

export const createRepresentative = async (
  accountID: string,
  representative: DeepPartial<CreateRepresentative> = {},
) => {
  const mergedRepresentative = merge(getDefaultRepresentative(), representative) as CreateRepresentative;
  const { result } = await moov.representatives.create({
    accountID: accountID,
    createRepresentative: mergedRepresentative,
  });
  ids.seen({ accountID, representativeID: result.representativeID });
  return result;
};

export const createAccountWithWallet = async (account: DeepPartial<CreateAccount> = {}) => {
  // Create the account with the KYC fields needed for the wallet
  const ts = new Date().getTime();
  const baseAccount = {
    ...getDefaultAccount(),
    capabilities: ["wallet"],
    profile: {
      business: {
        website: `https://bigkahunawallet.com/${ts}`,
        legalBusinessName: `Big Kahuna Wallet ${ts}`,
        businessType: "llc",
        taxID: {
          ein: {
            number: "123456789",
          },
        },
        phone: {
          number: "1234567890",
        },
        address: {
          addressLine1: "123 Main St",
          city: "Anytown",
          country: "US",
          stateOrProvince: "CA",
          postalCode: "12345",
        },
      },
    },
  };
  const mergedAccount = merge(baseAccount, account) as CreateAccount;
  const createdAccount = await createAccount(mergedAccount);
  // Get the terms of service token
  const {
    result: { token },
  } = await moov.accounts.getTermsOfServiceToken({
    origin: "https://moov.io",
    referer: "https://moov.io",
  });
  // Create the representative (which adds it to the account)
  await createRepresentative(createdAccount.accountID);
  // Update the account with the terms of service token AND ownersProvided to true
  const { result: patchResult } = await moov.accounts.update({
    accountID: createdAccount.accountID,
    patchAccount: {
      profile: {
        business: {
          ownersProvided: true,
        },
      },
      termsOfService: {
        token,
      },
    },
  });
  // get capabilities for account
  let walletCapability;
  do {
    const { result } = await moov.capabilities.get({
      accountID: createdAccount.accountID,
      capabilityID: "wallet",
    });
    walletCapability = result;
    if (walletCapability.status !== "enabled") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } while (walletCapability.status !== "enabled");

  return patchResult;
};

/**
 * Creates a bank account for the given account ID. Optionally, you can provide a bank account to merge with the default bank account.
 * It also adds the bank account to the seen list so we can later delete it in the `afterAll` hook in setup.ts.
 * @param accountID - The ID of the account to create the bank account for.
 * @param bankAccount - The bank account to merge with the default bank account.
 * @returns The created bank account.
 */
export const createBankAccount = async (accountID: string, bankAccount: Partial<BankAccount> = {}) => {
  const defaultBankAccount = {
    account: {
      holderName: "Marcellus Wallace",
      holderType: "individual",
      accountNumber: chance.integer({ min: 1000000000, max: 9999999999 }).toString(),
      bankAccountType: "checking",
      routingNumber: "121000248",
    },
  };
  const mergedBankAccount = merge(defaultBankAccount, bankAccount) as BankAccountPayload;
  const { result } = await moov.bankAccounts.link({
    accountID,
    linkBankAccount: mergedBankAccount,
  });
  ids.seen({ accountID, bankAccountID: result.bankAccountID });
  return { bankAccount: result, accountNumber: mergedBankAccount.account.accountNumber };
};

export const createCard = async (accountID: string, card: DeepPartial<LinkCard> = {}) => {
  const defaultCard = {
    cardNumber: "4111111111111111",
    cardCvv: "123",
    expiration: {
      month: "01",
      year: "52",
    },
    billingAddress: {
      addressLine1: "123 Main St",
      city: "Anytown",
      country: "US",
      postalCode: "12345",
      stateOrProvince: "CA",
    },
  };
  const mergedCard = merge(defaultCard, card) as LinkCard;
  const { result } = await moov.cards.link({
    accountID,
    linkCard: mergedCard,
  });
  ids.seen({ accountID, cardID: result.cardID });
  return { card: result, cardNumber: mergedCard.cardNumber };
};

export const crateAccountAndGetTransferOptions = async () => {
  const doneCheck = (data: { result: PaymentMethod[] }) => data.result.length > 0;

  // Create destination account with card and bank account
  const destinationAccount = await createAccountWithWallet();
  const destinationAccountID = destinationAccount.accountID;
  await createBankAccount(destinationAccountID);
  createCard(destinationAccountID);

  // Get the payment method ID for the card
  const { result: destinationPaymentMethods } = await waitFor(
    () => moov.paymentMethods.list({ accountID: destinationAccountID }),
    {
      doneCheck,
    },
  );

  const generateOptionsRequest: CreateTransferOptions = {
    source: { accountID: SOURCE_ACCOUNT_ID },
    destination: { accountID: destinationAccountID },
    amount: { currency: "USD", value: 1 },
  };
  const { result: availablePaymentMethods } = await moov.transfers.generateOptions(generateOptionsRequest);
  expect(availablePaymentMethods).toBeDefined();
  expect(availablePaymentMethods.sourceOptions).toBeArray();
  expect(availablePaymentMethods.sourceOptions!.length).toBeGreaterThan(0);
  expect(availablePaymentMethods.destinationOptions).toBeArray();
  expect(availablePaymentMethods.destinationOptions!.length).toBeGreaterThan(0);
  return availablePaymentMethods;
};

export const waitFor = async <T>(
  callback: () => Promise<T>,
  options: { doneCheck?: (data: T) => boolean; interval?: number; timeout?: number } = {},
): Promise<T> => {
  const { interval = 250, timeout = 10000 } = options;
  const startTime = Date.now();
  const doneCheck = options.doneCheck || ((data) => !!data);
  const i = 0;

  while (true) {
    try {
      const result = await callback();
      if (doneCheck(result)) {
        return result;
      }
    } catch (error) {
      // Ignore errors and continue polling
    }

    if (Date.now() - startTime >= timeout) {
      throw new Error("waitFor timed out");
    }

    await sleep(interval);
  }
};
