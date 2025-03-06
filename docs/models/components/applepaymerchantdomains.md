# ApplePayMerchantDomains

## Example Usage

```typescript
import { ApplePayMerchantDomains } from "@moovio/sdk/models/components";

let value: ApplePayMerchantDomains = {
  accountID: "<id>",
  displayName: "Jakob10",
  domains: [
    "checkout.classbooker.dev",
  ],
  createdOn: new Date("2025-03-31T18:25:19.877Z"),
  updatedOn: new Date("2023-11-22T11:21:02.801Z"),
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