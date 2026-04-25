# TipCalculationBasis

Defines which amount should be used when calculating the final payment total. This calculation applies for percentage tip values.
- `pre-tax`: Tip amounts are calculated using the subtotal amount before taxes
- `post-tax`: Tip amounts are calculated using the subtotal amount + taxes

## Example Usage

```typescript
import { TipCalculationBasis } from "@moovio/sdk/models/components";

let value: TipCalculationBasis = "post-tax";
```

## Values

```typescript
"pre-tax" | "post-tax"
```