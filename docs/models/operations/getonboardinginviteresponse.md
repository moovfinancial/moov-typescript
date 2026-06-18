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
    grantScopes: [
      "transfers.write",
    ],
    capabilities: [
      "card-issuing",
      "collect-funds",
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
      accountID: "<id>",
      accountMode: "production",
      displayName: "Bob's Widgets",
    },
    createdOn: new Date("2025-08-13T19:11:59.862Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.OnboardingInvite](../../models/components/onboardinginvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |