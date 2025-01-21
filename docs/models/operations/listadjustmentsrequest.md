# ListAdjustmentsRequest

## Example Usage

```typescript
import { ListAdjustmentsRequest } from "moov-sdk/models/operations";

let value: ListAdjustmentsRequest = {
  accountID: "aa9a98c5-7635-4056-a133-352b5192026b",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_minus_sign:                                         | A wallet ID to filter adjustments by.                      |