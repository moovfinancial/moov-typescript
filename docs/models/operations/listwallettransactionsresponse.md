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
      walletID: "eada5456-dbde-4dff-9569-b7ca9225f1f7",
      transactionID: "dd2c8519-cef1-460a-8ea6-cf0d5b33cccc",
      transactionType: "top-up",
      sourceType: "issuing-card-transaction",
      sourceID: "395bbdfc-2c99-4522-b0cb-db2b81eea631",
      status: "failed",
      memo: "<value>",
      createdOn: new Date("2023-01-16T09:19:29.234Z"),
      currency: "USD",
      grossAmount: 479361,
      grossAmountDecimal: "<value>",
      fee: 106035,
      feeDecimal: "<value>",
      netAmount: 418539,
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