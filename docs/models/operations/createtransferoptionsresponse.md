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
          status: "errored",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "checking",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2026-02-19T23:59:30.429Z"),
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
          status: "errored",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "checking",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2026-02-19T23:59:30.429Z"),
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