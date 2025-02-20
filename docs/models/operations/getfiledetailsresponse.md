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
    fileID: "4dcb0047-e649-4ebd-b228-bf558a9b6d25",
    fileName: "logo.png",
    accountID: "5a424e73-50c3-490d-9204-e4864ecc8d77",
    filePurpose: "representative_verification",
    fileStatus: "pending",
    metadata:
      "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
    decisionReason: "not correct file",
    fileSizeBytes: 236910,
    createdOn: new Date("2025-10-09T07:44:18.634Z"),
    updatedOn: new Date("2023-10-11T14:10:39.907Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.FileDetails](../../models/components/filedetails.md) | :heavy_check_mark:                                               | N/A                                                              |