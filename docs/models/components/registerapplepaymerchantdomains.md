# RegisterApplePayMerchantDomains

## Example Usage

```typescript
import { RegisterApplePayMerchantDomains } from "@moovio/sdk/models/components";

let value: RegisterApplePayMerchantDomains = {
  domains: [
    "checkout.classbooker.dev",
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | A UTF-8 string to display in the Buy button.                                                     |                                                                                                  |
| `domains`                                                                                        | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | A unique list of fully-qualified, top-level or sub-domain names where you will accept Apple Pay. | [<br/>"checkout.classbooker.dev"<br/>]                                                           |