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
    fileID: "c9c6b618-74e6-4066-bdc3-d3510ae7dcaf",
    fileName: "logo.png",
    accountID: "4cb613c3-fb79-49f2-84b3-d5209d4ec099",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 334544,
    createdOn: new Date("2024-05-17T06:34:04.861Z"),
    updatedOn: new Date("2023-02-22T16:38:20.435Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |