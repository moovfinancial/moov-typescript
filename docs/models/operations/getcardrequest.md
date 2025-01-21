# GetCardRequest

## Example Usage

```typescript
import { GetCardRequest } from "moov-sdk/models/operations";

let value: GetCardRequest = {
  accountID: "eaa84f74-b954-431a-9830-0b3402d3f24d",
  cardID: "01234567-89ab-cdef-0123-456789abcdef",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `cardID`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | 01234567-89ab-cdef-0123-456789abcdef                       |