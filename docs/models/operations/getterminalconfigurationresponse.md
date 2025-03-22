# GetTerminalConfigurationResponse

## Example Usage

```typescript
import { GetTerminalConfigurationResponse } from "@moovio/sdk/models/operations";

let value: GetTerminalConfigurationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    configuration: "Zm9vYmFyCg==",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `result`                                                                             | [components.TerminalConfiguration](../../models/components/terminalconfiguration.md) | :heavy_check_mark:                                                                   | N/A                                                                                  | {<br/>"configuration": "Zm9vYmFyCg=="<br/>}                                          |