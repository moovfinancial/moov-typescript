# UpdateUnderwritingRequest

## Example Usage

```typescript
import { UpdateUnderwritingRequest } from "moov-sdk/models/operations";

let value: UpdateUnderwritingRequest = {
  accountID: "2d887b81-14f1-48e1-a390-e1039f78784b",
  updateUnderwriting: {
    averageTransactionSize: 520841,
    maxTransactionSize: 859509,
    averageMonthlyTransactionVolume: 660797,
    volumeByCustomerType: {
      businessToBusinessPercentage: 493496,
      consumerToBusinessPercentage: 842114,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 584321,
      cardPresentPercentage: 76002,
      mailOrPhonePercentage: 802608,
      debtRepaymentPercentage: 845591,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 48076,
      returnPolicy: "other",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `xMoovVersion`                                                                 | [components.Versions](../../models/components/versions.md)                     | :heavy_minus_sign:                                                             | Specify an API version.                                                        |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateUnderwriting`                                                           | [components.UpdateUnderwriting](../../models/components/updateunderwriting.md) | :heavy_check_mark:                                                             | N/A                                                                            |