# ListAdjustmentsRequest

## Example Usage

```typescript
import { ListAdjustmentsRequest } from "moov-sdk/models/operations";

let value: ListAdjustmentsRequest = {
  accountID: "366ea6f9-5b7e-4e58-a4af-d51f6457ff45",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_minus_sign:                                         | A wallet ID to filter adjustments by.                      |