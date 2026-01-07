# EvidenceTextResponse

## Example Usage

```typescript
import { EvidenceTextResponse } from "@moovio/sdk/models/components";

let value: EvidenceTextResponse = {
  evidenceID: "ce18db19-7119-46f2-bef2-0709738305e3",
  disputeID: "ce688f13-246d-4c19-bbc0-6464e85b00ca",
  evidenceType: "generic-evidence",
  text: "<value>",
  createdOn: new Date("2026-01-30T02:22:00.844Z"),
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