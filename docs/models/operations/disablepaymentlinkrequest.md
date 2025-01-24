# DisablePaymentLinkRequest

## Example Usage

```typescript
import { DisablePaymentLinkRequest } from "moov-sdk/models/operations";

let value: DisablePaymentLinkRequest = {
  accountID: "38c2f7c5-7fb0-434f-8ca1-c22d01e4ca1c",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `paymentLinkCode`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | uc7ZYKrMhi                                                 |