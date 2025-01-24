# GetCardRequest

## Example Usage

```typescript
import { GetCardRequest } from "moov-sdk/models/operations";

let value: GetCardRequest = {
  accountID: "37d4a715-dfd2-45d8-acc1-57fe6168e44a",
  cardID: "01234567-89ab-cdef-0123-456789abcdef",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `cardID`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | 01234567-89ab-cdef-0123-456789abcdef                       |