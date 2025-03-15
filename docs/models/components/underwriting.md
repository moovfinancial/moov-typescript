# Underwriting

Describes underwriting values (in USD) used for card payment acceptance.

## Example Usage

```typescript
import { Underwriting } from "@moovio/sdk/models/components";

let value: Underwriting = {
  averageTransactionSize: 444632,
  maxTransactionSize: 508565,
  averageMonthlyTransactionVolume: 5266,
  status: "notRequested",
  volumeByCustomerType: {
    businessToBusinessPercentage: 497962,
    consumerToBusinessPercentage: 579119,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 231872,
    cardPresentPercentage: 776039,
    mailOrPhonePercentage: 361410,
    debtRepaymentPercentage: 684332,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 515813,
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