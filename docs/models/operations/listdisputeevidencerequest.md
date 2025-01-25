# ListDisputeEvidenceRequest

## Example Usage

```typescript
import { ListDisputeEvidenceRequest } from "@moovio/sdk/models/operations";

let value: ListDisputeEvidenceRequest = {
  accountID: "96545ef1-baa0-44b7-b08d-ee873dcd31be",
  disputeID: "8a148e79-0f72-4582-b3ed-14a40b354222",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |