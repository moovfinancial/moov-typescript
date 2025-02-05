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
      fileID: "226bd2ca-ef11-4c23-bef5-dd99949326b9",
      fileName: "logo.png",
      accountID: "a22139de-68c4-4927-9276-63243bb91910",
      filePurpose: "representative_verification",
      fileStatus: "pending",
      metadata:
        "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
      decisionReason: "not correct file",
      fileSizeBytes: 240545,
      createdOn: new Date("2024-10-13T17:36:45.405Z"),
      updatedOn: new Date("2025-10-14T19:00:43.223Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.FileDetails](../../models/components/filedetails.md)[] | :heavy_check_mark:                                                 | N/A                                                                |