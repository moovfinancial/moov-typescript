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
    displayName: "Tressie_Langosh40",
    domains: [
      "checkout.classbooker.dev",
    ],
    createdOn: new Date("2024-10-01T13:00:09.196Z"),
    updatedOn: new Date("2025-09-05T13:21:07.160Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |