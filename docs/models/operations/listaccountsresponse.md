# ListAccountsResponse

## Example Usage

```typescript
import { ListAccountsResponse } from "@moovio/sdk/models/operations";

let value: ListAccountsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      accountID: "53ca67ea-6fd3-423f-9544-ce2404159d33",
      mode: "sandbox",
      accountType: "business",
      displayName: "Whole Body Fitness LLC",
      profile: {
        business: {
          legalBusinessName: "Whole Body Fitness LLC",
          ownersProvided: false,
        },
      },
      verification: {
        verificationStatus: "unverified",
        status: "unverified",
      },
      settings: {
        cardPayment: {
          statementDescriptor: "Whole Body Fitness LLC",
        },
        achPayment: {
          companyName: "Whole Body Fitne",
        },
      },
      createdOn: new Date("2024-12-16T17:55:20.557151867Z"),
      updatedOn: new Date("2024-12-16T17:55:20.557151867Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Account](../../models/components/account.md)[] | :heavy_check_mark:                                         | N/A                                                        |