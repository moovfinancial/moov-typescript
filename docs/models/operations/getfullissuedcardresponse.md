# GetFullIssuedCardResponse

## Example Usage

```typescript
import { GetFullIssuedCardResponse } from "@moovio/sdk/models/operations";

let value: GetFullIssuedCardResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    issuedCardID: "44c276c7-3173-4a38-8aee-a30c51d8f9f8",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Vinnie",
      lastName: "Deckow",
    },
    fundingWalletID: "<id>",
    state: "closed",
    formFactor: "virtual",
    controls: {
      velocityLimits: [
        {
          amount: 10000,
          interval: "per-transaction",
        },
      ],
    },
    createdOn: new Date("2025-05-03T08:12:39.015Z"),
    pan: "<value>",
    cvv: "843",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.FullIssuedCard](../../models/components/fullissuedcard.md) | :heavy_check_mark:                                                     | N/A                                                                    |