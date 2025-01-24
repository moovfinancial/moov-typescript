# DeleteRepresentativeRequest

## Example Usage

```typescript
import { DeleteRepresentativeRequest } from "moov-sdk/models/operations";

let value: DeleteRepresentativeRequest = {
  accountID: "6d8d8ae0-e2c9-45fd-a435-52eed7c5de87",
  representativeID: "316cad71-8063-4d27-96d8-793851c54004",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the account.                                         |
| `representativeID`                                         | *string*                                                   | :heavy_check_mark:                                         | ID of the representative.                                  |