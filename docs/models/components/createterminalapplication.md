# CreateTerminalApplication

Describes a create terminal application request.

## Example Usage

```typescript
import { CreateTerminalApplication } from "@moovio/sdk/models/components";

let value: CreateTerminalApplication = {
  platform: "android",
  packageName: "com.example.app",
  sha256Digest:
    "AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD",
  versionCode: "20332277",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `platform`                                                                                       | [components.TerminalApplicationPlatform](../../models/components/terminalapplicationplatform.md) | :heavy_check_mark:                                                                               | Platform of the terminal application.                                                            | ios                                                                                              |
| `appBundleID`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app bundle identifier of the terminal application. Required if platform is `ios`.            |                                                                                                  |
| `packageName`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app package name of the terminal application. Required if platform is `android`.             |                                                                                                  |
| `sha256Digest`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | The SHA-256 digest of the signing key for the application. Required if platform is `android`.    |                                                                                                  |
| `versionCode`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The version code of the Android application. Required if platform is `android`.                  |                                                                                                  |