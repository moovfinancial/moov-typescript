# GetBankAccountVerificationRequest

## Example Usage

```typescript
import { GetBankAccountVerificationRequest } from "moov-sdk/models/operations";

let value: GetBankAccountVerificationRequest = {
  accountID: "0b3402d3-f24d-464b-b0ed-1cf79a4a76ec",
  bankAccountID: "d09ba460-1893-4770-829f-a1d619365a61",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |