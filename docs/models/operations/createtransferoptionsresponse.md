# CreateTransferOptionsResponse

## Example Usage

```typescript
import { CreateTransferOptionsResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    sourceOptions: [
      {
        paymentMethodID: "8a0652ec-9a9f-4a34-85b0-3c2d5c8eaf23",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "<id>",
          fingerprint: "<value>",
          status: "verificationFailed",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "savings",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2026-11-26T20:14:56.616Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "b743367e-c6d2-4031-8d80-a5bd587da207",
        paymentMethodType: "moov-wallet",
        wallet: {
          walletID: "<id>",
          partnerAccountID: "13958078-06c5-489f-8acd-0aaf391c09eb",
          walletType: "default",
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