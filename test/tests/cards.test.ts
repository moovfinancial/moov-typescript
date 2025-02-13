import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { moov } from "../setup";
import { createAccount, createBankAccount, createCard } from "../utils/utils";
import type { Card } from "../../models/components";
import { sleep } from "bun";

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
								postalCode: "12345",
								stateOrProvince: "CA",
							},
						},
					}),
			).toThrow(
				expect.objectContaining({
					expiration: "year: the length must be exactly 2.",
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
			expect(result.cardType).toEqual("credit");
			expect(result.brand).toEqual("Visa");
			expect(result.lastFourCardNumber).toEqual("1111");
			card = result;
		});
	});
	describe("Card dependent tests", () => {
		describe("Getting and listing cards", () => {
			// Create a card if it doesn't exist yet
			beforeEach(async () => {
				const result = await createCard(accountID);
				card = result.card;
				cardNumber = result.cardNumber;
			});

			test("should be able to retrieve a card", async () => {
				const { result } = await moov.cards.get({
					accountID,
					cardID: card.cardID!,
				});
				expect(result).toBeDefined();
				expect(result.cardID).toEqual(card.cardID!);
				expect(result.cardType).toEqual(card.cardType!);
				expect(result.brand).toEqual(card.brand!);
				expect(result.lastFourCardNumber).toEqual(cardNumber.slice(-4));
			});

			test("should be able to list cards", async () => {
				const { result } = await moov.cards.list({
					accountID,
				});
			});
		});
	});
});
