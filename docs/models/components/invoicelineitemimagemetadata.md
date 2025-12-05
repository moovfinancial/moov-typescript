# InvoiceLineItemImageMetadata

## Example Usage

```typescript
import { InvoiceLineItemImageMetadata } from "@moovio/sdk/models/components";

let value: InvoiceLineItemImageMetadata = {
  imageID: "6ddc800b-3cdc-43cf-ba6c-d9b3d59071a9",
  link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
  publicID: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `imageID`                                                     | *string*                                                      | :heavy_check_mark:                                            | Unique identifier for a image resource.                       |                                                               |
| `altText`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Alternative text for the image.                               |                                                               |
| `link`                                                        | *string*                                                      | :heavy_check_mark:                                            | The image's public URL.                                       | https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g              |
| `publicID`                                                    | *string*                                                      | :heavy_check_mark:                                            | A unique identifier for an image, used in public image links. |                                                               |