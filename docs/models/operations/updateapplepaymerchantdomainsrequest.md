# UpdateApplePayMerchantDomainsRequest

## Example Usage

```typescript
import { UpdateApplePayMerchantDomainsRequest } from "moov-sdk/models/operations";

let value: UpdateApplePayMerchantDomainsRequest = {
  accountID: "24e7350c-390d-4204-9e48-64ecc8d7773e",
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