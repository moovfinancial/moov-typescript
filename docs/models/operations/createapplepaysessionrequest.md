# CreateApplePaySessionRequest

## Example Usage

```typescript
import { CreateApplePaySessionRequest } from "@moovio/sdk/models/operations";

let value: CreateApplePaySessionRequest = {
  accountID: "<id>",
  createApplePaySession: {
    domain: "checkout.classbooker.dev",
    displayName: "Libbie0",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the Moov account representing the merchant.                                    |
| `createApplePaySession`                                                              | [components.CreateApplePaySession](../../models/components/createapplepaysession.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |