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
    averageTransactionSize: 294184,
    maxTransactionSize: 55505,
    averageMonthlyTransactionVolume: 314321,
    status: "pending",
    volumeByCustomerType: {
      businessToBusinessPercentage: 245773,
      consumerToBusinessPercentage: 569242,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 278278,
      cardPresentPercentage: 44454,
      mailOrPhonePercentage: 413166,
      debtRepaymentPercentage: 356620,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 245890,
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