# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "a7448f70-f401-42a5-aec5-fa07e4e995f6",
  updateUnderwriting: {
    averageTransactionSize: 637086,
    maxTransactionSize: 643394,
    averageMonthlyTransactionVolume: 306043,
    volumeByCustomerType: {
      businessToBusinessPercentage: 864742,
      consumerToBusinessPercentage: 593604,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 388445,
      cardPresentPercentage: 322274,
      mailOrPhonePercentage: 113684,
      debtRepaymentPercentage: 610243,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 782608,
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