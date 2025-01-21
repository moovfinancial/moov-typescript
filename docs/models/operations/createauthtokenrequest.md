# CreateAuthTokenRequest

## Example Usage

```typescript
import { CreateAuthTokenRequest } from "moov-sdk/models/operations";

let value: CreateAuthTokenRequest = {
  authTokenRequest: {
    grantType: "refresh_token",
    clientId: "5clTR_MdVrrkgxw2",
    clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
    scope: "/accounts.read /accounts.write",
    refreshToken: "eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `xMoovVersion`                                                             | [components.Versions](../../models/components/versions.md)                 | :heavy_minus_sign:                                                         | Specify an API version.                                                    |
| `authTokenRequest`                                                         | [components.AuthTokenRequest](../../models/components/authtokenrequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |