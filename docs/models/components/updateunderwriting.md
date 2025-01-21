# UpdateUnderwriting

## Example Usage

```typescript
import { UpdateUnderwriting } from "moov-sdk/models/components";

let value: UpdateUnderwriting = {
  averageTransactionSize: 485160,
  maxTransactionSize: 98238,
  averageMonthlyTransactionVolume: 34109,
  volumeByCustomerType: {
    businessToBusinessPercentage: 664501,
    consumerToBusinessPercentage: 867688,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 337570,
    cardPresentPercentage: 875766,
    mailOrPhonePercentage: 117053,
    debtRepaymentPercentage: 237960,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 901607,
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