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
      authorizationID: "09121ce1-9949-461f-9af2-c6ea202b078c",
      issuedCardID: "030fa003-c68d-4e6c-b32f-aae04b7f72e0",
      fundingWalletID: "073f60c5-a674-4c70-af77-5a6be7a4aa82",
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
      createdOn: new Date("2025-07-22T07:00:34.163Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |