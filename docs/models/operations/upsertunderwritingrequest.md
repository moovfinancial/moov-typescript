# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "2c9aeeaf-30e4-4f34-bed1-9219179fe98a",
  updateUnderwriting: {
    averageTransactionSize: 990941,
    maxTransactionSize: 33090,
    averageMonthlyTransactionVolume: 969553,
    volumeByCustomerType: {
      businessToBusinessPercentage: 803186,
      consumerToBusinessPercentage: 75004,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 800168,
      cardPresentPercentage: 662633,
      mailOrPhonePercentage: 905738,
      debtRepaymentPercentage: 457797,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 503338,
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