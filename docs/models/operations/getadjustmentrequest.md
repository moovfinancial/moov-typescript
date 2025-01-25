# GetAdjustmentRequest

## Example Usage

```typescript
import { GetAdjustmentRequest } from "@moovio/sdk/models/operations";

let value: GetAdjustmentRequest = {
  accountID: "02e016b4-44d3-48fb-a5cf-5b1e1584a8b5",
  adjustmentID: "ccb8a17d-9f41-4a1c-b48c-c7f744b6604d",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `adjustmentID`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |