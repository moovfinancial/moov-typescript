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
      authorizationID: "e0c073f6-0c5a-4674-ac70-f775a6be7a4a",
      issuedCardID: "82b56da1-91a6-4dcf-a422-95e1c7a98b8e",
      fundingWalletID: "ecde35e2-7129-4668-8a75-376d099fe840",
      network: "visa",
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
      createdOn: new Date("2025-02-07T08:31:50.784Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |