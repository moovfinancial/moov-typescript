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
    averageTransactionSize: 700751,
    maxTransactionSize: 462072,
    averageMonthlyTransactionVolume: 33295,
    status: "approved",
    volumeByCustomerType: {
      businessToBusinessPercentage: 929429,
      consumerToBusinessPercentage: 744543,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 546010,
      cardPresentPercentage: 209465,
      mailOrPhonePercentage: 6356,
      debtRepaymentPercentage: 772650,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 312298,
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