# ReturnPolicyType

## Example Usage

```typescript
import { ReturnPolicyType } from "@moovio/sdk/models/components";

let value: ReturnPolicyType = "exchangeOnly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "exchangeOnly" | "withinThirtyDays" | "other" | Unrecognized<string>
```