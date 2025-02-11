# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "f8405939-4065-4386-9f95-3aeadaf6c800",
  updateUnderwriting: {
    averageTransactionSize: 659975,
    maxTransactionSize: 863273,
    averageMonthlyTransactionVolume: 32623,
    volumeByCustomerType: {
      businessToBusinessPercentage: 941845,
      consumerToBusinessPercentage: 884761,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 873618,
      cardPresentPercentage: 642670,
      mailOrPhonePercentage: 466658,
      debtRepaymentPercentage: 803994,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 206174,
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