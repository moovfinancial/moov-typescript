# ReversedWithRefund

## Example Usage

```typescript
import { ReversedWithRefund } from "@moovio/sdk/models/components";

let value: ReversedWithRefund = {
  refund: {
    refundID: "3601832f-a042-4f49-88e0-52c6d8f75b2a",
    createdOn: new Date("2025-03-06T05:27:32.055Z"),
    updatedOn: new Date("2025-04-28T12:11:29.717Z"),
    status: "created",
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