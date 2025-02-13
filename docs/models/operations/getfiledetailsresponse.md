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
    fileID: "5802e016-b444-4d38-afb5-cf5b1e1584a8",
    fileName: "logo.png",
    accountID: "58ccb8a1-7d9f-441a-91c4-8cc7f744b660",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 860383,
    createdOn: new Date("2025-05-30T15:22:56.357Z"),
    updatedOn: new Date("2025-03-29T04:13:17.980Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |