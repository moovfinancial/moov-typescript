# PrimaryRegulator

If the business is a financial institution, this field describes its primary regulator.

## Example Usage

```typescript
import { PrimaryRegulator } from "@moovio/sdk/models/components";

let value: PrimaryRegulator = "OCC";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OCC" | "FDIC" | "NCUA" | "FRB" | "state-cu-regulator" | Unrecognized<string>
```