# EvidenceUploadResponse

Details of a successfully uploaded evidence file.

## Example Usage

```typescript
import { EvidenceUploadResponse } from "@moovio/sdk/models/components";

let value: EvidenceUploadResponse = {
  evidenceID: "aaf787b5-084b-42dc-a62d-51802275b144",
  disputeID: "e78cdc41-3988-4160-aa3b-802eed95fe01",
  filename: "example.file",
  mimeType: "<value>",
  size: 690525,
  evidenceType: "terms-of-service",
  createdOn: new Date("2023-07-19T13:05:06.436Z"),
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