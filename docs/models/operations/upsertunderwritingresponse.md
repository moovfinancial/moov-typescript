# UpsertUnderwritingResponse

## Example Usage

```typescript
import { UpsertUnderwritingResponse } from "@moovio/sdk/models/operations";

let value: UpsertUnderwritingResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    averageTransactionSize: 949862,
    maxTransactionSize: 320962,
    averageMonthlyTransactionVolume: 392307,
    status: "pendingReview",
    volumeByCustomerType: {
      businessToBusinessPercentage: 690546,
      consumerToBusinessPercentage: 464706,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 787769,
      cardPresentPercentage: 632007,
      mailOrPhonePercentage: 595870,
      debtRepaymentPercentage: 145395,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 171314,
      returnPolicy: "exchangeOnly",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Underwriting](../../models/components/underwriting.md) | :heavy_check_mark:                                                 | N/A                                                                |