# MonthlyVolumeRange

The low value in each range is included. The high value in each range is excluded.

## Example Usage

```typescript
import { MonthlyVolumeRange } from "@moovio/sdk/models/components";

let value: MonthlyVolumeRange = "100K-250K";
```

## Values

```typescript
"under-10k" | "10K-50K" | "50K-100K" | "100K-250K" | "250K-500K" | "500K-1M" | "1M-5M" | "over-5m"
```