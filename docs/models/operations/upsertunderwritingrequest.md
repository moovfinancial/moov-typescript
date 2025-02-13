# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "34ed1921-9179-4fe9-a8ae-f0fc1cae78d7",
  updateUnderwriting: {
    averageTransactionSize: 244359,
    maxTransactionSize: 330422,
    averageMonthlyTransactionVolume: 287648,
    volumeByCustomerType: {
      businessToBusinessPercentage: 45663,
      consumerToBusinessPercentage: 583034,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 842652,
      cardPresentPercentage: 770313,
      mailOrPhonePercentage: 246585,
      debtRepaymentPercentage: 586310,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 490431,
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