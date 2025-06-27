# EstimatedActivity

## Example Usage

```typescript
import { EstimatedActivity } from "@moovio/sdk/models/components";

let value: EstimatedActivity = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `averageTransactionAmount`                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `maximumTransactionAmount`                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `monthlyVolumeRange`                                                               | [components.MonthlyVolumeRange](../../models/components/monthlyvolumerange.md)     | :heavy_minus_sign:                                                                 | The low value in each range is included. The high value in each range is excluded. |