# ScheduledTransferImageMetadata

## Example Usage

```typescript
import { ScheduledTransferImageMetadata } from "@moovio/sdk/models/components";

let value: ScheduledTransferImageMetadata = {
  imageID: "b2ba5f28-b4d7-4c28-ae15-7f5602533857",
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