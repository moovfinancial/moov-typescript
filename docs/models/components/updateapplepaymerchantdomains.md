# UpdateApplePayMerchantDomains

## Example Usage

```typescript
import { UpdateApplePayMerchantDomains } from "moov-sdk/models/components";

let value: UpdateApplePayMerchantDomains = {
  addDomains: [
    "pay.classbooker.dev",
  ],
  removeDomains: [
    "checkout.classbooker.dev",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `addDomains`                                                               | *string*[]                                                                 | :heavy_minus_sign:                                                         | A unique list of fully-qualified, top-level or sub-domain names to add.    | [<br/>"pay.classbooker.dev"<br/>]                                          |
| `removeDomains`                                                            | *string*[]                                                                 | :heavy_minus_sign:                                                         | A unique list of fully-qualified, top-level or sub-domain names to remove. | [<br/>"checkout.classbooker.dev"<br/>]                                     |