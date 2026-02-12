# CompleteMicroDepositsRequest

## Example Usage

```typescript
import { CompleteMicroDepositsRequest } from "@moovio/sdk/models/operations";

let value: CompleteMicroDepositsRequest = {
  accountID: "<id>",
  bankAccountID: "<id>",
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