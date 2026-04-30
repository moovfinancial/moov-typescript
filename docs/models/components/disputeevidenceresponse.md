# DisputeEvidenceResponse

## Example Usage

```typescript
import { DisputeEvidenceResponse } from "@moovio/sdk/models/components";

let value: DisputeEvidenceResponse = {
  evidenceID: "<id>",
  disputeID: "<id>",
  evidenceType: "other",
  createdOn: new Date("2025-07-28T11:27:55.704Z"),
  updatedOn: new Date("2024-03-21T03:48:11.832Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `evidenceID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `disputeID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidenceType`                                                                                | [components.EvidenceType](../../models/components/evidencetype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `text`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | For text evidence, the text submitted as evidence.                                            |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | For file evidence, the MIME type of the file.                                                 |
| `filename`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | For file evidence, the name of the file.                                                      |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | For file evidence, the size of the file.                                                      |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `submittedOn`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the evidence was submitted for review.                                                   |