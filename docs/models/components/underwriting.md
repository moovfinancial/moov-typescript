# Underwriting

Describes underwriting values (in USD) used for card payment acceptance.

## Example Usage

```typescript
import { Underwriting } from "@moovio/sdk/models/components";

let value: Underwriting = {
  averageTransactionSize: 115137,
  maxTransactionSize: 818739,
  averageMonthlyTransactionVolume: 353214,
  status: "notRequested",
  volumeByCustomerType: {
    businessToBusinessPercentage: 883826,
    consumerToBusinessPercentage: 853450,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 356253,
    cardPresentPercentage: 757130,
    mailOrPhonePercentage: 986330,
    debtRepaymentPercentage: 526322,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 470732,
    returnPolicy: "none",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `averageTransactionSize`                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `maxTransactionSize`                                                                                                    | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `averageMonthlyTransactionVolume`                                                                                       | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`status`~~                                                                                                            | [components.UnderwritingStatus](../../models/components/underwritingstatus.md)                                          | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `volumeByCustomerType`                                                                                                  | [components.VolumeByCustomerType](../../models/components/volumebycustomertype.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `cardVolumeDistribution`                                                                                                | [components.CardVolumeDistribution](../../models/components/cardvolumedistribution.md)                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `fulfillment`                                                                                                           | [components.FulfillmentDetails](../../models/components/fulfillmentdetails.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |