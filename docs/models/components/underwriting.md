# Underwriting

Describes underwriting values (in USD) used for card payment acceptance.

## Example Usage

```typescript
import { Underwriting } from "@moovio/sdk/models/components";

let value: Underwriting = {
  averageTransactionSize: 167200,
  maxTransactionSize: 774538,
  averageMonthlyTransactionVolume: 348938,
  status: "rejected",
  volumeByCustomerType: {
    businessToBusinessPercentage: 297223,
    consumerToBusinessPercentage: 286550,
  },
  cardVolumeDistribution: {
    ecommercePercentage: 419990,
    cardPresentPercentage: 410248,
    mailOrPhonePercentage: 515170,
    debtRepaymentPercentage: 708899,
  },
  fulfillment: {
    hasPhysicalGoods: false,
    isShippingProduct: false,
    shipmentDurationDays: 111771,
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