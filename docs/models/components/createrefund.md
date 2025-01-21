# CreateRefund

Specifies a partial amount to refund. 

This request body is optional, an empty body will issue a refund for the full amount of the original transfer.

## Example Usage

```typescript
import { CreateRefund } from "moov-sdk/models/components";

let value: CreateRefund = {
  amount: 1000,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `amount`                                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | Amount to refund in cents. If null, the original transfer's full amount will be refunded. | 1000                                                                                      |