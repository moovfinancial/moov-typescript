# CreateAccountError

## Example Usage

```typescript
import { CreateAccountError } from "@moovio/sdk/models/components";

let value: CreateAccountError = {
  capabilities: {
    "0": "first element failed validation...",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountType`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `profile`                                                                            | [components.CreateProfileError](../../models/components/createprofileerror.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `metadata`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `termsOfService`                                                                     | [components.TermsOfServiceError](../../models/components/termsofserviceerror.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `foreignID`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `customerSupport`                                                                    | [components.CustomerSupportError](../../models/components/customersupporterror.md)   | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `settings`                                                                           | [components.CreateAccountSettings](../../models/components/createaccountsettings.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `capabilities`                                                                       | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | {<br/>"0": "first element failed validation..."<br/>}                                |