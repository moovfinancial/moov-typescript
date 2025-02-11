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
    averageTransactionSize: 541842,
    maxTransactionSize: 637070,
    averageMonthlyTransactionVolume: 92130,
    status: "approved",
    volumeByCustomerType: {
      businessToBusinessPercentage: 32442,
      consumerToBusinessPercentage: 162408,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 222577,
      cardPresentPercentage: 690703,
      mailOrPhonePercentage: 65214,
      debtRepaymentPercentage: 687407,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 405428,
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