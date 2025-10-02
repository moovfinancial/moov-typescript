# ImageMetadata

Metadata about an uploaded image.

## Example Usage

```typescript
import { ImageMetadata } from "@moovio/sdk/models/components";

let value: ImageMetadata = {
  imageID: "e529fc1b-b38d-41d4-b845-70dc9bf0945f",
  link: "https://api.moov.io/images/qJRAaAwwF5hmfeAFdHjIb",
  createdOn: new Date("2024-03-17T07:40:16.408Z"),
  updatedOn: new Date("2024-09-01T10:42:05.658Z"),
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `imageID`                                                                                                                   | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `altText`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Alternative text for the image.                                                                                             |                                                                                                                             |
| `link`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A public URL to access the image. An optional `size={width}x{height}` <br/>query parameter can be provided to resize the image. | https://api.moov.io/images/qJRAaAwwF5hmfeAFdHjIb                                                                            |
| `createdOn`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `updatedOn`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |