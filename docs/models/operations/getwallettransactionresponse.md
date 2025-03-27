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
    walletID: "ae04b7f7-2e0c-4073-9f60-c5a674c70f77",
    transactionID: "a6be7a4a-a82b-456d-8a19-1a6dcf42295e",
    transactionType: "refund",
    sourceType: "issuing-authorization",
    sourceID: "a98b8e8e-cde3-45e2-a712-9668a75376d0",
    status: "canceled",
    memo: "<value>",
    createdOn: new Date("2025-12-18T17:37:50.504Z"),
    currency: "USD",
    grossAmount: 885365,
    grossAmountDecimal: "<value>",
    fee: 517567,
    feeDecimal: "<value>",
    netAmount: 288515,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |