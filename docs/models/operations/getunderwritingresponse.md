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
    averageTransactionSize: 203492,
    maxTransactionSize: 377411,
    averageMonthlyTransactionVolume: 131120,
    status: "notRequested",
    volumeByCustomerType: {
      businessToBusinessPercentage: 910382,
      consumerToBusinessPercentage: 438193,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 492401,
      cardPresentPercentage: 62090,
      mailOrPhonePercentage: 839373,
      debtRepaymentPercentage: 780488,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: false,
      shipmentDurationDays: 393289,
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