# CreateInvoiceLineItems

A collection of line items for an invoice.

## Example Usage

```typescript
import { CreateInvoiceLineItems } from "@moovio/sdk/models/components";

let value: CreateInvoiceLineItems = {
  items: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.CreateInvoiceLineItem](../../models/components/createinvoicelineitem.md)[] | :heavy_check_mark:                                                                     | The list of line items.                                                                |