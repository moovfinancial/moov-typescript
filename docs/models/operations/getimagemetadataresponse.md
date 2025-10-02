# GetImageMetadataResponse

## Example Usage

```typescript
import { GetImageMetadataResponse } from "@moovio/sdk/models/operations";

let value: GetImageMetadataResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    imageID: "5c83e04a-ad99-4cc9-b4c5-f8ee0285adcb",
    link: "https://api.moov.io/images/qJRAaAwwF5hmfeAFdHjIb",
    createdOn: new Date("2024-04-27T06:32:57.622Z"),
    updatedOn: new Date("2023-08-16T06:52:58.083Z"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.ImageMetadata](../../models/components/imagemetadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |