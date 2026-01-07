# ListWalletTransactionsResponse

## Example Usage

```typescript
import { ListWalletTransactionsResponse } from "@moovio/sdk/models/operations";

let value: ListWalletTransactionsResponse = {
  headers: {},
  result: [
    {
      walletID: "bf2e0f67-eab4-4ed2-9bb5-da00d2c8a412",
      transactionID: "d65abf53-1715-4832-b1f5-332194720175",
      transactionType: "issuing-transaction-adjustment",
      sourceType: "issuing-card-transaction",
      sourceID: "6a489f31-f558-4915-aed8-fd37dbe6f502",
      status: "failed",
      memo: "<value>",
      createdOn: new Date("2026-11-13T21:00:18.434Z"),
      currency: "USD",
      grossAmount: 920816,
      grossAmountDecimal: "<value>",
      fee: 17555,
      feeDecimal: "<value>",
      netAmount: 540343,
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