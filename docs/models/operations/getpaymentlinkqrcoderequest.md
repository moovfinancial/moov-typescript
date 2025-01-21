# GetPaymentLinkQRCodeRequest

## Example Usage

```typescript
import { GetPaymentLinkQRCodeRequest } from "moov-sdk/models/operations";

let value: GetPaymentLinkQRCodeRequest = {
  accountID: "00622adc-5ed8-4702-918a-9dad22e53efa",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `paymentLinkCode`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | uc7ZYKrMhi                                                 |