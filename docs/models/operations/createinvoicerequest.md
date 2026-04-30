# CreateInvoiceRequest

## Example Usage

```typescript
import { CreateInvoiceRequest } from "@moovio/sdk/models/operations";

let value: CreateInvoiceRequest = {
  accountID: "<id>",
  createInvoice: {
    customerAccountID: "<id>",
    lineItems: {
      items: [
        {
          name: "<value>",
          basePrice: {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
          quantity: 673710,
          options: [
            {
              name: "<value>",
              quantity: 337766,
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
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `createInvoice`                                                      | [components.CreateInvoice](../../models/components/createinvoice.md) | :heavy_check_mark:                                                   | N/A                                                                  |