# DeleteRepresentativeRequest

## Example Usage

```typescript
import { DeleteRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: DeleteRepresentativeRequest = {
  accountID: "3e0c7d71-3f52-4c01-a40f-b8ca23d5760b",
  representativeID: "a4636afa-8617-429b-8f46-2edc0831c388",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |