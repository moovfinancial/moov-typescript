# UpsertUnderwritingRequest

## Example Usage

```typescript
import { UpsertUnderwritingRequest } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingRequest = {
  accountID: "c3b8943f-d15c-4b50-9f99-bc94cf776722",
  updateUnderwriting: {
    averageTransactionSize: 547785,
    maxTransactionSize: 300166,
    averageMonthlyTransactionVolume: 733614,
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