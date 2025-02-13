# DisputeStatus

The status of a particular dispute. 

Read our [disputes guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/disputes/#dispute-statuses) to learn what each status means.

## Example Usage

```typescript
import { DisputeStatus } from "@moovio/sdk/models/components";

let value: DisputeStatus = "under-review";
```

## Values

```typescript
"response-needed" | "resolved" | "under-review" | "closed" | "accepted" | "expired" | "won" | "lost"
```