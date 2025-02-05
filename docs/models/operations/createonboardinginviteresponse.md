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
    link: "https://elegant-possession.com",
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
      accountID: "72d9f2db-60b1-4cc3-8fc9-b71a6f12e735",
      accountMode: "production",
      displayName: "Bob's Widgets",
    },
    createdOn: new Date("2024-11-25T18:23:53.239Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.OnboardingInvite](../../models/components/onboardinginvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |