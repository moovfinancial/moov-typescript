# ListWalletTransactionsResponse

## Example Usage

```typescript
import { ListWalletTransactionsResponse } from "@moovio/sdk/models/operations";

let value: ListWalletTransactionsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      walletID: "3868b7eb-597c-4090-bf84-15af134c1e3b",
      transactionID: "e3b56825-f25c-4323-af66-c12b5b09821e",
      transactionType: "ach-reversal",
      sourceType: "transfer",
      sourceID: "a797edff-b0f7-40f9-a706-2b080bf018f6",
      status: "failed",
      memo: "<value>",
      createdOn: new Date("2025-10-14T00:00:36.097Z"),
      currency: "USD",
      grossAmount: 177016,
      grossAmountDecimal: "<value>",
      fee: 911426,
      feeDecimal: "<value>",
      netAmount: 626424,
      netAmountDecimal: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.WalletTransaction](../../models/components/wallettransaction.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |