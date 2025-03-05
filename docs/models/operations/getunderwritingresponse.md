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
    averageTransactionSize: 516518,
    maxTransactionSize: 87837,
    averageMonthlyTransactionVolume: 592935,
    status: "rejected",
    volumeByCustomerType: {
      businessToBusinessPercentage: 550329,
      consumerToBusinessPercentage: 124065,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 786178,
      cardPresentPercentage: 511956,
      mailOrPhonePercentage: 830931,
      debtRepaymentPercentage: 206812,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 938085,
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