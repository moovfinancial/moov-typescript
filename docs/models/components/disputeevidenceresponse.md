# DisputeEvidenceResponse

## Example Usage

```typescript
import { DisputeEvidenceResponse } from "@moovio/sdk/models/components";

let value: DisputeEvidenceResponse = {
  evidenceID: "f8164716-9a19-4b55-9acd-60572e2f88e1",
  disputeID: "5a382b10-b27c-4613-965c-135e92f8c624",
  evidenceType: "cancelation-policy",
  createdOn: new Date("2023-01-15T12:36:07.533Z"),
  updatedOn: new Date("2024-10-06T03:57:32.818Z"),
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