# Underwriting

Describes underwriting values (in USD) used for card payment acceptance.

## Example Usage

```typescript
import { Underwriting } from "moov-sdk/models/components";

let value: Underwriting = {
  averageTransactionSize: 495096,
  maxTransactionSize: 989766,
  averageMonthlyTransactionVolume: 42387,
  status: "rejected",
  volumeByCustomerType: {
    businessToBusinessPercentage: 851894,
    consumerToBusinessPercentage: 659696,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 826683,
    cardPresentPercentage: 660291,
    mailOrPhonePercentage: 759537,
    debtRepaymentPercentage: 492922,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 204877,
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