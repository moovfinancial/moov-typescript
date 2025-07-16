# AccountTerminalApplication

Describes link between an account and a terminal application.

## Example Usage

```typescript
import { AccountTerminalApplication } from "@moovio/sdk/models/components";

let value: AccountTerminalApplication = {
  accountID: "76d4c8a0-1f2b-4e3b-8f5c-7a9e1b2c3d4e",
  terminalApplicationID: "12345678-1234-1234-1234-123456789012",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `accountID`                          | *string*                             | :heavy_check_mark:                   | ID of the merchant account.          | 76d4c8a0-1f2b-4e3b-8f5c-7a9e1b2c3d4e |
| `terminalApplicationID`              | *string*                             | :heavy_check_mark:                   | ID of the terminal application.      | 12345678-1234-1234-1234-123456789012 |