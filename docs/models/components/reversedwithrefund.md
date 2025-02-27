# ReversedWithRefund

## Example Usage

```typescript
import { ReversedWithRefund } from "@moovio/sdk/models/components";

let value: ReversedWithRefund = {
  refund: {
    refundID: "f2b6332f-696c-4c0a-afd4-9798b5690472",
    createdOn: new Date("2023-04-26T07:49:59.337Z"),
    updatedOn: new Date("2025-03-03T05:53:22.940Z"),
    status: "failed",
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `refund`                                                                         | [components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md) | :heavy_check_mark:                                                               | Details of a card refund.                                                        |