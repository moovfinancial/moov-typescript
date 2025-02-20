# CreateApplePaySession

## Example Usage

```typescript
import { CreateApplePaySession } from "@moovio/sdk/models/components";

let value: CreateApplePaySession = {
  domain: "checkout.classbooker.dev",
  displayName: "Isabella.Jones0",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A fully qualified top-level or sub-domain name where you will accept Apple Pay. Should not include "https". | checkout.classbooker.dev                                                                                    |
| `displayName`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A UTF-8 string to display in the Buy button.                                                                |                                                                                                             |