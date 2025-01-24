# GetIssuedCardRequest

## Example Usage

```typescript
import { GetIssuedCardRequest } from "moov-sdk/models/operations";

let value: GetIssuedCardRequest = {
  accountID: "3d38c086-1d65-4a75-885c-ccc8d4e68201",
  issuedCardID: "cc692d95-db65-4327-8504-2c722d887b81",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | The Moov business account for which the card was issued.   |
| `issuedCardID`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |