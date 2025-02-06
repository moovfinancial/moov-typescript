# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "d5d64c1e-6539-4f53-a313-ab6f2b6332f6",
      paymentMethodType: "ach-debit-fund",
      bankAccount: {
        bankAccountID: "6cc0afd4-9798-4b56-b904-72b1bdaeb3d3",
        fingerprint: "<value>",
        status: "verificationFailed",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "general-ledger",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-03-07T09:08:30.448Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "7298aae8-0e1b-431f-9007-92bf71dfd9d6",
      paymentMethodType: "ach-debit-collect",
      bankAccount: {
        bankAccountID: "15ed9e6f-f90e-4ef7-841e-bccd15dbcc1d",
        fingerprint: "<value>",
        status: "errored",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "checking",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-08-03T17:06:34.541Z"),
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