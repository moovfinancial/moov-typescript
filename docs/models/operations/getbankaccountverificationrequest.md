# GetBankAccountVerificationRequest

## Example Usage

```typescript
import { GetBankAccountVerificationRequest } from "moov-sdk/models/operations";

let value: GetBankAccountVerificationRequest = {
  accountID: "72b7e0d2-e580-4b3e-ba44-2c74fc9c1a5b",
  bankAccountID: "c9b740a2-7ae9-437a-a3bc-8d38ebc395a8",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |