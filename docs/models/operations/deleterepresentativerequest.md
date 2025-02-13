# DeleteRepresentativeRequest

## Example Usage

```typescript
import { DeleteRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: DeleteRepresentativeRequest = {
  accountID: "4a2a74b3-20d7-4811-b58b-7d60615fd366",
  representativeID: "001a6d47-b852-482f-a82b-1c720f4f881f",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |