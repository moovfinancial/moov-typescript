# ListRepresentativesRequest

## Example Usage

```typescript
import { ListRepresentativesRequest } from "moov-sdk/models/operations";

let value: ListRepresentativesRequest = {
  accountID: "7fadd29f-17cf-416c-89e1-89dd790b0a8f",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the account.                                         |