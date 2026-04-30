# UpdateImageMetadataResponse

## Example Usage

```typescript
import { UpdateImageMetadataResponse } from "@moovio/sdk/models/operations";

let value: UpdateImageMetadataResponse = {
  headers: {},
  result: {
    imageID: "<id>",
    publicID: "<id>",
    link: "https://api.moov.io/images/qJRAaAwwF5hmfeAFdHjIb",
    createdOn: new Date("2024-01-06T01:03:27.293Z"),
    updatedOn: new Date("2026-07-11T08:19:34.577Z"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.ImageMetadata](../../models/components/imagemetadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |