# TerminalApplicationStatus

Status of the terminal application.

## Example Usage

```typescript
import { TerminalApplicationStatus } from "@moovio/sdk/models/components";

let value: TerminalApplicationStatus = "enabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"undefined" | "pending" | "enabled" | "disabled" | Unrecognized<string>
```