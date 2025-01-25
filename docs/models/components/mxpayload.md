# MxPayload

Describes the account to link to the Moov account using a MX processor token. 

`sandbox` - When linking a bank account to a `sandbox` account using an MX authorization token a default bank account routing number will
be used. The following default data will be used to generate the bank account in this flow:

```
  RoutingNumber: "123456780",
  BankName: "Gringotts Bank"
```

## Example Usage

```typescript
import { MxPayload } from "@moovio/sdk/models/components";

let value: MxPayload = {
  mx: {
    authorizationCode: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mx`                                                                                                                                                                                                                                                                                                                                | [components.MXAuthorizationCode](../../models/components/mxauthorizationcode.md)                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | The authorization code of a MX account which allows a processor to retrieve a linked payment account. <br/><br/>`sandbox` - When linking a bank account to a `sandbox` account using a MX authorization code it will utilize MX's sandbox environment. <br/>The MX authorization code provided must be generated from MX's sandbox environment. |