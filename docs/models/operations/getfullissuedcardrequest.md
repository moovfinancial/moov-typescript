# GetFullIssuedCardRequest

## Example Usage

```typescript
import { GetFullIssuedCardRequest } from "@moovio/sdk/models/operations";

let value: GetFullIssuedCardRequest = {
  accountID: "e45f66e2-77b6-4dae-b4c1-cd6bf2905289",
  issuedCardID: "fe9e5388-e0d9-4fb5-aa5e-088364acc634",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | The Moov business account for which the card was issued.   |
| `issuedCardID`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |