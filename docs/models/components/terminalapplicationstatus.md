# TerminalApplicationStatus

Status of the terminal application.

## Example Usage

```typescript
import { TerminalApplicationStatus } from "@moovio/sdk/models/components";

let value: TerminalApplicationStatus = "enabled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"undefined" | "pending" | "enabled" | "disabled" | Unrecognized<string>
```