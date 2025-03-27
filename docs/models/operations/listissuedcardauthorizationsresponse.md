# ListIssuedCardAuthorizationsResponse

## Example Usage

```typescript
import { ListIssuedCardAuthorizationsResponse } from "@moovio/sdk/models/operations";

let value: ListIssuedCardAuthorizationsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      authorizationID: "d91086ba-00d2-49ff-8dee-1d6081175e5d",
      issuedCardID: "f040f05a-503b-46db-a91f-849b7a1dac18",
      fundingWalletID: "8109cf93-616d-4602-8ab3-c484b6c7ae68",
      network: "visa",
      authorizedAmount: "-14.89",
      status: "declined",
      merchantData: {
        name: "Whole Body Fitness",
        city: "San Francisco",
        country: "US",
        postalCode: "94107",
        state: "CA",
        mcc: "7298",
      },
      createdOn: new Date("2025-01-26T04:39:38.483Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |