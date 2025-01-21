# InitiateMicroDepositsRequest

## Example Usage

```typescript
import { InitiateMicroDepositsRequest } from "moov-sdk/models/operations";

let value: InitiateMicroDepositsRequest = {
  accountID: "20bf9105-60d7-4fe8-aa54-28175c6e3e91",
  bankAccountID: "4ba16e6b-1d8f-48cf-ab95-066d3b0ea642",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bankAccountID`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |