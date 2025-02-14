# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "1dfd9d67-15ed-49e6-8ff9-0eef741ebccd",
      paymentMethodType: "ach-credit-same-day",
      bankAccount: {
        bankAccountID: "5dbcc1d1-d533-417c-aafc-b616d51891c8",
        fingerprint: "<value>",
        status: "new",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "savings",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-04-25T01:56:50.230Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "3504d8b3-3933-41c1-8ed2-f5e127049216",
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
        issuer: "jcb",
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