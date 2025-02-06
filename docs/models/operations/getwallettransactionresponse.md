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
    walletID: "c1a884c6-2059-43b1-a78d-108290762771",
    transactionID: "e9abef7f-5be0-4ee3-961b-ce7ad11d7c01",
    transactionType: "facilitator-fee",
    sourceType: "adjustment",
    sourceID: "8e61768a-0926-4e23-8604-179be7a07d96",
    status: "completed",
    memo: "<value>",
    createdOn: new Date("2025-10-03T21:34:19.414Z"),
    currency: "USD",
    grossAmount: 73894,
    grossAmountDecimal: "<value>",
    fee: 530871,
    feeDecimal: "<value>",
    netAmount: 426323,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |