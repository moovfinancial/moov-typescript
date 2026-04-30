# TerminalApplicationVersion

Describes a terminal application version.

## Example Usage

```typescript
import { TerminalApplicationVersion } from "@moovio/sdk/models/components";

let value: TerminalApplicationVersion = {
  version: "20440059",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `version`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The app version of the terminal application (version code for Android terminal application). |