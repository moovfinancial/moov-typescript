# CreateTransferResponse

## Example Usage

```typescript
import { CreateTransferResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferResponse = {
  headers: {
    "key": [],
  },
  result: {
    transferID: "d835gf30-4b19-4850-a9b2-c0624c41ecb3",
    createdOn: new Date("2025-01-21T21:32:16Z"),
    source: {
      paymentMethodID: "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
      paymentMethodType: "card-payment",
      account: {
        accountID: "7e4b26c2-b399-49ef-8390-50e1ea44d550",
        email: "jules@julesjackson.com",
        displayName: "Jules Jackson",
      },
      card: {
        cardID: "aefd5563-93c6-413c-875e-1bd0ebfc116d",
        fingerprint: "2f5d782ceef1c3bd31ed5...",
        brand: "Visa",
        cardType: "credit",
        lastFourCardNumber: "2000",
        bin: "400020",
        expiration: {
          month: "01",
          year: "28",
        },
        holderName: "Jules Jackson",
        billingAddress: {
          postalCode: "80301",
        },
        cardVerification: {
          cvv: "unavailable",
          addressLine1: "unavailable",
          postalCode: "unavailable",
          accountName: {
            firstName: "unavailable",
            lastName: "unavailable",
            middleName: "unavailable",
            fullName: "unavailable",
          },
        },
        issuer: "Moov Visa Sandbox",
        issuerCountry: "US",
        cardAccountUpdater: {},
        domesticPushToCard: "standard",
        domesticPullFromCard: "supported",
      },
      cardDetails: {
        status: "confirmed",
        dynamicDescriptor: "WhlBdy *Yoga 11-12",
        confirmedOn: new Date("2025-01-21T21:32:16.799681237Z"),
      },
    },
    destination: {
      paymentMethodID: "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
      paymentMethodType: "moov-wallet",
      account: {
        accountID: "34233b72-780c-4a0d-8b08-cbbe23k878f8",
        email: "john@wholebodyfitness.io",
        displayName: "Whole Body Fitness",
      },
      wallet: {
        walletID: "744b2e78-8cc8-4a6a-af42-611e3b844503",
        partnerAccountID: "65b57f28-49e9-4afb-9bf6-7e4fb6444917",
        walletType: "general",
      },
    },
    status: "pending",
    amount: {
      currency: "USD",
      value: 32945,
    },
    description: "Transfer from card to wallet",
    moovFees: [
      {
        accountID: "7e4b26c2-b399-49ef-8390-50e1ea44d550",
        transferParty: "source",
        totalAmount: {
          currency: "USD",
          valueDecimal: "0.1",
        },
        feeIDs: [
          "9d957d33-1a9a-47aa-9460-fe1a90f003dd",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | *operations.CreateTransferResponseResult* | :heavy_check_mark:                        | N/A                                       |