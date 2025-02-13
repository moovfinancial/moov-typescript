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
    issuedCardID: "42d83dc6-da91-4616-a037-921d19c2abb0",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Carlos",
      lastName: "Ward",
    },
    fundingWalletID: "<id>",
    state: "active",
    formFactor: "virtual",
    controls: {
      velocityLimits: [
        {
          amount: 10000,
          interval: "per-transaction",
        },
      ],
    },
    createdOn: new Date("2025-08-02T10:54:37.794Z"),
    pan: "<value>",
    cvv: "507",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.FullIssuedCard](../../models/components/fullissuedcard.md) | :heavy_check_mark:                                                     | N/A                                                                    |