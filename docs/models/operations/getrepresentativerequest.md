# GetRepresentativeRequest

## Example Usage

```typescript
import { GetRepresentativeRequest } from "moov-sdk/models/operations";

let value: GetRepresentativeRequest = {
  accountID: "b5c95206-65c1-4138-abe4-284f03c68da9",
  representativeID: "1195fde2-90b0-4a39-a40a-7b0802c3122d",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the account.                                         |
| `representativeID`                                         | *string*                                                   | :heavy_check_mark:                                         | ID of the representative.                                  |