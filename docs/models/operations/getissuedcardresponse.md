# GetIssuedCardResponse

## Example Usage

```typescript
import { GetIssuedCardResponse } from "@moovio/sdk/models/operations";

let value: GetIssuedCardResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    issuedCardID: "<id>",
    brand: "Visa",
    lastFourCardNumber: "<value>",
    expiration: {
      month: "01",
      year: "21",
    },
    fundingWalletID: "<id>",
    metadata: {
      "optional": "metadata",
    },
    billingAddress: {
      addressLine1: "123 Main Street",
      addressLine2: "Apt 302",
      city: "Boulder",
      stateOrProvince: "CO",
      postalCode: "80301",
      country: "US",
    },
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
    createdOn: new Date("2026-04-12T06:36:51.704Z"),
    updatedOn: new Date("2025-03-14T17:50:56.897Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.IssuedCard](../../models/components/issuedcard.md) | :heavy_check_mark:                                             | N/A                                                            |