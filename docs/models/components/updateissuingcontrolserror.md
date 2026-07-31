# UpdateIssuingControlsError

## Example Usage

```typescript
import { UpdateIssuingControlsError } from "@moovio/sdk/models/components";

let value: UpdateIssuingControlsError = {
  merchantCategoryRestrictions: {
    categories: {
      "0": "first element failed validation...",
    },
    customMCCs: {
      "0": "first element failed validation...",
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