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
    averageTransactionSize: 915661,
    maxTransactionSize: 125535,
    averageMonthlyTransactionVolume: 487889,
    status: "pending",
    volumeByCustomerType: {
      businessToBusinessPercentage: 569604,
      consumerToBusinessPercentage: 889495,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 684034,
      cardPresentPercentage: 825033,
      mailOrPhonePercentage: 662126,
      debtRepaymentPercentage: 344243,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 272584,
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