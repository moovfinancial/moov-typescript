# UpdateUnderwritingRequest

## Example Usage

```typescript
import { UpdateUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpdateUnderwritingRequest = {
  accountID: "03a1add2-7ebd-467e-b6a6-b9789eabf135",
  updateUnderwriting: {
    averageTransactionSize: 228555,
    maxTransactionSize: 565095,
    averageMonthlyTransactionVolume: 117761,
    volumeByCustomerType: {
      businessToBusinessPercentage: 270667,
      consumerToBusinessPercentage: 276109,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 708466,
      cardPresentPercentage: 108829,
      mailOrPhonePercentage: 756985,
      debtRepaymentPercentage: 303546,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 733471,
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