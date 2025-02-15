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
    averageTransactionSize: 125830,
    maxTransactionSize: 106842,
    averageMonthlyTransactionVolume: 541842,
    status: "pending",
    volumeByCustomerType: {
      businessToBusinessPercentage: 92130,
      consumerToBusinessPercentage: 139432,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 32442,
      cardPresentPercentage: 162408,
      mailOrPhonePercentage: 222577,
      debtRepaymentPercentage: 690703,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 65214,
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