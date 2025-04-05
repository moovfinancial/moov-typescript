# RequestCardResponse

## Example Usage

```typescript
import { RequestCardResponse } from "@moovio/sdk/models/operations";

let value: RequestCardResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    issuedCardID: "e9cdcc6e-fc33-4f78-97d9-cebd2d8d7b93",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    authorizedUser: {
      firstName: "Pinkie",
      lastName: "Berge",
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
    createdOn: new Date("2025-11-22T05:52:20.340Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.IssuedCard](../../models/components/issuedcard.md) | :heavy_check_mark:                                             | N/A                                                            |