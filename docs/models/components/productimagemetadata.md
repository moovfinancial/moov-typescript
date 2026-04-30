# ProductImageMetadata

## Example Usage

```typescript
import { ProductImageMetadata } from "@moovio/sdk/models/components";

let value: ProductImageMetadata = {
  imageID: "<id>",
  link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
  publicID: "q7lKWleAy9fUNhEGezQ1g",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `imageID`                                                         | *string*                                                          | :heavy_check_mark:                                                | Unique identifier for a product or product option image resource. |                                                                   |
| `altText`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Alternative text for the image.                                   |                                                                   |
| `link`                                                            | *string*                                                          | :heavy_check_mark:                                                | The image's public URL.                                           | https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g                  |
| `publicID`                                                        | *string*                                                          | :heavy_check_mark:                                                | The public ID used to access the image.                           | q7lKWleAy9fUNhEGezQ1g                                             |