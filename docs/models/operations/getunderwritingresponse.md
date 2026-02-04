# GetUnderwritingResponse

## Example Usage

```typescript
import { GetUnderwritingResponse } from "@moovio/sdk/models/operations";

let value: GetUnderwritingResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    averageTransactionSize: 112418,
    maxTransactionSize: 41178,
    averageMonthlyTransactionVolume: 58307,
    status: "pending",
    volumeByCustomerType: {
      businessToBusinessPercentage: 787377,
      consumerToBusinessPercentage: 665130,
    },
    cardVolumeDistribution: {
      ecommercePercentage: 616555,
      cardPresentPercentage: 770976,
      mailOrPhonePercentage: 643918,
      debtRepaymentPercentage: 613082,
    },
    fulfillment: {
      hasPhysicalGoods: false,
      isShippingProduct: true,
      shipmentDurationDays: 253308,
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