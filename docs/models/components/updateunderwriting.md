# UpdateUnderwriting

## Example Usage

```typescript
import { UpdateUnderwriting } from "@moovio/sdk/models/components";

let value: UpdateUnderwriting = {
  averageTransactionSize: 473839,
  maxTransactionSize: 65304,
  averageMonthlyTransactionVolume: 612307,
  volumeByCustomerType: {
    businessToBusinessPercentage: 239834,
    consumerToBusinessPercentage: 380035,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 192779,
    cardPresentPercentage: 640477,
    mailOrPhonePercentage: 818926,
    debtRepaymentPercentage: 858543,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 771809,
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