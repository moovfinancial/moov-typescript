# GetAdjustmentRequest

## Example Usage

```typescript
import { GetAdjustmentRequest } from "moov-sdk/models/operations";

let value: GetAdjustmentRequest = {
  accountID: "0c5a060d-2a42-4e9e-a4df-6e55ff3d5fde",
  adjustmentID: "438ab286-3848-43e5-b91a-4f693dc3e0c7",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `adjustmentID`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |