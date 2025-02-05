# UpdateUnderwritingResponse

## Example Usage

```typescript
import { UpdateUnderwritingResponse } from "@moovio/sdk/models/operations";

let value: UpdateUnderwritingResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    averageTransactionSize: 426401,
    maxTransactionSize: 125830,
    averageMonthlyTransactionVolume: 106842,
    status: "pendingReview",
    volumeByCustomerType: {
      businessToBusinessPercentage: 637070,
      consumerToBusinessPercentage: 92130,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 139432,
      cardPresentPercentage: 32442,
      mailOrPhonePercentage: 162408,
      debtRepaymentPercentage: 222577,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 690703,
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