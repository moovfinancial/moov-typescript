# FeeModel

Specifies the pricing model used for the calculation of the final fee.

## Example Usage

```typescript
import { FeeModel } from "@moovio/sdk/models/components";

let value: FeeModel = "variable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fixed" | "blended" | "variable" | Unrecognized<string>
```