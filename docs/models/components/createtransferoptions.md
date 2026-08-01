# CreateTransferOptions

## Example Usage

```typescript
import { CreateTransferOptions } from "@moovio/sdk/models/components";

let value: CreateTransferOptions = {
  source: {},
  destination: {},
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `source`                                                                                   | [components.SourceDestinationOptions](../../models/components/sourcedestinationoptions.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `destination`                                                                              | [components.SourceDestinationOptions](../../models/components/sourcedestinationoptions.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `amount`                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                       | :heavy_check_mark:                                                                         | N/A                                                                                        |