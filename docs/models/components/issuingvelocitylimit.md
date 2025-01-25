# IssuingVelocityLimit

## Example Usage

```typescript
import { IssuingVelocityLimit } from "@moovio/sdk/models/components";

let value: IssuingVelocityLimit = {
  amount: 10000,
  interval: "per-transaction",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `amount`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | The maximum amount in cents that can be spent in a given interval.                               | 10000                                                                                            |
| `interval`                                                                                       | [components.IssuingIntervalLimit](../../models/components/issuingintervallimit.md)               | :heavy_check_mark:                                                                               | Specifies the time frame for the velocity limit. Currently supports only per-transaction limits. |                                                                                                  |