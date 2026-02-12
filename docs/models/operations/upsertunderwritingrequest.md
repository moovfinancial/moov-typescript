# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "<id>",
  updateUnderwriting: {
    averageTransactionSize: 753300,
    maxTransactionSize: 218122,
    averageMonthlyTransactionVolume: 744257,
    volumeByCustomerType: {
      businessToBusinessPercentage: 524515,
      consumerToBusinessPercentage: 591999,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 308893,
      cardPresentPercentage: 200339,
      mailOrPhonePercentage: 959660,
      debtRepaymentPercentage: 853495,
    },
    fulfillment: {
      hasPhysicalGoods: true,
      isShippingProduct: true,
      shipmentDurationDays: 781843,
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