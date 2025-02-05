# UpdateApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { UpdateApplePayMerchantDomainsRequest } from "@moovio/sdk/models/operations";

let value: UpdateApplePayMerchantDomainsRequest = {
  accountID: "35dffe4f-31f3-4b0b-be46-5b3274d38fad",
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
| `accountID`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the Moov account representing the merchant.                                                    |
| `updateApplePayMerchantDomains`                                                                      | [components.UpdateApplePayMerchantDomains](../../models/components/updateapplepaymerchantdomains.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |