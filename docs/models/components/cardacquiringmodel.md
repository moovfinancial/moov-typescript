# CardAcquiringModel

Specifies the card processing pricing model

## Example Usage

```typescript
import { CardAcquiringModel } from "@moovio/sdk/models/components";

let value: CardAcquiringModel = "cost-plus";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cost-plus" | "flat-rate" | Unrecognized<string>
```