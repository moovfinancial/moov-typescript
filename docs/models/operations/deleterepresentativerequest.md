# DeleteRepresentativeRequest

## Example Usage

```typescript
import { DeleteRepresentativeRequest } from "moov-sdk/models/operations";

let value: DeleteRepresentativeRequest = {
  accountID: "ac9ceb54-aa0b-4302-ba8d-1da3bb14a6c8",
  representativeID: "1b784435-33f7-4a59-a79b-ac21573cbeb1",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the account.                                         |
| `representativeID`                                         | *string*                                                   | :heavy_check_mark:                                         | ID of the representative.                                  |