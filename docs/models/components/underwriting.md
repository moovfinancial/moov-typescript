# Underwriting

Describes underwriting values (in USD) used for card payment acceptance.

## Example Usage

```typescript
import { Underwriting } from "@moovio/sdk/models/components";

let value: Underwriting = {
  averageTransactionSize: 307891,
  maxTransactionSize: 874477,
  averageMonthlyTransactionVolume: 835517,
  status: "rejected",
  volumeByCustomerType: {
    businessToBusinessPercentage: 988452,
    consumerToBusinessPercentage: 946912,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 712252,
    cardPresentPercentage: 205916,
    mailOrPhonePercentage: 231418,
    debtRepaymentPercentage: 477111,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 74838,
    returnPolicy: "other",
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