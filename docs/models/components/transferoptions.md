# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "1bea9b34-d19e-4121-91ca-369b55620974",
      paymentMethodType: "pull-from-card",
      card: {
        cardID: "01234567-89ab-cdef-0123-456789abcdef",
        fingerprint:
          "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
        brand: "Visa",
        cardType: "credit",
        lastFourCardNumber: "<value>",
        bin: "<value>",
        expiration: {
          month: "01",
          year: "21",
        },
        billingAddress: {
          addressLine1: "123 Main Street",
          addressLine2: "Apt 302",
          city: "Boulder",
          stateOrProvince: "CO",
          postalCode: "80301",
          country: "US",
        },
        cardVerification: {
          cvv: "match",
          addressLine1: "match",
          postalCode: "match",
          accountName: {
            firstName: "match",
            lastName: "match",
            middleName: "match",
            fullName: "match",
          },
        },
        issuer: "american_express",
        issuerCountry: "<value>",
        cardAccountUpdater: {
          updatedOn: new Date("2024-05-06T12:20:38.184Z"),
          updateType: "number-update",
        },
        domesticPushToCard: "standard",
        domesticPullFromCard: "supported",
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "9e7373ee-0b7d-4950-9e94-18b90e61b768",
      paymentMethodType: "ach-credit-standard",
      bankAccount: {
        bankAccountID: "3ec54cc0-d719-45ec-92c4-4f1bb3e1b0b9",
        fingerprint: "<value>",
        status: "pending",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "general-ledger",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-08-09T21:56:05.990Z"),
      },
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |