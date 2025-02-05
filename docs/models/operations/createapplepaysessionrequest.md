# CreateApplePaySessionRequest

## Example Usage

```typescript
import { CreateApplePaySessionRequest } from "@moovio/sdk/models/operations";

let value: CreateApplePaySessionRequest = {
  accountID: "9b35ae84-0b05-48e1-b605-94319baf0a99",
  createApplePaySession: {
    domain: "checkout.classbooker.dev",
    displayName: "Agustin33",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the Moov account representing the merchant.                                    |
| `createApplePaySession`                                                              | [components.CreateApplePaySession](../../models/components/createapplepaysession.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |