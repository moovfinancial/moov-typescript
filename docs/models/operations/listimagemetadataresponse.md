# ListImageMetadataResponse

## Example Usage

```typescript
import { ListImageMetadataResponse } from "@moovio/sdk/models/operations";

let value: ListImageMetadataResponse = {
  headers: {},
  result: [
    {
      imageID: "764fcd83-2c81-4088-8009-7e84522e9ec8",
      publicID: "<id>",
      link: "https://api.moov.io/images/qJRAaAwwF5hmfeAFdHjIb",
      createdOn: new Date("2026-07-10T01:24:54.615Z"),
      updatedOn: new Date("2025-05-02T15:38:31.842Z"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.ImageMetadata](../../models/components/imagemetadata.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |