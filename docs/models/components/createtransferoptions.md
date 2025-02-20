# CreateTransferOptions

## Example Usage

```typescript
import { CreateTransferOptions } from "@moovio/sdk/models/components";

let value: CreateTransferOptions = {
  source: {},
  destination: {},
  amount: {
    currency: "USD",
    value: 1204,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `source`                                                                                   | [components.SourceDestinationOptions](../../models/components/sourcedestinationoptions.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `destination`                                                                              | [components.SourceDestinationOptions](../../models/components/sourcedestinationoptions.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `amount`                                                                                   | [components.Amount](../../models/components/amount.md)                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |