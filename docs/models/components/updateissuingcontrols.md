# UpdateIssuingControls

Mutable spend controls. Each field replaces the entire corresponding value.

## Example Usage

```typescript
import { UpdateIssuingControls } from "@moovio/sdk/models/components";

let value: UpdateIssuingControls = {
  velocityLimits: [
    {
      amount: 10000,
      interval: "per-transaction",
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `velocityLimits`                                                                                                                             | [components.IssuingVelocityLimit](../../models/components/issuingvelocitylimit.md)[]                                                         | :heavy_minus_sign:                                                                                                                           | Replaces the entire set of velocity limits. Send an empty array to clear all limits.                                                         |
| `merchantCategoryRestrictions`                                                                                                               | [components.UpdateIssuingControlsMerchantCategoryRestrictions](../../models/components/updateissuingcontrolsmerchantcategoryrestrictions.md) | :heavy_minus_sign:                                                                                                                           | Replaces the merchant category restrictions. Set to `null` to remove.                                                                        |
| `merchantRestrictions`                                                                                                                       | [components.UpdateIssuingControlsMerchantRestrictions](../../models/components/updateissuingcontrolsmerchantrestrictions.md)                 | :heavy_minus_sign:                                                                                                                           | Replaces the merchant restrictions. Set to `null` to remove.                                                                                 |
| `allowedSchedule`                                                                                                                            | [components.UpdateIssuingControlsAllowedSchedule](../../models/components/updateissuingcontrolsallowedschedule.md)                           | :heavy_minus_sign:                                                                                                                           | Replaces the allowed schedule. Set to `null` to remove all schedule restrictions.                                                            |
| `expiresOn`                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                | :heavy_minus_sign:                                                                                                                           | A spend cutoff date and time. Set to `null` to remove the cutoff.                                                                            |