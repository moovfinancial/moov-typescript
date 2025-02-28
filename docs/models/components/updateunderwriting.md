# UpdateUnderwriting

## Example Usage

```typescript
import { UpdateUnderwriting } from "@moovio/sdk/models/components";

let value: UpdateUnderwriting = {
  averageTransactionSize: 531355,
  maxTransactionSize: 607448,
  averageMonthlyTransactionVolume: 118313,
  volumeByCustomerType: {
    businessToBusinessPercentage: 766311,
    consumerToBusinessPercentage: 507903,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 587138,
    cardPresentPercentage: 38402,
    mailOrPhonePercentage: 215790,
    debtRepaymentPercentage: 440469,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 104088,
    returnPolicy: "withinThirtyDays",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `averageTransactionSize`                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `maxTransactionSize`                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `averageMonthlyTransactionVolume`                                                      | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `volumeByCustomerType`                                                                 | [components.VolumeByCustomerType](../../models/components/volumebycustomertype.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `cardVolumeDistribution`                                                               | [components.CardVolumeDistribution](../../models/components/cardvolumedistribution.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `fulfillment`                                                                          | [components.FulfillmentDetails](../../models/components/fulfillmentdetails.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |