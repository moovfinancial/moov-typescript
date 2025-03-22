# DisputeEvidenceResponse

## Example Usage

```typescript
import { DisputeEvidenceResponse } from "@moovio/sdk/models/components";

let value: DisputeEvidenceResponse = {
  evidenceID: "c87bc007-d32e-4e4d-9cf2-e0aae328f4c5",
  disputeID: "ac0986c5-8677-42c4-984d-df5ed92bfd10",
  evidenceType: "other",
  createdOn: new Date("2025-03-02T17:01:51.399Z"),
  updatedOn: new Date("2025-12-31T07:50:18.161Z"),
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