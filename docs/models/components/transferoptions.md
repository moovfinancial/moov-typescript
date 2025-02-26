# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "161ac719-363a-4ddc-9883-08b6a556d3f4",
      paymentMethodType: "ach-debit-fund",
      bankAccount: {
        bankAccountID: "476540c7-432f-4944-9fa2-c6a921c3b0f8",
        fingerprint: "<value>",
        status: "pending",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "general-ledger",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-01-27T08:32:29.912Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "8bf61079-5722-4e28-a5f1-34512d72eb4e",
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