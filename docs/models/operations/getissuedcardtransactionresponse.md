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
    cardTransactionID: "961eadb9-86d4-4803-988d-e4a9fec07850",
    issuedCardID: "c33a4e92-61a1-4342-8287-c1ed2f8e46b0",
    fundingWalletID: "c50e5d6c-0de9-47a0-9b92-46e876b71713",
    amount: "-14.89",
    authorizedOn: new Date("2024-12-22T17:57:07.736Z"),
    merchantData: {
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2025-04-05T04:03:11.262Z"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |