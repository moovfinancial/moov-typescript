# ReversedWithRefund

## Example Usage

```typescript
import { ReversedWithRefund } from "moov-sdk/models/components";

let value: ReversedWithRefund = {
  refund: {
    refundID: "50a31ef4-427d-4bd3-9be4-b64f5167cfde",
    createdOn: new Date("2025-02-27T08:54:10.839Z"),
    updatedOn: new Date("2023-12-05T17:14:25.023Z"),
    status: "created",
    amount: {
      currency: "Rupiah",
      value: 697915,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `refund`                                                                         | [components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md) | :heavy_check_mark:                                                               | Details of a card refund.                                                        |