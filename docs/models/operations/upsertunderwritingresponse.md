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
    averageTransactionSize: 483788,
    maxTransactionSize: 526368,
    averageMonthlyTransactionVolume: 244359,
    status: "rejected",
    volumeByCustomerType: {
      businessToBusinessPercentage: 287648,
      consumerToBusinessPercentage: 45663,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 583034,
      cardPresentPercentage: 842652,
      mailOrPhonePercentage: 770313,
      debtRepaymentPercentage: 246585,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 586310,
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