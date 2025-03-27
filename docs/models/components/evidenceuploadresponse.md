# EvidenceUploadResponse

Details of a successfully uploaded evidence file.

## Example Usage

```typescript
import { EvidenceUploadResponse } from "@moovio/sdk/models/components";

let value: EvidenceUploadResponse = {
  evidenceID: "8f7ade52-f8e4-41e6-b7f6-9b34bc3406e6",
  disputeID: "09ff90db-0cb1-488e-b788-8dfe3d50817b",
  filename: "example.file",
  mimeType: "<value>",
  size: 322813,
  evidenceType: "cover-letter",
  createdOn: new Date("2023-03-04T14:45:05.139Z"),
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