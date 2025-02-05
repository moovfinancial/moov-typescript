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
    walletID: "7062b080-bf01-48f6-99ce-2eac483d3860",
    transactionID: "c847ca18-3fb1-4315-bd12-49fd3b87e922",
    transactionType: "auto-sweep",
    sourceType: "transfer",
    sourceID: "a3d6720c-1a88-44c6-8205-93b178d10829",
    status: "completed",
    memo: "<value>",
    createdOn: new Date("2024-03-04T06:01:30.407Z"),
    currency: "USD",
    grossAmount: 156247,
    grossAmountDecimal: "<value>",
    fee: 467847,
    feeDecimal: "<value>",
    netAmount: 477169,
    netAmountDecimal: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.WalletTransaction](../../models/components/wallettransaction.md) | :heavy_check_mark:                                                           | N/A                                                                          |