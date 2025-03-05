# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "b6a556d3-f474-4765-940c-7432f944fa2c",
      paymentMethodType: "rtp-credit",
      bankAccount: {
        bankAccountID: "a921c3b0-f86c-46a0-ae8b-f610795722e2",
        fingerprint: "<value>",
        status: "verified",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "checking",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-09-10T07:38:30.814Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "512d72eb-4ebf-4194-924b-a511975174db",
      paymentMethodType: "ach-debit-collect",
      bankAccount: {
        bankAccountID: "e8d9f1c0-1cb9-4e60-b1b4-973b0ab14e79",
        fingerprint: "<value>",
        status: "errored",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "general-ledger",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-08-15T06:07:54.440Z"),
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