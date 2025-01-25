# GetPaymentLinkRequest

## Example Usage

```typescript
import { GetPaymentLinkRequest } from "@moovio/sdk/models/operations";

let value: GetPaymentLinkRequest = {
  accountID: "ae19a4c1-3084-41e3-a949-ab40dfe1c7a9",
  paymentLinkCode: "uc7ZYKrMhi",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |                                                            |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `paymentLinkCode`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | uc7ZYKrMhi                                                 |