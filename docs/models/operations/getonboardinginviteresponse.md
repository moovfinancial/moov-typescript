# GetOnboardingInviteResponse

## Example Usage

```typescript
import { GetOnboardingInviteResponse } from "@moovio/sdk/models/operations";

let value: GetOnboardingInviteResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    code: "N1IA5eWYNh",
    link: "https://creamy-unblinking.org/",
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
      accountID: "105f63f3-a1a2-446c-882c-a01134aaddc9",
      accountMode: "production",
      displayName: "Bob's Widgets",
    },
    createdOn: new Date("2025-01-23T18:32:15.375Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.OnboardingInvite](../../models/components/onboardinginvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |