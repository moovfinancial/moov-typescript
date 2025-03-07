# CreateTerminalApplication

Describes a create terminal application request.

## Example Usage

```typescript
import { CreateTerminalApplication } from "@moovio/sdk/models/components";

let value: CreateTerminalApplication = {
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
| `platform`                                                                                       | [components.TerminalApplicationPlatform](../../models/components/terminalapplicationplatform.md) | :heavy_check_mark:                                                                               | Platform of the terminal application.                                                            | ios                                                                                              |
| `appBundleID`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app bundle identifier of the terminal application. Required if platform is `ios`.            |                                                                                                  |
| `packageName`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app package name of the terminal application. Required if platform is `android`.             |                                                                                                  |
| `sha256Digest`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app version of the terminal application. Required if paltform is `android`.                  |                                                                                                  |
| `versionCode`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The app version of the terminal application. Required if platform is `android`.                  |                                                                                                  |