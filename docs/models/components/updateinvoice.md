# UpdateInvoice

## Example Usage

```typescript
import { UpdateInvoice } from "@moovio/sdk/models/components";

let value: UpdateInvoice = {
  lineItems: {
    items: [
      {
        name: "<value>",
        basePrice: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        quantity: 877349,
        options: [
          {
            name: "<value>",
            quantity: 588981,
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
          },
        ],
      },
    ],
  },
  taxAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `lineItems`                                                                                          | [components.CreateInvoiceLineItemsUpdate](../../models/components/createinvoicelineitemsupdate.md)   | :heavy_minus_sign:                                                                                   | A collection of line items for an invoice.                                                           |
| `invoiceDate`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `dueDate`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.InvoiceStatus](../../models/components/invoicestatus.md)                                 | :heavy_minus_sign:                                                                                   | Status can only be updated to `canceled` when the status is either `draft`, `unpaid`,  or `overdue`. |
| `taxAmount`                                                                                          | [components.AmountDecimalUpdate](../../models/components/amountdecimalupdate.md)                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |