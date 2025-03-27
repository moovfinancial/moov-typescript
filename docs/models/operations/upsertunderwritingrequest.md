# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "a07e4e99-5f6a-4aa4-bd96-519c6e27a9ea",
  updateUnderwriting: {
    averageTransactionSize: 662126,
    maxTransactionSize: 344243,
    averageMonthlyTransactionVolume: 272584,
    volumeByCustomerType: {
      businessToBusinessPercentage: 349961,
      consumerToBusinessPercentage: 408178,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 826808,
      cardPresentPercentage: 710936,
      mailOrPhonePercentage: 826843,
      debtRepaymentPercentage: 925137,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 814797,
      returnPolicy: "other",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateUnderwriting`                                                           | [components.UpdateUnderwriting](../../models/components/updateunderwriting.md) | :heavy_check_mark:                                                             | N/A                                                                            |