# CardAcquiringRefund

Details of a card refund.

## Example Usage

```typescript
import { CardAcquiringRefund } from "moov-sdk/models/components";

let value: CardAcquiringRefund = {
  refundID: "cf870bd3-5811-4646-b7ff-2e1825b6cbf8",
  createdOn: new Date("2023-12-20T21:44:54.690Z"),
  updatedOn: new Date("2024-01-14T22:29:55.353Z"),
  status: "pending",
  amount: {
    currency: "Jamaican Dollar",
    value: 103253,
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