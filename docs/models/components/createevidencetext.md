# CreateEvidenceText

## Example Usage

```typescript
import { CreateEvidenceText } from "moov-sdk/models/components";

let value: CreateEvidenceText = {
  text: "<value>",
  evidenceType: "receipt",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `text`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The text to associate with the dispute as evidence.                |
| `evidenceType`                                                     | [components.EvidenceType](../../models/components/evidencetype.md) | :heavy_check_mark:                                                 | N/A                                                                |