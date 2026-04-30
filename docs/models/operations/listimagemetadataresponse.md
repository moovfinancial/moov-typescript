# ListImageMetadataResponse

## Example Usage

```typescript
import { ListImageMetadataResponse } from "@moovio/sdk/models/operations";

let value: ListImageMetadataResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      imageID: "<id>",
      publicID: "<id>",
      link: "https://api.moov.io/images/qJRAaAwwF5hmfeAFdHjIb",
      createdOn: new Date("2025-05-12T00:22:28.280Z"),
      updatedOn: new Date("2025-03-30T11:26:15.967Z"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.ImageMetadata](../../models/components/imagemetadata.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |