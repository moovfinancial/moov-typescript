# GetWalletTransactionResponse

## Example Usage

```typescript
import { GetWalletTransactionResponse } from "@moovio/sdk/models/operations";

let value: GetWalletTransactionResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    walletID: "87e922e1-2a3d-4672-80c1-a884c620593b",
    transactionID: "78d10829-0762-4771-8ae9-abef7f5be0ee",
    transactionType: "issuing-refund",
    sourceType: "transfer",
    sourceID: "bce7ad11-d7c0-4156-8d8e-61768a0926e2",
    status: "completed",
    memo: "<value>",
    createdOn: new Date("2023-03-08T04:36:01.401Z"),
    currency: "USD",
    grossAmount: 286276,
    grossAmountDecimal: "<value>",
    fee: 77469,
    feeDecimal: "<value>",
    netAmount: 477044,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |