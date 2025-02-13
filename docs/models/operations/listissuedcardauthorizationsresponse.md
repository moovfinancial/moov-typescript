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
      authorizationID: "74c70f77-5a6b-4e7a-b4aa-82b56da191a6",
      issuedCardID: "cf42295e-1c7a-498b-98e8-ecde35e27129",
      fundingWalletID: "68a75376-d099-4fe8-9403-dfb99a055f0b",
      network: "discover",
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
      createdOn: new Date("2023-05-21T02:56:06.369Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |