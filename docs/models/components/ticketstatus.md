# TicketStatus

## Example Usage

```typescript
import { TicketStatus } from "@moovio/sdk/models/components";

let value: TicketStatus = "closed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"new" | "in-progress" | "on-hold" | "closed" | Unrecognized<string>
```