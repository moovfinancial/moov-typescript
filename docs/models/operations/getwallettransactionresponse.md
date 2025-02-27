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
    walletID: "a183fb13-15d1-4249-bfd3-b87e922e12a3",
    transactionID: "6720c1a8-84c6-4205-893b-178d10829076",
    transactionType: "issuing-transaction",
    sourceType: "issuing-card-transaction",
    sourceID: "1ae9abef-7f5b-4e0e-8e36-1bce7ad11d7c",
    status: "pending",
    memo: "<value>",
    createdOn: new Date("2024-02-08T16:54:04.413Z"),
    currency: "USD",
    grossAmount: 397657,
    grossAmountDecimal: "<value>",
    fee: 833758,
    feeDecimal: "<value>",
    netAmount: 509783,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |