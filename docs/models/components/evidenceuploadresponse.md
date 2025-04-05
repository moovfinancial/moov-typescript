# EvidenceUploadResponse

Details of a successfully uploaded evidence file.

## Example Usage

```typescript
import { EvidenceUploadResponse } from "@moovio/sdk/models/components";

let value: EvidenceUploadResponse = {
  evidenceID: "defc036b-d6f6-4764-acf6-2f5c44b9408c",
  disputeID: "2e6e2fe6-7154-44f3-b2cf-6795dcdc2db6",
  filename: "example.file",
  mimeType: "<value>",
  size: 134269,
  evidenceType: "terms-of-service",
  createdOn: new Date("2023-11-18T22:49:04.849Z"),
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