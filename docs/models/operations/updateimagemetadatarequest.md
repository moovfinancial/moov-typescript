# UpdateImageMetadataRequest

## Example Usage

```typescript
import { UpdateImageMetadataRequest } from "@moovio/sdk/models/operations";

let value: UpdateImageMetadataRequest = {
  accountID: "<id>",
  imageID: "<id>",
  imageMetadataRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `imageID`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `imageMetadataRequest`                                                             | [components.ImageMetadataRequest](../../models/components/imagemetadatarequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |