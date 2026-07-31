# IssuedControls

Spend controls applied to an issued card, including velocity runtime state.

## Example Usage

```typescript
import { IssuedControls } from "@moovio/sdk/models/components";

let value: IssuedControls = {
  velocityLimits: [
    {
      amount: 10000,
      interval: "monthly",
    },
  ],
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `singleUse`                                                                                                               | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Indicates if the card is single-use. If true, the card closes after the first authorization.                              |
| `velocityLimits`                                                                                                          | [components.IssuedVelocityLimit](../../models/components/issuedvelocitylimit.md)[]                                        | :heavy_minus_sign:                                                                                                        | The spending limits per time interval, including current runtime state.                                                   |
| `merchantCategoryRestrictions`                                                                                            | [components.MerchantCategoryRestrictions](../../models/components/merchantcategoryrestrictions.md)                        | :heavy_minus_sign:                                                                                                        | Restricts card usage by merchant category. When not set, all categories are allowed.                                      |
| `merchantRestrictions`                                                                                                    | [components.MerchantRestrictions](../../models/components/merchantrestrictions.md)                                        | :heavy_minus_sign:                                                                                                        | Restricts card usage to specific merchants, or blocks specific merchants.                                                 |
| `allowedSchedule`                                                                                                         | [components.IssuedControlsAllowedSchedule](../../models/components/issuedcontrolsallowedschedule.md)                      | :heavy_minus_sign:                                                                                                        | Limits card usage to specific days and times.                                                                             |
| `expiresOn`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                             | :heavy_minus_sign:                                                                                                        | A spend cutoff date and time. When set, all authorizations after this datetime are declined regardless of other controls. |