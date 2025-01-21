# DisableCardRequest

## Example Usage

```typescript
import { DisableCardRequest } from "moov-sdk/models/operations";

let value: DisableCardRequest = {
  accountID: "7029fa1d-6193-465a-b613-8c0919d37c22",
  cardID: "01234567-89ab-cdef-0123-456789abcdef",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `cardID`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | 01234567-89ab-cdef-0123-456789abcdef                       |