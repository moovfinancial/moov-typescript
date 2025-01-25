# DisableBankAccountRequest

## Example Usage

```typescript
import { DisableBankAccountRequest } from "@moovio/sdk/models/operations";

let value: DisableBankAccountRequest = {
  accountID: "3700e6e7-6414-49c8-bc29-e33bc35a697c",
  bankAccountID: "d9970417-d9a3-442d-9482-155595c15a91",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |