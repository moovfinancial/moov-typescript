# GetPaymentLinkQRCodeRequest

## Example Usage

```typescript
import { GetPaymentLinkQRCodeRequest } from "@moovio/sdk/models/operations";

let value: GetPaymentLinkQRCodeRequest = {
  accountID: "b68f4445-9ce0-4a99-bcfb-2fd41cf2a00c",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `paymentLinkCode`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | uc7ZYKrMhi                                                 |