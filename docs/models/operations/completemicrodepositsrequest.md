# CompleteMicroDepositsRequest

## Example Usage

```typescript
import { CompleteMicroDepositsRequest } from "@moovio/sdk/models/operations";

let value: CompleteMicroDepositsRequest = {
  accountID: "9f24d7e2-8557-465e-abb4-9cc5cb2d7779",
  bankAccountID: "7da66c53-0ee1-4521-be0f-1d955c5a87e8",
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