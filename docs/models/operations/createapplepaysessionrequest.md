# CreateApplePaySessionRequest

## Example Usage

```typescript
import { CreateApplePaySessionRequest } from "@moovio/sdk/models/operations";

let value: CreateApplePaySessionRequest = {
  accountID: "e33c7f9e-02a6-4d6b-991b-b185761213d0",
  createApplePaySession: {
    domain: "checkout.classbooker.dev",
    displayName: "Presley_Farrell",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `xMoovVersion`                                                                       | [components.Versions](../../models/components/versions.md)                           | :heavy_minus_sign:                                                                   | Specify an API version.                                                              |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the Moov account representing the merchant.                                    |
| `createApplePaySession`                                                              | [components.CreateApplePaySession](../../models/components/createapplepaysession.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |