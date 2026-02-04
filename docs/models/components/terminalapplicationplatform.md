# TerminalApplicationPlatform

Platform of the terminal application.

## Example Usage

```typescript
import { TerminalApplicationPlatform } from "@moovio/sdk/models/components";

let value: TerminalApplicationPlatform = "ios";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"undefined" | "ios" | "android" | Unrecognized<string>
```