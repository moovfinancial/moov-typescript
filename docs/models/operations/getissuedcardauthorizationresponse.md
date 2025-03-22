# GetIssuedCardAuthorizationResponse

## Example Usage

```typescript
import { GetIssuedCardAuthorizationResponse } from "@moovio/sdk/models/operations";

let value: GetIssuedCardAuthorizationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    authorizationID: "ef04e048-b343-478e-8cb9-514333665e32",
    issuedCardID: "e3958ad8-5292-4d0d-b37b-c67054642f6a",
    fundingWalletID: "92cc6863-cba7-4744-bdd0-b5e35b1ba4be",
    network: "shazam",
    authorizedAmount: "-14.89",
    status: "pending",
    merchantData: {
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2025-09-05T00:05:28.311Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |