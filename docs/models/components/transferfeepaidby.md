# TransferFeePaidBy

Indicates which party bears fees for a transfer, keyed by fee type.

## Example Usage

```typescript
import { TransferFeePaidBy } from "@moovio/sdk/models/components";

let value: TransferFeePaidBy = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `payout`                                                                | [components.FeePaidBy](../../models/components/feepaidby.md)            | :heavy_minus_sign:                                                      | For payouts, indicates which party bears the fee. Defaults to `source`. |