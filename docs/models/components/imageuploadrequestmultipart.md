# ImageUploadRequestMultiPart

Multipart request body for uploading an image with optional metadata.

## Example Usage

```typescript
import { ImageUploadRequestMultiPart } from "@moovio/sdk/models/components";

// No examples available for this model
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `image`                                                                                                                                                                              | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [components.Image](../../models/components/image.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                           | [components.ImageMetadataRequest](../../models/components/imagemetadatarequest.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                   | Optional, json-encoded metadata to associate with the uploaded image.                                                                                                                |