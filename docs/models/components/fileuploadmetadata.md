# FileUploadMetadata

Additional metadata to be stored with the file.

## Example Usage

```typescript
import { FileUploadMetadata } from "@moovio/sdk/models/components";

let value: FileUploadMetadata = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `representativeId`                                                                                     | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The representative ID that the file is for. Required when filePurpose is `representativeVerification`. |
| `comment`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Comments or notes about the file.                                                                      |