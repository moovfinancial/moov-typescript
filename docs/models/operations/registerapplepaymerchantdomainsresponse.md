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
    displayName: "Edmund82",
    domains: [
      "checkout.classbooker.dev",
    ],
    createdOn: new Date("2023-02-20T10:10:34.700Z"),
    updatedOn: new Date("2023-09-12T23:01:13.510Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |