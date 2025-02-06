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
    fileID: "9be704de-54e5-4a41-88e9-3ac58a2f7f37",
    fileName: "logo.png",
    accountID: "0366ea6f-95b7-4ee5-984a-fd51f6457ff4",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 511807,
    createdOn: new Date("2023-01-09T23:21:30.384Z"),
    updatedOn: new Date("2023-07-11T14:54:03.454Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |