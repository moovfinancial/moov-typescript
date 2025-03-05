# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "15f96e5b-2b76-43f1-9362-ee770dc67a74",
  updateUnderwriting: {
    averageTransactionSize: 517313,
    maxTransactionSize: 994532,
    averageMonthlyTransactionVolume: 489926,
    volumeByCustomerType: {
      businessToBusinessPercentage: 55797,
      consumerToBusinessPercentage: 938696,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 305971,
      cardPresentPercentage: 39825,
      mailOrPhonePercentage: 72285,
      debtRepaymentPercentage: 171134,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 634157,
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