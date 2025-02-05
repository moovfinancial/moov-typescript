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
    cardTransactionID: "a60b2c49-927d-4f02-a90c-9a991375ca4f",
    issuedCardID: "de360298-7b46-4f9a-8b76-7d5e04ee33c5",
    fundingWalletID: "34d72551-db6b-45e8-a175-05f4b22407f4",
    amount: "-14.89",
    authorizedOn: new Date("2025-07-14T07:58:13.561Z"),
    merchantData: {
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2025-10-26T15:27:03.943Z"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |