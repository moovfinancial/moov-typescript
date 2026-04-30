# LinkAccountTerminalApplication

Describes a request to link an account with a terminal application.

## Example Usage

```typescript
import { LinkAccountTerminalApplication } from "@moovio/sdk/models/components";

let value: LinkAccountTerminalApplication = {
  terminalApplicationID: "12345678-1234-1234-1234-123456789012",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `terminalApplicationID`              | *string*                             | :heavy_check_mark:                   | ID of the terminal application.      | 12345678-1234-1234-1234-123456789012 |