# TerminalApplication

Describes a terminal application.

## Example Usage

```typescript
import { TerminalApplication } from "@moovio/sdk/models/components";

let value: TerminalApplication = {
  terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  status: "enabled",
  platform: "ios",
  appBundleID: "com.example.app",
  packageName: "com.example.app",
  sha256Digest: "1234567890",
  versionCode: "1.0.0",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `terminalApplicationID`                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | ID of the terminal application.                                                                  | 12345678-1234-1234-1234-123456789012                                                             |
| `status`                                                                                         | [components.TerminalApplicationStatus](../../models/components/terminalapplicationstatus.md)     | :heavy_check_mark:                                                                               | Status of the terminal application.                                                              | enabled                                                                                          |
| `platform`                                                                                       | [components.TerminalApplicationPlatform](../../models/components/terminalapplicationplatform.md) | :heavy_check_mark:                                                                               | Platform of the terminal application.                                                            | ios                                                                                              |
| `appBundleID`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app bundle identifier of the terminal application. Will be returned if platform is `ios`.    |                                                                                                  |
| `packageName`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app package name of the terminal application. Will be returned if platform is `android`.     |                                                                                                  |
| `sha256Digest`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app version of the terminal application Will be returned if platform is `android`.           |                                                                                                  |
| `versionCode`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app version of the terminal application Will be returned if platform is `android`.           |                                                                                                  |