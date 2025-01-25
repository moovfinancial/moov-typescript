# GetDisputeEvidenceDataRequest

## Example Usage

```typescript
import { GetDisputeEvidenceDataRequest } from "@moovio/sdk/models/operations";

let value: GetDisputeEvidenceDataRequest = {
  accountID: "448b428d-674c-412f-ba8c-f3c5bbf10b9b",
  disputeID: "75c69e20-4c9f-484c-bada-7404063b31d0",
  evidenceID: "e187c940-7ee2-4d01-9f61-70083952f304",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `evidenceID`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |