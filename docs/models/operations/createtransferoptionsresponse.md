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
        paymentMethodID: "3b24130b-6674-4593-a792-486b37d2e77a",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "d224f18c-dff8-438b-a74d-d898ce0f565d",
          fingerprint: "<value>",
          status: "new",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "checking",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-05-30T05:05:34.087Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "1a382cf1-d708-47e5-9c26-8233bf282006",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "a6319360-3a1a-4dd2-b7eb-d67e6a6b9789",
          fingerprint: "<value>",
          status: "pending",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "loan",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2023-03-16T03:46:29.479Z"),
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