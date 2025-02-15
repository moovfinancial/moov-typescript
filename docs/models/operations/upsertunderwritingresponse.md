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
    averageTransactionSize: 206174,
    maxTransactionSize: 292291,
    averageMonthlyTransactionVolume: 172693,
    status: "notRequested",
    volumeByCustomerType: {
      businessToBusinessPercentage: 192181,
      consumerToBusinessPercentage: 700751,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 462072,
      cardPresentPercentage: 33295,
      mailOrPhonePercentage: 81263,
      debtRepaymentPercentage: 929429,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 744543,
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