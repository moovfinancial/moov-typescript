# CreateInvoiceRequest

## Example Usage

```typescript
import { CreateInvoiceRequest } from "@moovio/sdk/models/operations";

let value: CreateInvoiceRequest = {
  accountID: "ba53f8ee-33b0-415f-92f5-b56409d7709e",
  createInvoice: {
    customerAccountID: "<id>",
    description: "habit until handsome till via nougat inside",
    lineItems: {
      items: [],
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