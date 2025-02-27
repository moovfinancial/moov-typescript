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
    averageTransactionSize: 676871,
    maxTransactionSize: 713755,
    averageMonthlyTransactionVolume: 969927,
    status: "approved",
    volumeByCustomerType: {
      businessToBusinessPercentage: 187613,
      consumerToBusinessPercentage: 318122,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 946068,
      cardPresentPercentage: 228555,
      mailOrPhonePercentage: 565095,
      debtRepaymentPercentage: 117761,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 270667,
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