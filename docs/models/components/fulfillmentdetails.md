# FulfillmentDetails

## Example Usage

```typescript
import { FulfillmentDetails } from "moov-sdk/models/components";

let value: FulfillmentDetails = {
  hasPhysicalGoods: false,
  isShippingProduct: false,
  shipmentDurationDays: 567821,
  returnPolicy: "none",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `hasPhysicalGoods`                                                         | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `isShippingProduct`                                                        | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `shipmentDurationDays`                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `returnPolicy`                                                             | [components.ReturnPolicyType](../../models/components/returnpolicytype.md) | :heavy_check_mark:                                                         | N/A                                                                        |