# RevokeAuthTokenRequest

## Example Usage

```typescript
import { RevokeAuthTokenRequest } from "@moovio/sdk/models/operations";

let value: RevokeAuthTokenRequest = {
  revokeTokenRequest: {
    token: "<value>",
    clientId: "5clTR_MdVrrkgxw2",
    clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `xMoovVersion`                                                                 | [components.Versions](../../models/components/versions.md)                     | :heavy_minus_sign:                                                             | Specify an API version.                                                        |
| `revokeTokenRequest`                                                           | [components.RevokeTokenRequest](../../models/components/revoketokenrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |