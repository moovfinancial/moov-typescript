# UpdateImageMetadataRequest

## Example Usage

```typescript
import { UpdateImageMetadataRequest } from "@moovio/sdk/models/operations";

let value: UpdateImageMetadataRequest = {
  accountID: "adb97ef7-1e79-46d7-a526-fae888af137b",
  imageID: "75419bed-574d-4c00-b96e-c6c8a46c1896",
  imageMetadataRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `imageID`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `imageMetadataRequest`                                                             | [components.ImageMetadataRequest](../../models/components/imagemetadatarequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |