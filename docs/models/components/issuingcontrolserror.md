# IssuingControlsError

## Example Usage

```typescript
import { IssuingControlsError } from "@moovio/sdk/models/components";

let value: IssuingControlsError = {
  velocityLimits: {
    "0": {
      amount: "must be no less than 1",
      interval: "must be a valid value",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `velocityLimits`                                                                                             | Record<string, [components.IssuingVelocityLimitError](../../models/components/issuingvelocitylimiterror.md)> | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `merchantCategoryRestrictions`                                                                               | [components.MerchantCategoryRestrictionsError](../../models/components/merchantcategoryrestrictionserror.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `merchantRestrictions`                                                                                       | [components.MerchantRestrictionsError](../../models/components/merchantrestrictionserror.md)                 | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `allowedSchedule`                                                                                            | [components.AllowedScheduleError](../../models/components/allowedscheduleerror.md)                           | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `expiresOn`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |