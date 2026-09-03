# CreateCapture

Request to capture funds against an authorization.

## Example Usage

```typescript
import { CreateCapture } from "@moovio/sdk/models/components";

let value: CreateCapture = {
  destinationPaymentMethodID: "<id>",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  description: "Pay Instructor for May 15 Class",
  metadata: {
    "optional": "metadata",
  },
  lineItems: {
    items: [],
  },
  amountDetails: {
    tip: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    tax: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    surcharge: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  facilitatorFeeAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `destinationPaymentMethodID`                                                                                                            | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Payment method of the merchant account to capture funds into. For card-acquiring transfers, this must be a moov-wallet payment method.  |                                                                                                                                         |
| `amount`                                                                                                                                | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                    | :heavy_minus_sign:                                                                                                                      | Amount to capture.<br/>If omitted, the remaining capturable amount is captured.                                                         |                                                                                                                                         |
| `isFinal`                                                                                                                               | *boolean*                                                                                                                               | :heavy_minus_sign:                                                                                                                      | Indicates whether this is intended to be the final capture.<br/>When `true`, any remaining capturable amount is voided.                 |                                                                                                                                         |
| `description`                                                                                                                           | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | An optional description of the capture that is used on receipts and for your own internal use.                                          | Pay Instructor for May 15 Class                                                                                                         |
| `metadata`                                                                                                                              | Record<string, *string*>                                                                                                                | :heavy_minus_sign:                                                                                                                      | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                                           | {<br/>"optional": "metadata"<br/>}                                                                                                      |
| `foreignID`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Optional alias from a foreign/external system which can be used to reference this resource.                                             |                                                                                                                                         |
| `lineItems`                                                                                                                             | [components.CreateTransferLineItems](../../models/components/createtransferlineitems.md)                                                | :heavy_minus_sign:                                                                                                                      | An optional collection of line items for a transfer.<br/>When line items are provided, their total plus tax must equal the transfer amount. |                                                                                                                                         |
| `amountDetails`                                                                                                                         | [components.CreateTransferAmountDetails](../../models/components/createtransferamountdetails.md)                                        | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |
| `facilitatorFeeAmount`                                                                                                                  | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                    | :heavy_minus_sign:                                                                                                                      | The facilitator fee applied to this capture.<br/>The transfer's facilitator fee is the sum of its capture fees.                         |                                                                                                                                         |