# ReversedWithRefund

## Example Usage

```typescript
import { ReversedWithRefund } from "@moovio/sdk/models/components";

let value: ReversedWithRefund = {
  refund: {
    refundID: "332f696c-c0af-4d49-a798-b5690472b1bd",
    createdOn: new Date("2025-10-02T07:42:31.304Z"),
    updatedOn: new Date("2025-02-18T23:58:07.398Z"),
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