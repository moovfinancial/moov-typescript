# MonthlyVolumeRange

The low value in each range is included. The high value in each range is excluded.

## Example Usage

```typescript
import { MonthlyVolumeRange } from "@moovio/sdk/models/components";

let value: MonthlyVolumeRange = "100k-250k";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"under-10k" | "10k-50k" | "50k-100k" | "100k-250k" | "250k-500k" | "500k-1m" | "1m-5m" | "over-5m" | Unrecognized<string>
```