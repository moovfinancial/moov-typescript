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
    averageTransactionSize: 917300,
    maxTransactionSize: 793274,
    averageMonthlyTransactionVolume: 320837,
    status: "notRequested",
    volumeByCustomerType: {
      businessToBusinessPercentage: 666499,
      consumerToBusinessPercentage: 17438,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 463088,
      cardPresentPercentage: 910324,
      mailOrPhonePercentage: 295960,
      debtRepaymentPercentage: 926867,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 615363,
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