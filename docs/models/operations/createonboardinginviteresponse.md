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
    link: "https://similar-pupil.name",
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
      accountID: "424cc681-2db5-4460-9ad4-b5f08944e7d4",
      accountMode: "production",
      displayName: "Bob's Widgets",
    },
    createdOn: new Date("2023-10-25T07:38:09.268Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.OnboardingInvite](../../models/components/onboardinginvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |