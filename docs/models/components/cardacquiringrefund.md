# CardAcquiringRefund

Details of a card refund.

## Example Usage

```typescript
import { CardAcquiringRefund } from "@moovio/sdk/models/components";

let value: CardAcquiringRefund = {
  refundID: "3e953e31-a429-4729-aab4-85e798fef377",
  createdOn: new Date("2025-03-02T22:52:48.220Z"),
  updatedOn: new Date("2024-04-03T12:26:13.360Z"),
  status: "completed",
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `refundID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the refund.                                                                    |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.RefundStatus](../../models/components/refundstatus.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.Amount](../../models/components/amount.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cardDetails`                                                                                 | [components.RefundCardDetails](../../models/components/refundcarddetails.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |