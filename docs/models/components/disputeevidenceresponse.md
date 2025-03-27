# DisputeEvidenceResponse

## Example Usage

```typescript
import { DisputeEvidenceResponse } from "@moovio/sdk/models/components";

let value: DisputeEvidenceResponse = {
  evidenceID: "8f4c54ac-0986-4c58-8677-2c484ddf5ed9",
  disputeID: "bfd107eb-faec-4812-bd59-4eefe99f5a75",
  evidenceType: "customer-communication",
  createdOn: new Date("2024-05-24T18:09:04.297Z"),
  updatedOn: new Date("2023-03-01T07:48:18.699Z"),
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