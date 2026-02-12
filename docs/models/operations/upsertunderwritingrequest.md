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
      businessToBusinessPercentage: 787377,
      consumerToBusinessPercentage: 665130,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 616555,
      cardPresentPercentage: 770976,
      mailOrPhonePercentage: 643918,
      debtRepaymentPercentage: 613082,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: true,
      shipmentDurationDays: 253308,
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