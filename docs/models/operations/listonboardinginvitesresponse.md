# ListOnboardingInvitesResponse

## Example Usage

```typescript
import { ListOnboardingInvitesResponse } from "@moovio/sdk/models/operations";

let value: ListOnboardingInvitesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      code: "N1IA5eWYNh",
      link: "https://wasteful-reach.org/",
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
        accountID: "c13d0ba7-949b-462f-bf10-5f63f3a1a246",
        accountMode: "production",
        displayName: "Bob's Widgets",
      },
      createdOn: new Date("2024-08-31T10:53:14.069Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.OnboardingInvite](../../models/components/onboardinginvite.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |