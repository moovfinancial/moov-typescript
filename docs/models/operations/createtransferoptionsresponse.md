# CreateTransferOptionsResponse

## Example Usage

```typescript
import { CreateTransferOptionsResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsResponse = {
  headers: {},
  result: {
    sourceOptions: [
      {
        paymentMethodID: "8a0652ec-9a9f-4a34-85b0-3c2d5c8eaf23",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "844f0b74-3367-4ec6-bd20-31d80a5bd587",
          fingerprint: "<value>",
          status: "pending",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "checking",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-05-13T19:17:44.414Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "13958078-06c5-489f-8acd-0aaf391c09eb",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "844f0b74-3367-4ec6-bd20-31d80a5bd587",
          fingerprint: "<value>",
          status: "pending",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "checking",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-05-13T19:17:44.414Z"),
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