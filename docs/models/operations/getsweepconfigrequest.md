# GetSweepConfigRequest

## Example Usage

```typescript
import { GetSweepConfigRequest } from "moov-sdk/models/operations";

let value: GetSweepConfigRequest = {
  accountID: "4c075c61-b057-4b51-bd0d-1222cc219b80",
  sweepConfigID: "bb31f7b1-8815-4ebb-be4c-198636db7fc0",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sweepConfigID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |