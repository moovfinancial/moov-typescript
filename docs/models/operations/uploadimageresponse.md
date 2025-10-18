# UploadImageResponse

## Example Usage

```typescript
import { UploadImageResponse } from "@moovio/sdk/models/operations";

let value: UploadImageResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    imageID: "0db47ebc-da83-4b98-8003-f792a94dbfcb",
    link: "https://api.moov.io/images/qJRAaAwwF5hmfeAFdHjIb",
    createdOn: new Date("2025-10-16T02:50:36.741Z"),
    updatedOn: new Date("2024-03-21T12:40:16.181Z"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.ImageMetadata](../../models/components/imagemetadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |