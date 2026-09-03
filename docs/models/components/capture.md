# Capture

Details of a capture against an authorization.

## Example Usage

```typescript
import { Capture } from "@moovio/sdk/models/components";

let value: Capture = {
  captureID: "<id>",
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  isFinal: false,
  status: "canceled",
  createdOn: new Date("2024-09-21T04:45:45.839Z"),
  destinationPaymentMethodID: "<id>",
  description: "Pay Instructor for May 15 Class",
  metadata: {
    "optional": "metadata",
  },
  lineItems: {
    items: [
      {
        name: "<value>",
        basePrice: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        quantity: 459250,
        options: [
          {
            name: "<value>",
            quantity: 129124,
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            images: [
              {
                imageID: "<id>",
                link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                publicID: "<id>",
              },
            ],
          },
        ],
        images: [
          {
            imageID: "<id>",
            link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
            publicID: "<id>",
          },
        ],
      },
    ],
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `captureID`                                                                                                                                   | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Identifier for the capture.                                                                                                                   |                                                                                                                                               |
| `amount`                                                                                                                                      | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `isFinal`                                                                                                                                     | *boolean*                                                                                                                                     | :heavy_check_mark:                                                                                                                            | Indicates whether this is intended to be the final capture.                                                                                   |                                                                                                                                               |
| `status`                                                                                                                                      | [components.CaptureStatus](../../models/components/capturestatus.md)                                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `createdOn`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `destinationPaymentMethodID`                                                                                                                  | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | Payment method of the merchant account the funds were captured into. For card-acquiring transfers, this must be a moov-wallet payment method. |                                                                                                                                               |
| `description`                                                                                                                                 | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | An optional description of the capture that is used on receipts and for your own internal use.                                                | Pay Instructor for May 15 Class                                                                                                               |
| `metadata`                                                                                                                                    | Record<string, *string*>                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                                                 | {<br/>"optional": "metadata"<br/>}                                                                                                            |
| `foreignID`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Optional alias from a foreign/external system which can be used to reference this resource.                                                   |                                                                                                                                               |
| `lineItems`                                                                                                                                   | [components.TransferLineItems](../../models/components/transferlineitems.md)                                                                  | :heavy_minus_sign:                                                                                                                            | An optional collection of line items for a transfer.<br/>When line items are provided, their total plus tax must equal the transfer amount.   |                                                                                                                                               |
| `amountDetails`                                                                                                                               | [components.TransferAmountDetails](../../models/components/transferamountdetails.md)                                                          | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `facilitatorFeeAmount`                                                                                                                        | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                          | :heavy_minus_sign:                                                                                                                            | The facilitator fee applied to this capture.<br/>The transfer's facilitator fee is the sum of its capture fees.                               |                                                                                                                                               |
| `failureCode`                                                                                                                                 | [components.CardTransactionFailureCode](../../models/components/cardtransactionfailurecode.md)                                                | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |