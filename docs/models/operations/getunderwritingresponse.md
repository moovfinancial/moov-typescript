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
    averageTransactionSize: 808797,
    maxTransactionSize: 620633,
    averageMonthlyTransactionVolume: 641301,
    status: "notRequested",
    volumeByCustomerType: {
      businessToBusinessPercentage: 891799,
      consumerToBusinessPercentage: 680461,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 961027,
      cardPresentPercentage: 228961,
      mailOrPhonePercentage: 19602,
      debtRepaymentPercentage: 921707,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 264328,
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