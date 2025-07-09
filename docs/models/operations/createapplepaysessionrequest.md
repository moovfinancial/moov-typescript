# CreateApplePaySessionRequest

## Example Usage

```typescript
import { CreateApplePaySessionRequest } from "@moovio/sdk/models/operations";

let value: CreateApplePaySessionRequest = {
  accountID: "99b20d1c-4f68-4fed-b683-f4400321c757",
  createApplePaySession: {
    domain: "checkout.classbooker.dev",
    displayName: "Sebastian.Marks86",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the Moov account representing the merchant.                                    |
| `createApplePaySession`                                                              | [components.CreateApplePaySession](../../models/components/createapplepaysession.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |