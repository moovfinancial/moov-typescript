# GetApplePayMerchantDomainsResponse

## Example Usage

```typescript
import { GetApplePayMerchantDomainsResponse } from "@moovio/sdk/models/operations";

let value: GetApplePayMerchantDomainsResponse = {
  headers: {
    "key": [],
  },
  result: {
    accountID: "<id>",
    displayName: "Jadyn64",
    domains: [
      "checkout.classbooker.dev",
    ],
    createdOn: new Date("2025-03-08T02:27:01.578Z"),
    updatedOn: new Date("2025-11-27T16:53:47.495Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |