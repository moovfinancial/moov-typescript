# CardAcquiringRefund

Details of a card refund.

## Example Usage

```typescript
import { CardAcquiringRefund } from "@moovio/sdk/models/components";

let value: CardAcquiringRefund = {
  refundID: "c4325e37-5514-4cd0-9d60-0d541a1c95b7",
  createdOn: new Date("2024-11-29T05:26:58.742Z"),
  updatedOn: new Date("2024-01-28T03:09:00.000Z"),
  status: "pending",
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