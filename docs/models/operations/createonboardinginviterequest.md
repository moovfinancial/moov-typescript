# CreateOnboardingInviteRequest

## Example Usage

```typescript
import { CreateOnboardingInviteRequest } from "moov-sdk/models/operations";

let value: CreateOnboardingInviteRequest = {
  onboardingInviteRequest: {
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
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                           | [components.Versions](../../models/components/versions.md)                               | :heavy_minus_sign:                                                                       | Specify an API version.                                                                  |
| `onboardingInviteRequest`                                                                | [components.OnboardingInviteRequest](../../models/components/onboardinginviterequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |