# UpdateApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { UpdateApplePayMerchantDomainsRequest } from "@moovio/sdk/models/operations";

let value: UpdateApplePayMerchantDomainsRequest = {
  accountID: "5dffe4f3-1f3b-40be-b465-b3274d38fadf",
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