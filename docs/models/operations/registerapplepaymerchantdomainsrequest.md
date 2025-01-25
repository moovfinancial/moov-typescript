# RegisterApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { RegisterApplePayMerchantDomainsRequest } from "@moovio/sdk/models/operations";

let value: RegisterApplePayMerchantDomainsRequest = {
  accountID: "b0047e64-9ebd-4228-9bf5-58a9b6d25c5a",
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