# CreateTerminalApplicationVersionRequest

## Example Usage

```typescript
import { CreateTerminalApplicationVersionRequest } from "@moovio/sdk/models/operations";

let value: CreateTerminalApplicationVersionRequest = {
  terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  terminalApplicationVersion: {
    version: "20440059",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `terminalApplicationID`                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | 12345678-1234-1234-1234-123456789012                                                           |
| `terminalApplicationVersion`                                                                   | [components.TerminalApplicationVersion](../../models/components/terminalapplicationversion.md) | :heavy_check_mark:                                                                             | N/A                                                                                            | {<br/>"version": "20440059"<br/>}                                                              |