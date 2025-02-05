# GetFileDetailsResponse

## Example Usage

```typescript
import { GetFileDetailsResponse } from "@moovio/sdk/models/operations";

let value: GetFileDetailsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    fileID: "45b3d9ff-2f00-4ff2-b77d-ac7abb015066",
    fileName: "logo.png",
    accountID: "9be704de-54e5-4a41-88e9-3ac58a2f7f37",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 10180,
    createdOn: new Date("2023-09-18T17:04:06.742Z"),
    updatedOn: new Date("2024-03-17T21:26:22.971Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |