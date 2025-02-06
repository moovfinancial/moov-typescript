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
      walletID: "c2c99522-0cbd-4b2b-981e-ea631cf07169",
      transactionID: "0fec6bb5-09fb-4386-88b7-eb597c090f84",
      transactionType: "dispute-reversal",
      sourceType: "issuing-authorization",
      sourceID: "f134c1e3-bce3-4b56-8825-f25c323f66c1",
      status: "canceled",
      memo: "<value>",
      createdOn: new Date("2023-12-17T08:06:24.932Z"),
      currency: "USD",
      grossAmount: 701679,
      grossAmountDecimal: "<value>",
      fee: 22860,
      feeDecimal: "<value>",
      netAmount: 590360,
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