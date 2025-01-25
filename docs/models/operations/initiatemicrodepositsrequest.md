# InitiateMicroDepositsRequest

## Example Usage

```typescript
import { InitiateMicroDepositsRequest } from "@moovio/sdk/models/operations";

let value: InitiateMicroDepositsRequest = {
  accountID: "4a2a74b3-20d7-4811-b58b-7d60615fd366",
  bankAccountID: "001a6d47-b852-482f-a82b-1c720f4f881f",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |