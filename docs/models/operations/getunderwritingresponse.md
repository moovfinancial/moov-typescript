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
    averageTransactionSize: 55797,
    maxTransactionSize: 938696,
    averageMonthlyTransactionVolume: 305971,
    status: "approved",
    volumeByCustomerType: {
      businessToBusinessPercentage: 72285,
      consumerToBusinessPercentage: 171134,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 634157,
      cardPresentPercentage: 367986,
      mailOrPhonePercentage: 917300,
      debtRepaymentPercentage: 793274,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 320837,
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