# CreateApplePaySessionRequest

## Example Usage

```typescript
import { CreateApplePaySessionRequest } from "moov-sdk/models/operations";

let value: CreateApplePaySessionRequest = {
  accountID: "7d9a342d-4821-4555-a95c-15a9174a2a74",
  createApplePaySession: {
    domain: "checkout.classbooker.dev",
    displayName: "Cierra_Armstrong",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `xMoovVersion`                                                                       | [components.Versions](../../models/components/versions.md)                           | :heavy_minus_sign:                                                                   | Specify an API version.                                                              |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the Moov account representing the merchant.                                    |
| `createApplePaySession`                                                              | [components.CreateApplePaySession](../../models/components/createapplepaysession.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |