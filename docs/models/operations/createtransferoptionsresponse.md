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
        paymentMethodID: "c03d0c1d-c367-4633-ab24-130b66745937",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "2486b37d-2e77-4a8d-9224-f18cdff838b7",
          fingerprint: "<value>",
          status: "errored",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "general-ledger",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2024-10-21T07:26:03.546Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "ce0f565d-b260-4c31-8a38-2cf1d7087e5c",
        paymentMethodType: "rtp-credit",
        bankAccount: {
          bankAccountID: "68233bf2-8200-466a-b631-93603a1add27",
          fingerprint: "<value>",
          status: "pending",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "savings",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2024-06-30T22:01:44.842Z"),
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