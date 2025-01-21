# EvidenceText

## Example Usage

```typescript
import { EvidenceText } from "moov-sdk/models/components";

let value: EvidenceText = {
  evidenceID: "26296ef8-49e6-4847-a638-458c5ed04715",
  disputeID: "a9b35ae8-40b0-458e-a160-594319baf0a9",
  evidenceType: "other",
  text: "<value>",
  createdOn: new Date("2023-01-19T11:47:32.986Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `evidenceID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `disputeID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidenceType`                                                                                | [components.EvidenceType](../../models/components/evidencetype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |