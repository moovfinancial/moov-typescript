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
    issuedCardID: "2ed44adc-459f-4604-b157-4446daf071c6",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Keyshawn",
      lastName: "Vandervort",
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
    createdOn: new Date("2025-01-20T23:19:06.079Z"),
    pan: "<value>",
    cvv: "576",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.FullIssuedCard](../../models/components/fullissuedcard.md) | :heavy_check_mark:                                                     | N/A                                                                    |