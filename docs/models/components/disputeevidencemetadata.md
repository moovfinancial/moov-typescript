# DisputeEvidenceMetadata

## Example Usage

```typescript
import { DisputeEvidenceMetadata } from "@moovio/sdk/models/components";

let value: DisputeEvidenceMetadata = {
  evidenceID: "cf79d7f9-ded2-4a61-964d-0f55026e1fd7",
  disputeID: "39006143-4201-49ff-962a-7f1c43a3a868",
  mimeType: "<value>",
  filename: "example.file",
  size: 706575,
  evidenceType: "terms-of-service",
  text: "<value>",
  createdOn: new Date("2024-01-31T03:47:25.523Z"),
  updatedOn: new Date("2025-06-27T04:59:29.330Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `evidenceID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `disputeID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `filename`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidenceType`                                                                                | [components.EvidenceType](../../models/components/evidencetype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The text submited as evidence.                                                                |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |