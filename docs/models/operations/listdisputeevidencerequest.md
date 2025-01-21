# ListDisputeEvidenceRequest

## Example Usage

```typescript
import { ListDisputeEvidenceRequest } from "moov-sdk/models/operations";

let value: ListDisputeEvidenceRequest = {
  accountID: "f123332b-3336-4f54-9153-c1244dc9459b",
  disputeID: "8ea81239-105b-4bcb-8973-9a1918211e94",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |