# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@moovio/sdk/models/operations";

let value: UpdateInvoiceRequest = {
  accountID: "28c8941e-564a-438e-b2c7-63ef66418110",
  invoiceID: "383b525a-0363-403c-ab4c-186fe0d26eee",
  updateInvoice: {
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
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `invoiceID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `updateInvoice`                                                      | [components.UpdateInvoice](../../models/components/updateinvoice.md) | :heavy_check_mark:                                                   | N/A                                                                  |