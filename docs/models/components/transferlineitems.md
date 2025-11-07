# TransferLineItems

An optional collection of line items for a transfer.
When line items are provided, their total plus sales tax must equal the transfer amount.

## Example Usage

```typescript
import { TransferLineItems } from "@moovio/sdk/models/components";

let value: TransferLineItems = {
  items: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.TransferLineItem](../../models/components/transferlineitem.md)[] | :heavy_check_mark:                                                           | The list of line items.                                                      |