import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { ids, moov } from "../setup";
import { createAccount, createBankAccount, createCard } from "../utils/utils";
import type { Card } from "../../models/components";

let accountID = "a920f147-ed53-4aa1-977c-d11cc192979c"; // default account ID
let card: Partial<Card> = {};
let cardNumber: string;
describe("Cards", () => {
  beforeAll(async () => {
    const account = await createAccount();
    accountID = account.accountID;
  });

  describe("Card Linking", () => {
    test("should fail when I pass incorrect params", async () => {
      expect(
        async () =>
          await moov.cards.link({
            accountID,
            linkCard: {
              cardNumber: "4111111111111111",
              cardCvv: "123",
              expiration: {
                month: "01",
                year: "2025", // 2025 is not a valid year, should be "25"
              },
              billingAddress: {
                addressLine1: "123 Main St",
                city: "Anytown",
                country: "US",
                postalCode: "12345", // stateOrProvince is missing, but required when passing anything other than just postalCode
              },
            },
          }),
      ).toThrow(
        expect.objectContaining({
          expiration: "year: the length must be exactly 2.",
          billingAddress: "stateOrProvince: cannot be blank.",
        }),
      );
    });
    test("should be able to link a card successfully", async () => {
      const { result } = await moov.cards.link({
        accountID,
        linkCard: {
          cardNumber: "4111111111111111",
          cardCvv: "123",
          expiration: {
            month: "01",
            year: "45",
          },
          billingAddress: {
            addressLine1: "123 Main St",
            city: "Anytown",
            country: "US",
            postalCode: "12345",
            stateOrProvince: "CA",
          },
        },
      });
      expect(result).toBeDefined();
      expect(result.cardID).toBeDefined();
      expect(result.cardType).toEqual("debit");
      expect(result.brand).toEqual("Visa");
      expect(result.lastFourCardNumber).toEqual("1111");
      card = result;
      ids.seen({ accountID, cardID: result.cardID });
    });
  });
  describe("Card dependent tests", () => {
    beforeEach(async () => {
      const result = await createCard(accountID);
      card = result.card;
      cardNumber = result.cardNumber;
    });
    describe("Getting and listing cards", () => {
      test("should be able to retrieve a card", async () => {
        const { result } = await moov.cards.get({
          accountID,
          cardID: card.cardID!,
        });
        expect(result).toBeDefined();
        expect(result.bin).toEqual(card.bin!);
        expect(result.cardID).toEqual(card.cardID!);
        expect(result.cardType).toEqual(card.cardType!);
        expect(result.brand).toEqual(card.brand!);
        expect(result.lastFourCardNumber).toEqual(cardNumber.slice(-4));
      });

      test("Getting a card should fail when I pass incorrect params", async () => {
        expect(async () => await moov.cards.get({ accountID, cardID: "invalid-card-id" })).toThrowError(
          /API error occurred: Status 404/,
        );
      });

      test("should be able to list cards", async () => {
        const { result } = await moov.cards.list({
          accountID,
        });
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].bin).toEqual(expect.any(String));
        expect(result[0].cardID).toEqual(expect.any(String));
        expect(result[0].cardType).toEqual(expect.any(String));
        expect(result[0].brand).toEqual(expect.any(String));
        expect(result[0].lastFourCardNumber).toEqual(expect.any(String));
      });

      test("listing should fail when I pass incorrect params", async () => {
        expect(async () => await moov.cards.list({ accountID: "invalid-account-id" })).toThrowError(
          /API error occurred: Status 403/,
        );
      });
    });

    describe("Updating cards", () => {
      test("should be able to update a card", async () => {
        const { result } = await moov.cards.update({
          accountID,
          cardID: card.cardID!,
          updateCard: {
            expiration: {
              month: "01",
              year: "45",
            },
          },
        });
        expect(result).toBeDefined();
        expect(result.cardID).toEqual(card.cardID!);
        expect(result.expiration.month).toEqual("01");
        expect(result.expiration.year).toEqual("45");
      });

      test("updating should fail when I pass incorrect params", async () => {
        expect(
          async () =>
            await moov.cards.update({
              accountID,
              cardID: card.cardID!,
              updateCard: {
                expiration: {
                  month: "01",
                  year: "2045",
                },
              },
            }),
        ).toThrowError(/API error occurred:.*\"expiration\":\"year: the length must be exactly 2.\"/i);
      });
    });

    describe("Disabling cards", () => {
      test("should be able to disable a card", async () => {
        const result = await moov.cards.disable({
          accountID,
          cardID: card.cardID!,
        });
        expect(result).toBeDefined();
      });

      test("disabling should fail when I pass incorrect params", async () => {
        expect(async () => await moov.cards.disable({ accountID, cardID: "invalid-card-id" })).toThrowError(
          /API error occurred: Status 404/i,
        );
      });
    });
  });
});
