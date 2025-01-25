# FulfillmentDetails

## Example Usage

```typescript
import { FulfillmentDetails } from "@moovio/sdk/models/components";

let value: FulfillmentDetails = {
  hasPhysicalGoods: false,
  isShippingProduct: false,
  shipmentDurationDays: 700204,
  returnPolicy: "other",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `hasPhysicalGoods`                                                         | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `isShippingProduct`                                                        | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `shipmentDurationDays`                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `returnPolicy`                                                             | [components.ReturnPolicyType](../../models/components/returnpolicytype.md) | :heavy_check_mark:                                                         | N/A                                                                        |