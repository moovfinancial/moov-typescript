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
      link: "https://slimy-pacemaker.com/",
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
        accountID: "1134aadd-c91b-44c5-829e-244c276c7317",
        accountMode: "production",
        displayName: "Bob's Widgets",
      },
      createdOn: new Date("2025-01-21T07:34:15.679Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.OnboardingInvite](../../models/components/onboardinginvite.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |