# GetApplePayMerchantDomainsResponse

## Example Usage

```typescript
import { GetApplePayMerchantDomainsResponse } from "@moovio/sdk/models/operations";

let value: GetApplePayMerchantDomainsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    accountID: "<id>",
    displayName: "Saige.Fritsch",
    domains: [
      "checkout.classbooker.dev",
    ],
    createdOn: new Date("2025-03-22T03:31:31.130Z"),
    updatedOn: new Date("2025-01-15T20:15:10.483Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |