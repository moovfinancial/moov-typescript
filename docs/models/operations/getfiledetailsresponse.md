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
    fileID: "683af151-0735-484c-a0f7-4ccd7859c1dc",
    fileName: "logo.png",
    accountID: "75b8e516-f135-4e64-9521-b432b75b76b2",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 780249,
    createdOn: new Date("2023-11-13T17:26:07.099Z"),
    updatedOn: new Date("2023-07-15T19:02:41.285Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |