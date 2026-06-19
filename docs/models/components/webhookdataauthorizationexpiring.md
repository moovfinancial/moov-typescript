# WebhookDataAuthorizationExpiring

## Example Usage

```typescript
import { WebhookDataAuthorizationExpiring } from "@moovio/sdk/models/components";

let value: WebhookDataAuthorizationExpiring = {
  merchantAccountID: "<id>",
  partnerAccountID: "<id>",
  authorizationID: "<id>",
  expiresOn: new Date("2026-07-21T20:32:06.125Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `merchantAccountID`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `partnerAccountID`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `authorizationID`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresOn`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |