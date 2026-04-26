# UpdateTransferConfigRequest

## Example Usage

```typescript
import { UpdateTransferConfigRequest } from "@moovio/sdk/models/operations";

let value: UpdateTransferConfigRequest = {
  accountID: "<id>",
  putTransferConfig: {
    tipPresets: {
      fixedAmountOptions: [
        {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `putTransferConfig`                                                          | [components.PutTransferConfig](../../models/components/puttransferconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |