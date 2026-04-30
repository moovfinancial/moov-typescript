# LinkAccountTerminalApplicationResponse

## Example Usage

```typescript
import { LinkAccountTerminalApplicationResponse } from "@moovio/sdk/models/operations";

let value: LinkAccountTerminalApplicationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    accountID: "76d4c8a0-1f2b-4e3b-8f5c-7a9e1b2c3d4e",
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.AccountTerminalApplication](../../models/components/accountterminalapplication.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |