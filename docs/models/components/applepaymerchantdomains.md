# ApplePayMerchantDomains

## Example Usage

```typescript
import { ApplePayMerchantDomains } from "@moovio/sdk/models/components";

let value: ApplePayMerchantDomains = {
  accountID: "<id>",
  displayName: "Elisabeth_Bartell",
  domains: [
    "checkout.classbooker.dev",
  ],
  createdOn: new Date("2025-07-08T05:40:38.975Z"),
  updatedOn: new Date("2024-04-07T00:27:41.040Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accountID`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `displayName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | A UTF-8 string to display in the Buy button.                                                     |                                                                                                  |
| `domains`                                                                                        | *string*[]                                                                                       | :heavy_check_mark:                                                                               | A unique list of fully-qualified, top-level or sub-domain names where you will accept Apple Pay. | [<br/>"checkout.classbooker.dev"<br/>]                                                           |
| `createdOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `updatedOn`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |