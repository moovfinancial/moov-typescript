# CreateClearingSimulationResponse

## Example Usage

```typescript
import { CreateClearingSimulationResponse } from "@moovio/sdk/models/operations";

let value: CreateClearingSimulationResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    authorizationID: "<id>",
    issuedCardID: "<id>",
    fundingWalletID: "<id>",
    network: "discover",
    authorizedAmount: "-14.89",
    status: "canceled",
    merchantData: {
      networkID: "<id>",
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2026-08-31T00:18:27.389Z"),
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `headers`                                           | Record<string, *string*[]>                          | :heavy_check_mark:                                  | N/A                                                 |
| `result`                                            | *operations.CreateClearingSimulationResponseResult* | :heavy_check_mark:                                  | N/A                                                 |