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
        paymentMethodID: "3d0c1dc3-6763-43b2-9413-0b6674593792",
        paymentMethodType: "moov-wallet",
        wallet: {
          walletID: "86b37d2e-77a8-4d22-b4f1-8cdff838b74d",
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "98ce0f56-5db2-460c-931a-382cf1d7087e",
        paymentMethodType: "rtp-credit",
        bankAccount: {
          bankAccountID: "c268233b-f282-4006-86a6-3193603a1add",
          fingerprint: "<value>",
          status: "verificationFailed",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "general-ledger",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-08-07T13:25:38.279Z"),
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