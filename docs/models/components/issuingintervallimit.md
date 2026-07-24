# IssuingIntervalLimit

Specifies the time frame for a velocity limit. `per-transaction` applies to each individual authorization and never resets. Time-based intervals (where supported) reset at midnight ET.

## Example Usage

```typescript
import { IssuingIntervalLimit } from "@moovio/sdk/models/components";

let value: IssuingIntervalLimit = "per-transaction";
```

## Values

```typescript
"per-transaction"
```