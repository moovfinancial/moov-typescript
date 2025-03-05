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
    issuedCardID: "246c82ca-0113-44aa-bddc-91b4c529e244",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Camylle",
      lastName: "Hodkiewicz",
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
    createdOn: new Date("2024-04-26T14:18:23.756Z"),
    pan: "<value>",
    cvv: "204",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.FullIssuedCard](../../models/components/fullissuedcard.md) | :heavy_check_mark:                                                     | N/A                                                                    |