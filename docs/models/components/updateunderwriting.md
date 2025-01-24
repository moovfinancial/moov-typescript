# UpdateUnderwriting

## Example Usage

```typescript
import { UpdateUnderwriting } from "moov-sdk/models/components";

let value: UpdateUnderwriting = {
  averageTransactionSize: 454386,
  maxTransactionSize: 976274,
  averageMonthlyTransactionVolume: 944260,
  volumeByCustomerType: {
    businessToBusinessPercentage: 139730,
    consumerToBusinessPercentage: 882586,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 80206,
    cardPresentPercentage: 507635,
    mailOrPhonePercentage: 163910,
    debtRepaymentPercentage: 365892,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 743340,
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