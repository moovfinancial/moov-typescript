# CollectFundsCardPayments

## Example Usage

```typescript
import { CollectFundsCardPayments } from "@moovio/sdk/models/components";

let value: CollectFundsCardPayments = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `cardAcceptanceMethods`                                                              | [components.CardAcceptanceMethods](../../models/components/cardacceptancemethods.md) | :heavy_minus_sign:                                                                   | Describes the distribution of card transactions by payment method.                   |
| `currentlyAcceptsCards`                                                              | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `estimatedActivity`                                                                  | [components.EstimatedActivity](../../models/components/estimatedactivity.md)         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `fulfillment`                                                                        | [components.Fulfillment](../../models/components/fulfillment.md)                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `refundPolicy`                                                                       | [components.RefundPolicy](../../models/components/refundpolicy.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |