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
    averageTransactionSize: 627113,
    maxTransactionSize: 829393,
    averageMonthlyTransactionVolume: 684229,
    status: "notRequested",
    volumeByCustomerType: {
      businessToBusinessPercentage: 407209,
      consumerToBusinessPercentage: 772726,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 509186,
      cardPresentPercentage: 49491,
      mailOrPhonePercentage: 13262,
      debtRepaymentPercentage: 425123,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 659975,
      returnPolicy: "other",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Underwriting](../../models/components/underwriting.md) | :heavy_check_mark:                                                 | N/A                                                                |