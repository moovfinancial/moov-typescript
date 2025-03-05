# UpdateUnderwriting

## Example Usage

```typescript
import { UpdateUnderwriting } from "@moovio/sdk/models/components";

let value: UpdateUnderwriting = {
  averageTransactionSize: 53999,
  maxTransactionSize: 633006,
  averageMonthlyTransactionVolume: 365539,
  volumeByCustomerType: {
    businessToBusinessPercentage: 935450,
    consumerToBusinessPercentage: 289798,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 968944,
    cardPresentPercentage: 852730,
    mailOrPhonePercentage: 210806,
    debtRepaymentPercentage: 897073,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 310675,
    returnPolicy: "exchangeOnly",
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