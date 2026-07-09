# SourceSystem

Identifies the core banking source system that produced the deposit account payload.

The expected format of the request body depends on this value, so it must be supplied
in the `X-Source-System` header on every request.

## Example Usage

```typescript
import { SourceSystem } from "@moovio/sdk/models/components";

let value: SourceSystem = "jh_cif2020";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"jh_silverlake" | "jh_cif2020" | "jh_coredirector" | Unrecognized<string>
```