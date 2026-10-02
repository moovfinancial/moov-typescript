# ListWalletTransactionsResponse

## Example Usage

```typescript
import { ListWalletTransactionsResponse } from "@moovio/sdk/models/operations";

let value: ListWalletTransactionsResponse = {
  headers: {},
  result: [
    {
      walletID: "<id>",
      transactionID: "<id>",
      transactionType: "refund-failure",
      sourceType: "residual",
      sourceID: "<id>",
      status: "pending",
      memo: "<value>",
      createdOn: new Date("2026-09-29T16:49:16.451Z"),
      currency: "USD",
      grossAmount: 58559,
      grossAmountDecimal: "<value>",
      fee: 952025,
      feeDecimal: "<value>",
      netAmount: 409950,
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