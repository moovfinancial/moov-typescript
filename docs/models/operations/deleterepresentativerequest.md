# DeleteRepresentativeRequest

## Example Usage

```typescript
import { DeleteRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: DeleteRepresentativeRequest = {
  accountID: "81265810-8006-4063-a361-56de44925061",
  representativeID: "af33fd9d-3dd3-48ea-8a84-f74b95431a83",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |