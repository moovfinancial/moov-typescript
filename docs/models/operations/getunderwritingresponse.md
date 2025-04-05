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
    averageTransactionSize: 304131,
    maxTransactionSize: 639177,
    averageMonthlyTransactionVolume: 112418,
    status: "approved",
    volumeByCustomerType: {
      businessToBusinessPercentage: 58307,
      consumerToBusinessPercentage: 691511,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 787377,
      cardPresentPercentage: 665130,
      mailOrPhonePercentage: 616555,
      debtRepaymentPercentage: 770976,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 643918,
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