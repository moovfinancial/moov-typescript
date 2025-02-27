# UpdateUnderwriting

## Example Usage

```typescript
import { UpdateUnderwriting } from "@moovio/sdk/models/components";

let value: UpdateUnderwriting = {
  averageTransactionSize: 379758,
  maxTransactionSize: 859650,
  averageMonthlyTransactionVolume: 335847,
  volumeByCustomerType: {
    businessToBusinessPercentage: 122516,
    consumerToBusinessPercentage: 531355,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 607448,
    cardPresentPercentage: 118313,
    mailOrPhonePercentage: 766311,
    debtRepaymentPercentage: 507903,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 587138,
    returnPolicy: "none",
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