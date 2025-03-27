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
    link: "https://grown-guacamole.info",
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
      accountID: "05b7cafb-82ef-4d11-a5bd-2a217daa64e6",
      accountMode: "production",
      displayName: "Bob's Widgets",
    },
    createdOn: new Date("2023-03-21T03:43:40.209Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.OnboardingInvite](../../models/components/onboardinginvite.md) | :heavy_check_mark:                                                         | N/A                                                                        |