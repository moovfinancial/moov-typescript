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
    averageTransactionSize: 172693,
    maxTransactionSize: 997982,
    averageMonthlyTransactionVolume: 192181,
    status: "pending",
    volumeByCustomerType: {
      businessToBusinessPercentage: 462072,
      consumerToBusinessPercentage: 33295,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 81263,
      cardPresentPercentage: 929429,
      mailOrPhonePercentage: 744543,
      debtRepaymentPercentage: 546010,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 209465,
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