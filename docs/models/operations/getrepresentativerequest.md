# GetRepresentativeRequest

## Example Usage

```typescript
import { GetRepresentativeRequest } from "moov-sdk/models/operations";

let value: GetRepresentativeRequest = {
  accountID: "64948980-5c58-4533-abae-6a77d7e911f6",
  representativeID: "62239850-56cb-433a-aa81-40cce1eefc44",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the account.                                         |
| `representativeID`                                         | *string*                                                   | :heavy_check_mark:                                         | ID of the representative.                                  |