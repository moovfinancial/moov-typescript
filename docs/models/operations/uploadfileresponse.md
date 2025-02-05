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
    fileID: "329304a9-5d44-4877-9284-6bec69b652bd",
    fileName: "logo.png",
    accountID: "c9c6b618-74e6-4066-bdc3-d3510ae7dcaf",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 274844,
    createdOn: new Date("2025-05-14T18:13:50.638Z"),
    updatedOn: new Date("2025-01-29T03:46:18.998Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |