# ListFilesResponse

## Example Usage

```typescript
import { ListFilesResponse } from "@moovio/sdk/models/operations";

let value: ListFilesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      fileID: "5066e9be-704d-4e54-be5a-418e93ac58a2",
      fileName: "logo.png",
      accountID: "7f372036-6ea6-4f95-9b7e-e584afd51f64",
      filePurpose: "representative_verification",
      fileStatus: "pending",
      metadata:
        "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
      decisionReason: "not correct file",
      fileSizeBytes: 489923,
      createdOn: new Date("2025-11-14T14:23:19.654Z"),
      updatedOn: new Date("2025-12-17T08:06:48.746Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.FileDetails](../../models/components/filedetails.md)[] | :heavy_check_mark:                                                 | N/A                                                                |