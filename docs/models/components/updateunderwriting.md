# UpdateUnderwriting

## Example Usage

```typescript
import { UpdateUnderwriting } from "@moovio/sdk/models/components";

let value: UpdateUnderwriting = {
  averageTransactionSize: 829145,
  maxTransactionSize: 593375,
  averageMonthlyTransactionVolume: 943250,
  volumeByCustomerType: {
    businessToBusinessPercentage: 88826,
    consumerToBusinessPercentage: 778001,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 41450,
    cardPresentPercentage: 107285,
    mailOrPhonePercentage: 808128,
    debtRepaymentPercentage: 726154,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 594788,
    returnPolicy: "other",
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