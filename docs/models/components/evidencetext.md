# EvidenceText

## Example Usage

```typescript
import { EvidenceText } from "@moovio/sdk/models/components";

let value: EvidenceText = {
  evidenceID: "035dffe4-f31f-43b0-bbe4-65b3274d38fa",
  disputeID: "fcbff714-2629-46ef-9849-e6847638458c",
  evidenceType: "other",
  text: "<value>",
  createdOn: new Date("2025-08-03T02:25:37.402Z"),
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