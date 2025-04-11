export const MockAsyncTransfer = `{
  "createdOn": "2025-01-21T21:32:16Z",
  "transferID": "d835gf30-4b19-4850-a9b2-c0624c41ecb3"
}`;

export const MockCreatedTransfer = `{
	"amount": {
		"currency": "USD",
		"value": 32945
	},
	"createdOn": "2025-01-21T21:32:16Z",
	"description": "Transfer from card to wallet",
	"destination": {
		"account": {
			"accountID": "34233b72-780c-4a0d-8b08-cbbe23k878f8",
			"displayName": "Whole Body Fitness",
			"email": "john@wholebodyfitness.io"
		},
		"paymentMethodID": "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
		"paymentMethodType": "moov-wallet",
		"wallet": {
			"walletID": "744b2e78-8cc8-4a6a-af42-611e3b844503"
		}
	},
	"source": {
		"account": {
			"accountID": "7e4b26c2-b399-49ef-8390-50e1ea44d550",
			"displayName": "Jules Jackson",
			"email": "jules@julesjackson.com"
		},
		"card": {
			"billingAddress": {
				"postalCode": "80301"
			},
			"bin": "400020",
			"brand": "Visa",
			"cardAccountUpdater": {},
			"cardID": "aefd5563-93c6-413c-875e-1bd0ebfc116d",
			"cardType": "credit",
			"cardVerification": {
				"accountName": {
					"firstName": "unavailable",
					"fullName": "unavailable",
					"lastName": "unavailable",
					"middleName": "unavailable"
				},
				"addressLine1": "unavailable",
				"cvv": "unavailable",
				"postalCode": "unavailable"
			},
			"domesticPullFromCard": "supported",
			"domesticPushToCard": "standard",
			"expiration": {
				"month": "01",
				"year": "28"
			},
			"fingerprint": "2f5d782ceef1c3bd31ed5...",
			"holderName": "Jules Jackson",
			"issuer": "Moov Visa Sandbox",
			"issuerCountry": "US",
			"lastFourCardNumber": "2000"
		},
		"cardDetails": {
			"confirmedOn": "2025-01-21T21:32:16.799681237Z",
			"dynamicDescriptor": "WhlBdy *Yoga 11-12",
			"status": "confirmed"
		},
		"paymentMethodID": "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
		"paymentMethodType": "card-payment"
	},
	"status": "pending",
	"transferID": "d835gf30-4b19-4850-a9b2-c0624c41ecb3"
}`;

// The examples for these are the same 😬
export const MockTransfer = MockCreatedTransfer;
