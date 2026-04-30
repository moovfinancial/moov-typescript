# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@moovio/sdk/models/operations";

let value: UpdateInvoiceRequest = {
  accountID: "<id>",
  invoiceID: "<id>",
  updateInvoice: {
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
| `invoiceID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `updateInvoice`                                                      | [components.UpdateInvoice](../../models/components/updateinvoice.md) | :heavy_check_mark:                                                   | N/A                                                                  |