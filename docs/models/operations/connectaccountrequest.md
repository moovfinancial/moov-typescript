# ConnectAccountRequest

## Example Usage

```typescript
import { ConnectAccountRequest } from "@moovio/sdk/models/operations";

let value: ConnectAccountRequest = {
  accountID: "6ad86a16-665c-4302-8525-b93005b85df3",
  shareScopes: {
    principalAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
    allowScopes: [
      "transfers.write",
      "payment-methods.read",
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `shareScopes`                                                    | [components.ShareScopes](../../models/components/sharescopes.md) | :heavy_check_mark:                                               | N/A                                                              |