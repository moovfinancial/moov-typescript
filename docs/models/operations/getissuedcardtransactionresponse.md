# GetIssuedCardTransactionResponse

## Example Usage

```typescript
import { GetIssuedCardTransactionResponse } from "@moovio/sdk/models/operations";

let value: GetIssuedCardTransactionResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    cardTransactionID: "eadb986d-4803-488d-8e4a-9fec078506c3",
    issuedCardID: "a4e9261a-1342-4287-8c1e-d2f8e46b02c5",
    fundingWalletID: "e5d6c0de-97a0-4b92-a46e-876b717135ac",
    amount: "-14.89",
    authorizedOn: new Date("2026-10-09T03:03:39.072Z"),
    merchantData: {
      networkID: "<id>",
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2024-10-15T09:50:12.324Z"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |