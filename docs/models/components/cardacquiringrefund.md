# CardAcquiringRefund

Details of a card refund.

## Example Usage

```typescript
import { CardAcquiringRefund } from "@moovio/sdk/models/components";

let value: CardAcquiringRefund = {
  refundID: "<id>",
  createdOn: new Date("2026-06-07T20:56:11.094Z"),
  updatedOn: new Date("2024-10-25T09:30:32.179Z"),
  status: "created",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  amountDetails: {
    surcharge: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  processingDetails: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `refundID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the refund.                                                                    |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.RefundStatus](../../models/components/refundstatus.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `captureID`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the capture refunded for an auth-capture `card-payment` transfer.                       |
| `amountDetails`                                                                               | [components.RefundAmountDetails](../../models/components/refundamountdetails.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `processingDetails`                                                                           | [components.RefundProcessingDetails](../../models/components/refundprocessingdetails.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |