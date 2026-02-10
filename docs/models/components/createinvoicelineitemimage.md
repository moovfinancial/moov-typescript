# CreateInvoiceLineItemImage

An image to associate with a line item.

## Example Usage

```typescript
import { CreateInvoiceLineItemImage } from "@moovio/sdk/models/components";

let value: CreateInvoiceLineItemImage = {};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `imageID`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | A unique identifier for a Moov resource. Supports UUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) or typed format with base32-encoded UUID and type suffix (e.g., kuoaydiojf7uszaokc2ggnaaaa_xfer). |