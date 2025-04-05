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
    fileID: "cbd4ef50-6994-47e1-850d-6b4698506c80",
    fileName: "logo.png",
    accountID: "7251809b-4f82-4821-8d14-60a56b680e86",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 472151,
    createdOn: new Date("2024-04-08T16:03:05.362Z"),
    updatedOn: new Date("2023-11-26T05:06:16.564Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |