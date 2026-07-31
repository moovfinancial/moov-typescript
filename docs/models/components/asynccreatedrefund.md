# AsyncCreatedRefund

Asynchronous refund response

## Example Usage

```typescript
import { AsyncCreatedRefund } from "@moovio/sdk/models/components";

let value: AsyncCreatedRefund = {
  refundID: "<id>",
  createdOn: new Date("2026-11-13T01:32:10.890Z"),
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `refundID`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `captureID`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the capture this refund applies to, when applicable.                                    |
| `amountDetails`                                                                               | [components.RefundAmountDetails](../../models/components/refundamountdetails.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |