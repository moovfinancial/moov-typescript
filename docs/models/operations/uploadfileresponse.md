# UploadFileResponse

## Example Usage

```typescript
import { UploadFileResponse } from "@moovio/sdk/models/operations";

let value: UploadFileResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    fileID: "1910539e-bcfa-499d-a6ca-403b946a2668",
    fileName: "logo.png",
    accountID: "5c106e42-e25b-4436-bce0-2f98d00fdb27",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 933600,
    createdOn: new Date("2023-01-11T03:14:09.247Z"),
    updatedOn: new Date("2025-04-04T17:32:02.481Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |