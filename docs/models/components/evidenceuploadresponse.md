# EvidenceUploadResponse

Details of a successfully uploaded evidence file.

## Example Usage

```typescript
import { EvidenceUploadResponse } from "@moovio/sdk/models/components";

let value: EvidenceUploadResponse = {
  evidenceID: "ec812d59-4eef-4e99-bf5a-75e97028f7ad",
  disputeID: "52f8e41e-67f6-49b3-84bc-3406e6c09ff9",
  filename: "example.file",
  mimeType: "<value>",
  size: 839896,
  evidenceType: "generic-evidence",
  createdOn: new Date("2023-01-28T01:12:49.790Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `evidenceID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the evidence.                                                                       |
| `disputeID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the dispute the evidence is associated with.                                        |
| `filename`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the evidence file.                                                                |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The MIME type of the evidence file.                                                           |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | The size of the evidence file.                                                                |
| `evidenceType`                                                                                | [components.EvidenceType](../../models/components/evidencetype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the evidence was uploaded.                                                  |