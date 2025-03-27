# EvidenceTextResponse

## Example Usage

```typescript
import { EvidenceTextResponse } from "@moovio/sdk/models/components";

let value: EvidenceTextResponse = {
  evidenceID: "95833dcd-7a73-40eb-bc1e-2dcba3a1d37e",
  disputeID: "078d916a-f6f8-4769-866f-7c83fe2e39e9",
  evidenceType: "cancelation-policy",
  text: "<value>",
  createdOn: new Date("2025-01-13T17:07:31.171Z"),
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