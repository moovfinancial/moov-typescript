# CreateTerminalApplicationVersionResponse

## Example Usage

```typescript
import { CreateTerminalApplicationVersionResponse } from "@moovio/sdk/models/operations";

let value: CreateTerminalApplicationVersionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    version: "20440059",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `result`                                                                                       | [components.TerminalApplicationVersion](../../models/components/terminalapplicationversion.md) | :heavy_check_mark:                                                                             | N/A                                                                                            | {<br/>"version": "20440059"<br/>}                                                              |