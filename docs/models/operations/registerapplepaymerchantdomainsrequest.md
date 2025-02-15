# RegisterApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { RegisterApplePayMerchantDomainsRequest } from "@moovio/sdk/models/operations";

let value: RegisterApplePayMerchantDomainsRequest = {
  accountID: "53900614-3420-419f-af62-a7f1c43a3a86",
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