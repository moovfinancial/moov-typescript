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
      businessToBusinessPercentage: 692777,
      consumerToBusinessPercentage: 420839,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 342750,
      cardPresentPercentage: 365859,
      mailOrPhonePercentage: 994153,
      debtRepaymentPercentage: 966964,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 259200,
      returnPolicy: "none",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateUnderwriting`                                                           | [components.UpdateUnderwriting](../../models/components/updateunderwriting.md) | :heavy_check_mark:                                                             | N/A                                                                            |