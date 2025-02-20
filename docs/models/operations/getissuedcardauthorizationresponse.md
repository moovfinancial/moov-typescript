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
    authorizationID: "d0f040f0-5a50-43b6-8db9-1f849b7a1dac",
    issuedCardID: "8b8109cf-9361-46d6-902a-b3c484b6c7ae",
    fundingWalletID: "83b3befc-8d76-4b31-8551-da0828c69897",
    network: "discover",
    authorizedAmount: "-14.89",
    status: "expired",
    merchantData: {
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2025-03-20T01:47:00.397Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |