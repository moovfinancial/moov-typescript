# EvidenceUploadResponse

Details of a successfully uploaded evidence file.

## Example Usage

```typescript
import { EvidenceUploadResponse } from "@moovio/sdk/models/components";

let value: EvidenceUploadResponse = {
  evidenceID: "db74d673-d8a6-4040-90f1-7d636d0730c0",
  disputeID: "82e629a6-0a32-4d87-8c79-6e9eec8a3edc",
  filename: "example.file",
  mimeType: "<value>",
  size: 194527,
  evidenceType: "other",
  createdOn: new Date("2025-06-05T17:21:16.311Z"),
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