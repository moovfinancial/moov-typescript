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
          bankAccountID: "9b467f1c-9448-436e-ae4c-b66a00f95edd",
          fingerprint: "<value>",
          status: "verified",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "general-ledger",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-10-01T01:34:04.625Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "44f0b743-367e-4c6d-a203-1d80a5bd587d",
        paymentMethodType: "rtp-credit",
        bankAccount: {
          bankAccountID: "9b467f1c-9448-436e-ae4c-b66a00f95edd",
          fingerprint: "<value>",
          status: "verified",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "general-ledger",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-10-01T01:34:04.625Z"),
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