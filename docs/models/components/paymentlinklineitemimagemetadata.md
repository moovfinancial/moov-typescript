# PaymentLinkLineItemImageMetadata

## Example Usage

```typescript
import { PaymentLinkLineItemImageMetadata } from "@moovio/sdk/models/components";

let value: PaymentLinkLineItemImageMetadata = {
  imageID: "d9d97cd4-327b-4af1-8afd-d4d7e218f2f6",
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