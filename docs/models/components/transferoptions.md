# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "98aae80e-1b31-4f00-9792-bf71dfd9d671",
      paymentMethodType: "ach-debit-fund",
      bankAccount: {
        bankAccountID: "ed9e6ff9-0eef-4741-9ebc-cd15dbcc1d1d",
        fingerprint: "<value>",
        status: "verified",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "checking",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-06-30T02:18:36.520Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "afcb616d-5189-41c8-a903-71b3504d8b33",
      paymentMethodType: "push-to-card",
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
        issuer: "diners_club",
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
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |