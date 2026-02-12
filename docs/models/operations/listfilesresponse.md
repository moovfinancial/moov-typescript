# ListFilesResponse

## Example Usage

```typescript
import { ListFilesResponse } from "@moovio/sdk/models/operations";

let value: ListFilesResponse = {
  headers: {},
  result: [
    {
      fileID: "<id>",
      fileName: "logo.png",
      accountID: "<id>",
      filePurpose: "representative_verification",
      fileStatus: "pending",
      metadata:
        "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
      decisionReason: "not correct file",
      fileSizeBytes: 972306,
      createdOn: new Date("2024-04-24T09:54:24.185Z"),
      updatedOn: new Date("2025-12-23T15:09:30.574Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.FileDetails](../../models/components/filedetails.md)[] | :heavy_check_mark:                                                 | N/A                                                                |