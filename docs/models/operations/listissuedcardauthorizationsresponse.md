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
      authorizationID: "d099fe84-03df-4b99-9a05-5f0b61520a00",
      issuedCardID: "2751aaad-0087-4f56-bd91-086ba00d29ff",
      fundingWalletID: "ee1d6081-175e-45d0-af04-0f05a503b6db",
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
      createdOn: new Date("2024-07-24T15:46:43.780Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |