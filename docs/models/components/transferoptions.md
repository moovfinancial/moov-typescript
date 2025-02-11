# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "41ebccd1-5dbc-4c1d-b1d5-3317cafcb616",
      paymentMethodType: "ach-credit-same-day",
      bankAccount: {
        bankAccountID: "51891c89-0371-4b35-804d-8b339331c1ed",
        fingerprint: "<value>",
        status: "errored",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "loan",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2023-03-21T05:06:33.575Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "70492161-ac71-4936-93ad-dc88308b6a55",
      paymentMethodType: "ach-debit-fund",
      bankAccount: {
        bankAccountID: "d3f47476-540c-4743-82f9-44fa2c6a921c",
        fingerprint: "<value>",
        status: "pending",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "loan",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-07-02T12:53:40.926Z"),
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