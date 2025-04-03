# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "280f6d44-9c5b-4111-b484-480d91f43db7",
      paymentMethodType: "ach-credit-same-day",
      bankAccount: {
        bankAccountID: "70b45e9c-89cf-4b05-8c0e-a3601832fa04",
        fingerprint: "<value>",
        status: "errored",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "general-ledger",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-07-23T17:16:26.152Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "052c6d8f-75b2-4a0b-8c2e-1bea9b34d19e",
      paymentMethodType: "apple-pay",
      applePay: {
        brand: "Visa",
        cardType: "credit",
        cardDisplayName: "Visa 1256",
        fingerprint:
          "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
        expiration: {
          month: "01",
          year: "21",
        },
        dynamicLastFour: "<value>",
        issuerCountry: "US",
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