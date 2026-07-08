# PushOptions

Delivery options for push-to-card payouts.

## Example Usage

```typescript
import { PushOptions } from "@moovio/sdk/models/components";

let value: PushOptions = {
  allowedSpeeds: [
    "deferred",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedSpeeds`                                                                                                                                                                                         | [components.PushDeliverySpeed](../../models/components/pushdeliveryspeed.md)[]                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                      | Delivery speeds the recipient may choose from for `push-to-card`. Include `instant` to allow immediate<br/>delivery, `deferred` to allow delayed delivery, or both to let the recipient choose at checkout. |
| `deferredBy`                                                                                                                                                                                            | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | Delay before delivering a deferred `push-to-card` payout. Required when `allowedSpeeds` includes `deferred`.<br/>Accepted values are `24h` or `48h`.                                                    |