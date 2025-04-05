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
    averageTransactionSize: 306676,
    maxTransactionSize: 262940,
    averageMonthlyTransactionVolume: 203963,
    status: "approved",
    volumeByCustomerType: {
      businessToBusinessPercentage: 109948,
      consumerToBusinessPercentage: 331209,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 992484,
      cardPresentPercentage: 779515,
      mailOrPhonePercentage: 215188,
      debtRepaymentPercentage: 580511,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 381661,
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