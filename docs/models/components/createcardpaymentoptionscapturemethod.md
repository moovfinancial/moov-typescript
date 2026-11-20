# CreateCardPaymentOptionsCaptureMethod

How funds are captured. `automatic` (default) authorizes and captures the full amount right away.
`manual` authorizes only; capture later with the capture endpoint.

## Example Usage

```typescript
import { CreateCardPaymentOptionsCaptureMethod } from "@moovio/sdk/models/components";

let value: CreateCardPaymentOptionsCaptureMethod = "manual";
```

## Values

```typescript
"automatic" | "manual"
```