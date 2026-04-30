# ShareScopes

Describes the scopes being shared from a subject account to a principal account.

## Example Usage

```typescript
import { ShareScopes } from "@moovio/sdk/models/components";

let value: ShareScopes = {
  principalAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
  allowScopes: [
    "transfers.write",
    "payment-methods.read",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `principalAccountID`                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The account ID that will receive access to the scopes.                                                           | c520f1b9-0ba7-42f5-b977-248cdbe41c69                                                                             |
| `allowScopes`                                                                                                    | [components.ApplicationScope](../../models/components/applicationscope.md)[]                                     | :heavy_minus_sign:                                                                                               | The list of scopes to share with the principal account. If none are provided, all intersecting scopes are added. | [<br/>"transfers.write",<br/>"payment-methods.read"<br/>]                                                        |