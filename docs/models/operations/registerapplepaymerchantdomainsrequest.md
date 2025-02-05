# RegisterApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { RegisterApplePayMerchantDomainsRequest } from "@moovio/sdk/models/operations";

let value: RegisterApplePayMerchantDomainsRequest = {
  accountID: "75390061-4342-4019-9ff6-2a7f1c43a3a8",
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
| `accountID`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | ID of the Moov account representing the merchant.                                                        |
| `registerApplePayMerchantDomains`                                                                        | [components.RegisterApplePayMerchantDomains](../../models/components/registerapplepaymerchantdomains.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |