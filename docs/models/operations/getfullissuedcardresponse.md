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
    issuedCardID: "a30c51d8-f9f8-42f1-92fc-d7640053a2ef",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Amelia",
      lastName: "Gleichner",
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
    createdOn: new Date("2025-08-31T13:01:36.341Z"),
    pan: "<value>",
    cvv: "921",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.FullIssuedCard](../../models/components/fullissuedcard.md) | :heavy_check_mark:                                                     | N/A                                                                    |