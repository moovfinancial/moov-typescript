# GetIssuedCardAuthorizationResponse

## Example Usage

```typescript
import { GetIssuedCardAuthorizationResponse } from "@moovio/sdk/models/operations";

let value: GetIssuedCardAuthorizationResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    authorizationID: "<id>",
    issuedCardID: "<id>",
    fundingWalletID: "<id>",
    network: "shazam",
    authorizedAmount: "-14.89",
    status: "cleared",
    merchantData: {
      networkID: "<id>",
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2025-08-13T06:00:53.535Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |