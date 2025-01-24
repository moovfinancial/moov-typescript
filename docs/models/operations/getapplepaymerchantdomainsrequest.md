# GetApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { GetApplePayMerchantDomainsRequest } from "moov-sdk/models/operations";

let value: GetApplePayMerchantDomainsRequest = {
  accountID: "33dc60f2-dcfc-4536-a3bd-a2097358a7f0",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the Moov account representing the merchant.          |