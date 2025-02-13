# CreateTransferOptionsResponse

## Example Usage

```typescript
import { CreateTransferOptionsResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sourceOptions: [
      {
        paymentMethodID: "6b37d2e7-7a8d-4224-af18-cdff838b74dd",
        paymentMethodType: "rtp-credit",
        bankAccount: {
          bankAccountID: "98ce0f56-5db2-460c-931a-382cf1d7087e",
          fingerprint: "<value>",
          status: "pending",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "savings",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2024-08-14T03:17:41.400Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "33bf2820-066a-4631-9936-03a1add27ebd",
        paymentMethodType: "ach-debit-fund",
        bankAccount: {
          bankAccountID: "7e6a6b97-89ea-4bf1-835f-39144b1c4b56",
          fingerprint: "<value>",
          status: "new",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "general-ledger",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2023-04-11T23:24:18.548Z"),
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.TransferOptions](../../models/components/transferoptions.md) | :heavy_check_mark:                                                       | N/A                                                                      |