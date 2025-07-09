# ListFilesResponse

## Example Usage

```typescript
import { ListFilesResponse } from "@moovio/sdk/models/operations";

let value: ListFilesResponse = {
  headers: {},
  result: [
    {
      fileID: "f1a0d522-1228-4727-a4bb-6e6f38851344",
      fileName: "logo.png",
      accountID: "f4745019-057a-4af9-897d-f4effefdb481",
      filePurpose: "representative_verification",
      fileStatus: "pending",
      metadata:
        "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
      decisionReason: "not correct file",
      fileSizeBytes: 662879,
      createdOn: new Date("2024-10-03T19:47:03.124Z"),
      updatedOn: new Date("2023-07-06T06:10:57.647Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.FileDetails](../../models/components/filedetails.md)[] | :heavy_check_mark:                                                 | N/A                                                                |