# GetApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { GetApplePayMerchantDomainsRequest } from "moov-sdk/models/operations";

let value: GetApplePayMerchantDomainsRequest = {
  accountID: "764149c8-c29e-433b-8c35-a697cdd99704",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the Moov account representing the merchant.          |