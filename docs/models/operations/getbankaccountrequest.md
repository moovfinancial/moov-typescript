# GetBankAccountRequest

## Example Usage

```typescript
import { GetBankAccountRequest } from "@moovio/sdk/models/operations";

let value: GetBankAccountRequest = {
  accountID: "c3e0c7d7-13f5-42c0-a140-fb8ca23d5760",
  bankAccountID: "8a4636af-a861-4729-abf4-62edc0831c38",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |