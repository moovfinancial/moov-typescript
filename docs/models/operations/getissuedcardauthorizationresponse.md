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
    authorizationID: "828c6989-723e-4bf0-95f7-992b0883cef0",
    issuedCardID: "e048b343-78ec-4b95-9143-33665e321e39",
    fundingWalletID: "8ad85292-d0d3-47bc-b670-54642f6ae92c",
    network: "shazam",
    authorizedAmount: "-14.89",
    status: "canceled",
    merchantData: {
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
    createdOn: new Date("2024-04-10T16:12:05.280Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.IssuedCardAuthorization](../../models/components/issuedcardauthorization.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |