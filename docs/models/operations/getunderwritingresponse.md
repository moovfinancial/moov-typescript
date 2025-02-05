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
    averageTransactionSize: 147103,
    maxTransactionSize: 54255,
    averageMonthlyTransactionVolume: 39457,
    status: "pendingReview",
    volumeByCustomerType: {
      businessToBusinessPercentage: 425323,
      consumerToBusinessPercentage: 664193,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 389932,
      cardPresentPercentage: 229716,
      mailOrPhonePercentage: 96303,
      debtRepaymentPercentage: 571158,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 217338,
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