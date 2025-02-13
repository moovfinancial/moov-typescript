# ReversedWithRefund

## Example Usage

```typescript
import { ReversedWithRefund } from "@moovio/sdk/models/components";

let value: ReversedWithRefund = {
  refund: {
    refundID: "0afd4979-8b56-4904-a72b-1bdaeb3d3d98",
    createdOn: new Date("2024-03-07T09:08:30.448Z"),
    updatedOn: new Date("2023-10-24T10:27:09.993Z"),
    status: "pending",
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