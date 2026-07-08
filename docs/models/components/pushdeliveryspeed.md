# PushDeliverySpeed

Delivery speed options for push-to-card payouts.

## Example Usage

```typescript
import { PushDeliverySpeed } from "@moovio/sdk/models/components";

let value: PushDeliverySpeed = "instant";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"instant" | "deferred" | Unrecognized<string>
```