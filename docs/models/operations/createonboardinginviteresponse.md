# CreateOnboardingInviteResponse

## Example Usage

```typescript
import { CreateOnboardingInviteResponse } from "@moovio/sdk/models/operations";

let value: CreateOnboardingInviteResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    code: "N1IA5eWYNh",
    link: "https://both-surface.com/",
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
      accountID: "9c2abb0a-24e0-4d80-acd7-ce9e6ccb6734",
      accountMode: "production",
      displayName: "Bob's Widgets",
    },
    createdOn: new Date("2023-12-23T16:20:25.002Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.OnboardingInvite](../../models/components/onboardinginvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |