# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "feda7c34-2f3b-4701-beb8-30c432c9aeea",
  updateUnderwriting: {
    averageTransactionSize: 228961,
    maxTransactionSize: 19602,
    averageMonthlyTransactionVolume: 921707,
    volumeByCustomerType: {
      businessToBusinessPercentage: 264328,
      consumerToBusinessPercentage: 973103,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 224039,
      cardPresentPercentage: 278459,
      mailOrPhonePercentage: 909450,
      debtRepaymentPercentage: 812655,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 97391,
      returnPolicy: "withinThirtyDays",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateUnderwriting`                                                           | [components.UpdateUnderwriting](../../models/components/updateunderwriting.md) | :heavy_check_mark:                                                             | N/A                                                                            |