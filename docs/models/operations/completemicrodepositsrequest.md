# CompleteMicroDepositsRequest

## Example Usage

```typescript
import { CompleteMicroDepositsRequest } from "@moovio/sdk/models/operations";

let value: CompleteMicroDepositsRequest = {
  accountID: "f24d7e28-5576-45eb-9b49-cc5cb2d77799",
  bankAccountID: "da66c530-ee15-421e-a0f1-d955c5a87e8d",
  completeMicroDeposits: {
    amounts: [
      18,
      21,
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `bankAccountID`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `completeMicroDeposits`                                                              | [components.CompleteMicroDeposits](../../models/components/completemicrodeposits.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |