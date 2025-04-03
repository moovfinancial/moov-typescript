# OnboardingPartnerAccount

The account that created the onboarding invite.

## Example Usage

```typescript
import { OnboardingPartnerAccount } from "@moovio/sdk/models/components";

let value: OnboardingPartnerAccount = {
  accountID: "3c0efe82-1987-41db-9d69-7f6d9565ca1c",
  accountMode: "production",
  displayName: "Bob's Widgets",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The account ID of the partner that created the invite.             |                                                                    |
| `accountMode`                                                      | [components.Mode](../../models/components/mode.md)                 | :heavy_check_mark:                                                 | The operating mode for an account.                                 | production                                                         |
| `displayName`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The name of the Moov account used to create the onboarding invite. | Bob's Widgets                                                      |