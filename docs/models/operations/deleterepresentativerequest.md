# DeleteRepresentativeRequest

## Example Usage

```typescript
import { DeleteRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: DeleteRepresentativeRequest = {
  accountID: "4f881fb8-1265-4810-9800-606336156de4",
  representativeID: "9250618a-f33f-4d9d-93dd-38eaa84f74b9",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |