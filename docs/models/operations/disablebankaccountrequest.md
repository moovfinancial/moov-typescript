# DisableBankAccountRequest

## Example Usage

```typescript
import { DisableBankAccountRequest } from "moov-sdk/models/operations";

let value: DisableBankAccountRequest = {
  accountID: "df589c2d-b090-479a-ae4d-7acbcacee5f0",
  bankAccountID: "73818d25-a565-4752-a317-d1a6d5b68cf2",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |