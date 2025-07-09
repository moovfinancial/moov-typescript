# GetOnboardingInviteResponse

## Example Usage

```typescript
import { GetOnboardingInviteResponse } from "@moovio/sdk/models/operations";

let value: GetOnboardingInviteResponse = {
  headers: {},
  result: {
    code: "N1IA5eWYNh",
    link: "https://decisive-disk.net/",
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
    createdOn: new Date("2023-07-11T10:16:24.410Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.OnboardingInvite](../../models/components/onboardinginvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |