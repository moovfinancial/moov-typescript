# UpdateRepresentativeRequest

## Example Usage

```typescript
import { UpdateRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: UpdateRepresentativeRequest = {
  accountID: "de33c6ca-b84b-4de5-b3dc-69fefc20b1c2",
  representativeID: "a167c3e8-57e9-4b14-ad07-1db0de046490",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the account.                                                                 |
| `representativeID`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the representative.                                                          |
| `updateRepresentative`                                                             | [components.UpdateRepresentative](../../models/components/updaterepresentative.md) | :heavy_check_mark:                                                                 | N/A                                                                                |