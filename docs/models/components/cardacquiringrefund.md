# CardAcquiringRefund

Details of a card refund.

## Example Usage

```typescript
import { CardAcquiringRefund } from "@moovio/sdk/models/components";

let value: CardAcquiringRefund = {
  refundID: "18af9ffa-87e0-411c-95a9-68af991f8c06",
  createdOn: new Date("2023-10-20T14:32:02.541Z"),
  updatedOn: new Date("2025-05-17T10:23:56.087Z"),
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