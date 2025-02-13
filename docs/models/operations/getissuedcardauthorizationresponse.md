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
    authorizationID: "ba00d29f-fdee-41d6-8081-175e5d0f040f",
    issuedCardID: "5a503b6d-b91f-4849-bb7a-1dac18b8109c",
    fundingWalletID: "93616d60-2ab3-4c48-b4b6-c7ae683b3bef",
    network: "shazam",
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
    createdOn: new Date("2024-05-16T16:54:40.123Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |