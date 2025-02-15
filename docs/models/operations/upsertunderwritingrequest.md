# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "62f84059-3940-4653-886f-953aeadaf6c8",
  updateUnderwriting: {
    averageTransactionSize: 13262,
    maxTransactionSize: 425123,
    averageMonthlyTransactionVolume: 659975,
    volumeByCustomerType: {
      businessToBusinessPercentage: 863273,
      consumerToBusinessPercentage: 32623,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 941845,
      cardPresentPercentage: 884761,
      mailOrPhonePercentage: 873618,
      debtRepaymentPercentage: 642670,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 466658,
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