# RegisterApplePayMerchantDomainsResponse

## Example Usage

```typescript
import { RegisterApplePayMerchantDomainsResponse } from "@moovio/sdk/models/operations";

let value: RegisterApplePayMerchantDomainsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    accountID: "<id>",
    displayName: "Darien_Rosenbaum",
    domains: [
      "checkout.classbooker.dev",
    ],
    createdOn: new Date("2025-11-13T10:25:28.069Z"),
    updatedOn: new Date("2025-03-08T02:27:01.578Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |