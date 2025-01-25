# RevokeTokenRequest

## Example Usage

```typescript
import { RevokeTokenRequest } from "@moovio/sdk/models/components";

let value: RevokeTokenRequest = {
  token: "<value>",
  clientId: "5clTR_MdVrrkgxw2",
  clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `token`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The access or refresh token to revoke.                                                 |                                                                                        |
| `tokenTypeHint`                                                                        | [components.TokenTypeHint](../../models/components/tokentypehint.md)                   | :heavy_minus_sign:                                                                     | The type of token being revoked.                                                       |                                                                                        |
| `clientId`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Client ID can be provided here in the body, or as the Username in HTTP Basic Auth.     | 5clTR_MdVrrkgxw2                                                                       |
| `clientSecret`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Client secret can be provided here in the body, or as the Password in HTTP Basic Auth. | dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-                                                       |