# ReversedWithRefund

## Example Usage

```typescript
import { ReversedWithRefund } from "@moovio/sdk/models/components";

let value: ReversedWithRefund = {
  refund: {
    refundID: "b31f0079-2bf7-41df-8d9d-6715ed9e6ff9",
    createdOn: new Date("2025-08-27T14:08:51.409Z"),
    updatedOn: new Date("2025-09-25T21:09:30.950Z"),
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