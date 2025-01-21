# RegisterApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { RegisterApplePayMerchantDomainsRequest } from "moov-sdk/models/operations";

let value: RegisterApplePayMerchantDomainsRequest = {
  accountID: "713f52c0-140f-4b8c-aa23-d5760b8a4636",
  registerApplePayMerchantDomains: {
    domains: [
      "checkout.classbooker.dev",
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                                           | [components.Versions](../../models/components/versions.md)                                               | :heavy_minus_sign:                                                                                       | Specify an API version.                                                                                  |
| `accountID`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | ID of the Moov account representing the merchant.                                                        |
| `registerApplePayMerchantDomains`                                                                        | [components.RegisterApplePayMerchantDomains](../../models/components/registerapplepaymerchantdomains.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |