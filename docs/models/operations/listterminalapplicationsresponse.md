# ListTerminalApplicationsResponse

## Example Usage

```typescript
import { ListTerminalApplicationsResponse } from "@moovio/sdk/models/operations";

let value: ListTerminalApplicationsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      terminalApplicationID: "12345678-1234-1234-1234-123456789012",
      status: "enabled",
      platform: "ios",
      appBundleID: "com.example.app",
      packageName: "com.example.app",
      sha256Digest: "1234567890",
      versionCode: "1.0.0",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.TerminalApplication](../../models/components/terminalapplication.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |