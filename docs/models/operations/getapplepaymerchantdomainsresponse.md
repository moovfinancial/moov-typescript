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
    displayName: "Amanda34",
    domains: [
      "checkout.classbooker.dev",
    ],
    createdOn: new Date("2025-01-15T20:15:10.483Z"),
    updatedOn: new Date("2024-11-13T03:12:00.033Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |