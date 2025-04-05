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
      link: "https://shallow-wriggler.biz/",
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
        accountID: "3bacf10a-0c08-4a61-a72f-f3ed654ba256",
        accountMode: "production",
        displayName: "Bob's Widgets",
      },
      createdOn: new Date("2024-10-29T18:23:00.475Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.OnboardingInvite](../../models/components/onboardinginvite.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |