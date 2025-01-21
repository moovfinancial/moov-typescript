# GetPaymentLinkRequest

## Example Usage

```typescript
import { GetPaymentLinkRequest } from "moov-sdk/models/operations";

let value: GetPaymentLinkRequest = {
  accountID: "67d99547-457d-4ed8-ab57-f527a214ea39",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `paymentLinkCode`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | uc7ZYKrMhi                                                 |