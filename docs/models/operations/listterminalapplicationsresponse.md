# ListTerminalApplicationsResponse

## Example Usage

```typescript
import { ListTerminalApplicationsResponse } from "@moovio/sdk/models/operations";

let value: ListTerminalApplicationsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      terminalApplicationID: "01234567-89ab-cdef-0123-456789abcdef",
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