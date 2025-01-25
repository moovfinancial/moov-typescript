# UpdateUnderwritingRequest

## Example Usage

```typescript
import { UpdateUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpdateUnderwritingRequest = {
  accountID: "6e236041-79be-47a0-a7d9-617e186c22ba",
  updateUnderwriting: {
    averageTransactionSize: 4558,
    maxTransactionSize: 855665,
    averageMonthlyTransactionVolume: 987398,
    volumeByCustomerType: {
      businessToBusinessPercentage: 667444,
      consumerToBusinessPercentage: 933228,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 757815,
      cardPresentPercentage: 684162,
      mailOrPhonePercentage: 351263,
      debtRepaymentPercentage: 79659,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 32170,
      returnPolicy: "exchangeOnly",
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