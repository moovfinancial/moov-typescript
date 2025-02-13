# ListFilesResponse

## Example Usage

```typescript
import { ListFilesResponse } from "@moovio/sdk/models/operations";

let value: ListFilesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      fileID: "6e42e25b-436c-4e02-8f98-d00fdb27ee0c",
      fileName: "logo.png",
      accountID: "f6f545b3-d9ff-42f0-90ff-277dac7abb01",
      filePurpose: "representative_verification",
      fileStatus: "pending",
      metadata:
        "{\"error_code\": \"document-name-mismatch\", \"requirement_id\": \"document.individual.verification\", \"representative_id\": \"c63ab175-251d-497e-a267-7346d087e180\", \"comment\": \"testing comment\"",
      decisionReason: "not correct file",
      fileSizeBytes: 61197,
      createdOn: new Date("2024-02-24T18:09:40.072Z"),
      updatedOn: new Date("2024-03-02T23:09:58.976Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.FileDetails](../../models/components/filedetails.md)[] | :heavy_check_mark:                                                 | N/A                                                                |