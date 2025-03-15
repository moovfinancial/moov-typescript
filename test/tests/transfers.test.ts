import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { ids, moov } from "../setup";
import {
  crateAccountAndGetTransferOptions,
  createAccount,
  createAccountWithWallet,
  createBankAccount,
  createCard,
  SOURCE_ACCOUNT_ID,
  UUID_REGEX,
  waitFor,
} from "../utils/utils";
import type { CreateTransferOptions, PaymentMethod, TransferResponse } from "../../models/components";
import { sleep } from "bun";
import type { CreateTransferRequest } from "../../models/operations";

let destinationAccountID: string;
let sourcePaymentMethodID: string;
let destinationPaymentMethodID: string;
let transfer: TransferResponse;
describe("Transfers", () => {
  // Setup accounts and payment methods

  describe("Transfer Creation", () => {
    beforeAll(async () => {
      const availablePaymentMethods = await crateAccountAndGetTransferOptions();
      sourcePaymentMethodID = availablePaymentMethods.sourceOptions![0].paymentMethodID!;
      destinationPaymentMethodID = availablePaymentMethods.destinationOptions![0].paymentMethodID!;
    });
    test("should be able to create a simple ASYNC transfer between accounts", async () => {
      const transferRequest: CreateTransferRequest = {
        xIdempotencyKey: crypto.randomUUID(),
        accountID: SOURCE_ACCOUNT_ID,
        createTransfer: {
          source: {
            paymentMethodID: sourcePaymentMethodID,
          },
          destination: {
            paymentMethodID: destinationPaymentMethodID,
          },
          amount: {
            currency: "USD",
            value: 1,
          },
        },
      };

      const { result } = await moov.transfers.create(transferRequest);
      expect(result).toBeDefined();
      expect(result.transferID).toBeDefined();
      expect(result.createdOn).toBeDefined();
      expect(result.transferID).toMatch(UUID_REGEX);
      transfer = result;
    });

    test("Should be able to create a simple SYNC transfer between accounts", async () => {
      const transferRequest: CreateTransferRequest = {
        xIdempotencyKey: crypto.randomUUID(),
        xWaitFor: "rail-response",
        accountID: SOURCE_ACCOUNT_ID,
        createTransfer: {
          source: {
            paymentMethodID: sourcePaymentMethodID,
          },
          destination: {
            paymentMethodID: destinationPaymentMethodID,
          },
          amount: {
            currency: "USD",
            value: 1,
          },
        },
      };

      const { result } = await moov.transfers.create(transferRequest);
      expect(result).toBeDefined();
      expect(result.transferID).toBeDefined();
      expect(result.createdOn).toBeDefined();
      expect(result.transferID).toMatch(UUID_REGEX);
      transfer = result;
    });

    test("should fail to create transfer with invalid amount", async () => {
      const transferRequest: CreateTransferRequest = {
        xIdempotencyKey: crypto.randomUUID(),
        accountID: SOURCE_ACCOUNT_ID,
        createTransfer: {
          source: {
            paymentMethodID: sourcePaymentMethodID,
          },
          destination: {
            paymentMethodID: destinationPaymentMethodID,
          },
          amount: {
            currency: "USD",
            value: 0,
          },
        },
      };

      await expect(() => moov.transfers.create(transferRequest)).toThrowError(
        'API error occurred: {"amount":"amount value must be greater than or equal to 0.01"}',
      );
    });
  });

  describe.todo("Transfer Management", () => {
    beforeEach(async () => {});

    test("should list transfers", async () => {});

    test("should get transfer details", async () => {});

    test("should update transfer metadata", async () => {});

    test("should list transfer refunds", async () => {});
  });

  describe.todo("Transfer Options", () => {
    test("should generate transfer options", async () => {});
  });
});
