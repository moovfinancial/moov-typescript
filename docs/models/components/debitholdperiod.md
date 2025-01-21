# DebitHoldPeriod

An optional override of your default ACH hold period in banking days. The hold period must be longer than or equal to your default setting.

## Example Usage

```typescript
import { DebitHoldPeriod } from "moov-sdk/models/components";

let value: DebitHoldPeriod = "2-days";
```

## Values

```typescript
"no-hold" | "1-day" | "2-days"
```