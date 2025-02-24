# CreateTerminalApplicationResponse

## Example Usage

```typescript
import { CreateTerminalApplicationResponse } from "@moovio/sdk/models/operations";

let value: CreateTerminalApplicationResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    terminalApplicationID: "01234567-89ab-cdef-0123-456789abcdef",
    status: "enabled",
    platform: "ios",
    appBundleID: "com.example.app",
    packageName: "com.example.app",
    sha256Digest: "1234567890",
    versionCode: "1.0.0",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                       |
| `result`                                                                                                                                                                                                                              | [components.TerminalApplication](../../models/components/terminalapplication.md)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                   | {<br/>"terminalApplicationID": "01234567-89ab-cdef-0123-456789abcdef",<br/>"status": "enabled",<br/>"platform": "ios",<br/>"appBundleID": "com.example.app",<br/>"packageName": "com.example.app",<br/>"sha256Digest": "1234567890",<br/>"versionCode": "1.0.0"<br/>} |