# TicketStatus

## Example Usage

```typescript
import { TicketStatus } from "@moovio/sdk/models/components";

let value: TicketStatus = "closed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"new" | "in-progress" | "on-hold" | "closed" | Unrecognized<string>
```