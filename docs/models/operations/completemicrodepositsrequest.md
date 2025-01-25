# CompleteMicroDepositsRequest

## Example Usage

```typescript
import { CompleteMicroDepositsRequest } from "@moovio/sdk/models/operations";

let value: CompleteMicroDepositsRequest = {
  accountID: "81265810-8006-4063-a361-56de44925061",
  bankAccountID: "af33fd9d-3dd3-48ea-8a84-f74b95431a83",
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