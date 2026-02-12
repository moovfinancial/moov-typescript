# CreateTransferOptionsResponse

## Example Usage

```typescript
import { CreateTransferOptionsResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    sourceOptions: [
      {
        paymentMethodID: "<id>",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "<id>",
          fingerprint: "<value>",
          status: "verified",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "loan",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2026-10-09T09:15:43.090Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "<id>",
        paymentMethodType: "rtp-credit",
        bankAccount: {
          bankAccountID: "<id>",
          fingerprint: "<value>",
          status: "verified",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "loan",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2026-10-09T09:15:43.090Z"),
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