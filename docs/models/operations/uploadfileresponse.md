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
    fileID: "0226bd2c-aef1-41c2-a3ef-5dd99949326b",
    fileName: "logo.png",
    accountID: "fa22139d-e68c-4492-8727-663243bb9191",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 352596,
    createdOn: new Date("2023-09-21T15:17:36.784Z"),
    updatedOn: new Date("2024-10-13T17:36:45.405Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |