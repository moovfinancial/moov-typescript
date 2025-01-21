# GetSweepConfigRequest

## Example Usage

```typescript
import { GetSweepConfigRequest } from "moov-sdk/models/operations";

let value: GetSweepConfigRequest = {
  accountID: "701eb830-c432-4c9a-8eea-f30e4f34ed19",
  sweepConfigID: "19179fe9-8aef-40fc-b1ca-e78d7835409d",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sweepConfigID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |