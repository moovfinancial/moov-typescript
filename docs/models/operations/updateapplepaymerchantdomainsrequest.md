# UpdateApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { UpdateApplePayMerchantDomainsRequest } from "moov-sdk/models/operations";

let value: UpdateApplePayMerchantDomainsRequest = {
  accountID: "fa861729-bf46-42ed-bc08-31c3883700e6",
  updateApplePayMerchantDomains: {
    addDomains: [
      "pay.classbooker.dev",
    ],
    removeDomains: [
      "checkout.classbooker.dev",
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                                       | [components.Versions](../../models/components/versions.md)                                           | :heavy_minus_sign:                                                                                   | Specify an API version.                                                                              |
| `accountID`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the Moov account representing the merchant.                                                    |
| `updateApplePayMerchantDomains`                                                                      | [components.UpdateApplePayMerchantDomains](../../models/components/updateapplepaymerchantdomains.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |