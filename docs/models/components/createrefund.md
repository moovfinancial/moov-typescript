# CreateRefund

Specifies a partial amount to refund. 

Before v2026.10, this request body may be omitted. In v2026.10 and later, send an empty object to refund the full amount of the original transfer.

## Example Usage

```typescript
import { CreateRefund } from "@moovio/sdk/models/components";

let value: CreateRefund = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `amount`                                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Amount to refund. If omitted, the original transfer's full amount will be refunded. |