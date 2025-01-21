# GetIssuedCardRequest

## Example Usage

```typescript
import { GetIssuedCardRequest } from "moov-sdk/models/operations";

let value: GetIssuedCardRequest = {
  accountID: "eaec21f2-a387-4bdf-b366-038e5bf21f04",
  issuedCardID: "42cb18e6-3b3e-467b-95f4-f6cc9c992e28",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | The Moov business account for which the card was issued.   |
| `issuedCardID`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |