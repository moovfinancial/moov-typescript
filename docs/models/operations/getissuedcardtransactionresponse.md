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
    cardTransactionID: "4adf0d15-b50b-4876-9ae6-653d38c0861d",
    issuedCardID: "5a7585cc-cc8d-44e6-9820-10cc692d95db",
    fundingWalletID: "53275042-c722-4d88-87b8-114f18e1390e",
    amount: "-14.89",
    authorizedOn: new Date("2023-03-08T05:27:12.001Z"),
    merchantData: {
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2023-07-30T16:24:41.039Z"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.IssuedCardTransaction](../../models/components/issuedcardtransaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |