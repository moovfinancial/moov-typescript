# CreateTransferConfigRequest

## Example Usage

```typescript
import { CreateTransferConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateTransferConfigRequest = {
  accountID: "<id>",
  createTransferConfig: {
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Your Moov account ID.                                                              |
| `createTransferConfig`                                                             | [components.CreateTransferConfig](../../models/components/createtransferconfig.md) | :heavy_check_mark:                                                                 | N/A                                                                                |