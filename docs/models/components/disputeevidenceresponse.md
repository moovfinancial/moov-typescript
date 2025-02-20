# DisputeEvidenceResponse

## Example Usage

```typescript
import { DisputeEvidenceResponse } from "@moovio/sdk/models/components";

let value: DisputeEvidenceResponse = {
  evidenceID: "ab892e67-aeb7-4740-af14-f9db0217db36",
  disputeID: "ee86aaf7-87b5-4084-ab2d-c62d51802275",
  evidenceType: "receipt",
  createdOn: new Date("2023-12-02T00:07:54.191Z"),
  updatedOn: new Date("2023-11-24T08:56:53.231Z"),
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