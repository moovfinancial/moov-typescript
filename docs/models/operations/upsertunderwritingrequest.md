# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "b1c4b562-18a1-4202-83b1-a62f84059394",
  updateUnderwriting: {
    averageTransactionSize: 413166,
    maxTransactionSize: 356620,
    averageMonthlyTransactionVolume: 245890,
    volumeByCustomerType: {
      businessToBusinessPercentage: 528972,
      consumerToBusinessPercentage: 389623,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 949946,
      cardPresentPercentage: 621229,
      mailOrPhonePercentage: 358154,
      debtRepaymentPercentage: 214336,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 665124,
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