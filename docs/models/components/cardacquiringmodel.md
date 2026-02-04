# CardAcquiringModel

Specifies the card processing pricing model

## Example Usage

```typescript
import { CardAcquiringModel } from "@moovio/sdk/models/components";

let value: CardAcquiringModel = "cost-plus";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cost-plus" | "flat-rate" | Unrecognized<string>
```