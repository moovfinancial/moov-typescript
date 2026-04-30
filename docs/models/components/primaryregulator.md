# PrimaryRegulator

If the business is a financial institution, this field describes its primary regulator.

## Example Usage

```typescript
import { PrimaryRegulator } from "@moovio/sdk/models/components";

let value: PrimaryRegulator = "OCC";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OCC" | "FDIC" | "NCUA" | "FRB" | "state-cu-regulator" | Unrecognized<string>
```