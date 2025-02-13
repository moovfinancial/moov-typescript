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
    averageTransactionSize: 353480,
    maxTransactionSize: 36596,
    averageMonthlyTransactionVolume: 887276,
    status: "pending",
    volumeByCustomerType: {
      businessToBusinessPercentage: 181858,
      consumerToBusinessPercentage: 205704,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 398200,
      cardPresentPercentage: 476388,
      mailOrPhonePercentage: 330300,
      debtRepaymentPercentage: 515670,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 892451,
      returnPolicy: "withinThirtyDays",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Underwriting](../../models/components/underwriting.md) | :heavy_check_mark:                                                 | N/A                                                                |