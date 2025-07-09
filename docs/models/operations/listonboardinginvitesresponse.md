# ListOnboardingInvitesResponse

## Example Usage

```typescript
import { ListOnboardingInvitesResponse } from "@moovio/sdk/models/operations";

let value: ListOnboardingInvitesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [],
  },
  result: [
    {
      code: "N1IA5eWYNh",
      link: "https://gaseous-depot.net",
      scopes: [
        "accounts.read",
      ],
      capabilities: [
        "transfers",
      ],
      feePlanCodes: [
        "merchant-direct",
      ],
      prefill: {
        accountType: "business",
        profile: {
          business: {
            legalBusinessName: "Whole Body Fitness LLC",
          },
        },
      },
      partner: {
        accountID: "c6812db5-460a-4d4b-b5f0-8944e7d44461",
        accountMode: "production",
        displayName: "Bob's Widgets",
      },
      createdOn: new Date("2024-12-23T04:04:56.474Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.OnboardingInvite](../../models/components/onboardinginvite.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |