# FeeModel

Specifies the pricing model used for the calculation of the final fee.

## Example Usage

```typescript
import { FeeModel } from "@moovio/sdk/models/components";

let value: FeeModel = "variable";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"fixed" | "blended" | "variable" | Unrecognized<string>
```