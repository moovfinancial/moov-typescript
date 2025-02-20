# GetIssuedCardTransactionResponse

## Example Usage

```typescript
import { GetIssuedCardTransactionResponse } from "@moovio/sdk/models/operations";

let value: GetIssuedCardTransactionResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    cardTransactionID: "8c0861d6-5a75-485c-9ccc-8d4e682010cc",
    issuedCardID: "92d95db6-5327-4504-82c7-22d887b8114f",
    fundingWalletID: "8e1390e1-039f-4787-b84b-b8da7d91cd0c",
    amount: "-14.89",
    authorizedOn: new Date("2025-05-16T15:26:37.196Z"),
    merchantData: {
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2024-03-12T01:49:16.383Z"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |