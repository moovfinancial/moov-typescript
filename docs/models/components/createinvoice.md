# CreateInvoice

## Example Usage

```typescript
import { CreateInvoice } from "@moovio/sdk/models/components";

let value: CreateInvoice = {
  customerAccountID: "<id>",
  lineItems: {
    items: [
      {
        name: "<value>",
        basePrice: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        quantity: 188713,
        options: [
          {
            name: "<value>",
            quantity: 985052,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customerAccountID`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [components.CreateInvoiceLineItems](../../models/components/createinvoicelineitems.md)        | :heavy_check_mark:                                                                            | A collection of line items for an invoice.                                                    |
| `invoiceDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `dueDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |