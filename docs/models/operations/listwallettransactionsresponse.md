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
      walletID: "c847ca18-3fb1-4315-bd12-49fd3b87e922",
      transactionID: "12a3d672-0c1a-4884-8c62-0593b178d108",
      transactionType: "issuing-auth-release",
      sourceType: "transfer",
      sourceID: "762771ae-9abe-4f7f-85be-0ee361bce7ad",
      status: "pending",
      memo: "<value>",
      createdOn: new Date("2025-06-15T07:00:27.081Z"),
      currency: "USD",
      grossAmount: 441969,
      grossAmountDecimal: "<value>",
      fee: 802870,
      feeDecimal: "<value>",
      netAmount: 150,
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