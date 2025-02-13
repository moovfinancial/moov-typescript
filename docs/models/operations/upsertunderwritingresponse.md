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
    averageTransactionSize: 157751,
    maxTransactionSize: 71671,
    averageMonthlyTransactionVolume: 612382,
    status: "approved",
    volumeByCustomerType: {
      businessToBusinessPercentage: 471895,
      consumerToBusinessPercentage: 614513,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 939103,
      cardPresentPercentage: 921273,
      mailOrPhonePercentage: 607458,
      debtRepaymentPercentage: 502713,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 650391,
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