# ScheduledTransferLineItems

Line items for a scheduled transfer.

## Example Usage

```typescript
import { ScheduledTransferLineItems } from "@moovio/sdk/models/components";

let value: ScheduledTransferLineItems = {
  items: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.ScheduledTransferLineItem](../../models/components/scheduledtransferlineitem.md)[] | :heavy_check_mark:                                                                             | The list of line items.                                                                        |