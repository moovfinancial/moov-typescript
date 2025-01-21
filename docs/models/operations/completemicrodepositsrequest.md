# CompleteMicroDepositsRequest

## Example Usage

```typescript
import { CompleteMicroDepositsRequest } from "moov-sdk/models/operations";

let value: CompleteMicroDepositsRequest = {
  accountID: "6be4a609-5071-4a88-aeeb-940153986cbb",
  bankAccountID: "06770a40-8e00-4980-81d7-12950a0122c1",
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
| `xMoovVersion`                                                                       | [components.Versions](../../models/components/versions.md)                           | :heavy_minus_sign:                                                                   | Specify an API version.                                                              |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `bankAccountID`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `completeMicroDeposits`                                                              | [components.CompleteMicroDeposits](../../models/components/completemicrodeposits.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |