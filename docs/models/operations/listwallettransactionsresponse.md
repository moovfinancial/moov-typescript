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
      walletID: "519cef16-0aea-46cf-90d5-b33cccc1e639",
      transactionID: "bbdfc2c9-9522-40cb-9db2-b81eea631cf0",
      transactionType: "auto-sweep",
      sourceType: "issuing-card-transaction",
      sourceID: "960fec6b-b509-4fb3-a868-b7eb597c090f",
      status: "completed",
      memo: "<value>",
      createdOn: new Date("2023-05-02T07:50:24.071Z"),
      currency: "USD",
      grossAmount: 341695,
      grossAmountDecimal: "<value>",
      fee: 634079,
      feeDecimal: "<value>",
      netAmount: 972889,
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