# GetDisputeRequest

## Example Usage

```typescript
import { GetDisputeRequest } from "moov-sdk/models/operations";

let value: GetDisputeRequest = {
  accountID: "333b7ac9-7682-4cec-8dd2-fa6e9fc5bb5e",
  disputeID: "5a7af1cd-4476-4837-8dea-4d632f183d3b",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |