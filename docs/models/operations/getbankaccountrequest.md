# GetBankAccountRequest

## Example Usage

```typescript
import { GetBankAccountRequest } from "moov-sdk/models/operations";

let value: GetBankAccountRequest = {
  accountID: "34eb7b66-284a-46dc-929b-81865953b3cf",
  bankAccountID: "c2cf842e-5766-4cea-8f39-abc5e24794e7",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |