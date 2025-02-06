# UpdateUnderwritingRequest

## Example Usage

```typescript
import { UpdateUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpdateUnderwritingRequest = {
  accountID: "6f953aea-daf6-4c80-806a-d0feda7c342f",
  updateUnderwriting: {
    averageTransactionSize: 700751,
    maxTransactionSize: 462072,
    averageMonthlyTransactionVolume: 33295,
    volumeByCustomerType: {
      businessToBusinessPercentage: 81263,
      consumerToBusinessPercentage: 929429,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 744543,
      cardPresentPercentage: 546010,
      mailOrPhonePercentage: 209465,
      debtRepaymentPercentage: 6356,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 772650,
      returnPolicy: "exchangeOnly",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateUnderwriting`                                                           | [components.UpdateUnderwriting](../../models/components/updateunderwriting.md) | :heavy_check_mark:                                                             | N/A                                                                            |