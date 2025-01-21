# GetFullIssuedCardRequest

## Example Usage

```typescript
import { GetFullIssuedCardRequest } from "moov-sdk/models/operations";

let value: GetFullIssuedCardRequest = {
  accountID: "a6caf57a-6304-4d90-9c0f-8eee6252d93d",
  issuedCardID: "0261a390-251f-43ea-bfee-9f27c7fb3ce8",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | The Moov business account for which the card was issued.   |
| `issuedCardID`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |