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
      link: "https://late-scratch.org",
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
        accountID: "9e6ccb67-34a5-4b95-b255-a0da042995c0",
        accountMode: "production",
        displayName: "Bob's Widgets",
      },
      createdOn: new Date("2025-08-31T19:50:37.625Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.OnboardingInvite](../../models/components/onboardinginvite.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |