# GetDisputeRequest

## Example Usage

```typescript
import { GetDisputeRequest } from "moov-sdk/models/operations";

let value: GetDisputeRequest = {
  accountID: "8ebc395a-8a9b-4c0f-a62e-c69366c6cc67",
  disputeID: "03dc1a08-2d91-4aeb-91a9-ac4537613182",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |