# MXAuthorizationCode

The authorization code of a MX account which allows a processor to retrieve a linked payment account. 

`sandbox` - When linking a bank account to a `sandbox` account using a MX authorization code it will utilize MX's sandbox environment. 
The MX authorization code provided must be generated from MX's sandbox environment.

## Example Usage

```typescript
import { MXAuthorizationCode } from "@moovio/sdk/models/components";

let value: MXAuthorizationCode = {
  authorizationCode: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `authorizationCode` | *string*            | :heavy_check_mark:  | N/A                 |