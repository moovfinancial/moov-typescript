# GetUnderwritingResponse

## Example Usage

```typescript
import { GetUnderwritingResponse } from "@moovio/sdk/models/operations";

let value: GetUnderwritingResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    averageTransactionSize: 829393,
    maxTransactionSize: 684229,
    averageMonthlyTransactionVolume: 947182,
    status: "pendingReview",
    volumeByCustomerType: {
      businessToBusinessPercentage: 772726,
      consumerToBusinessPercentage: 509186,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 49491,
      cardPresentPercentage: 13262,
      mailOrPhonePercentage: 425123,
      debtRepaymentPercentage: 659975,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 863273,
      returnPolicy: "none",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.Underwriting](../../models/components/underwriting.md) | :heavy_check_mark:                                                 | N/A                                                                |