# DeleteRepresentativeRequest

## Example Usage

```typescript
import { DeleteRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: DeleteRepresentativeRequest = {
  accountID: "6e764149-c8c2-49e3-83bc-35a697cdd997",
  representativeID: "417d9a34-2d48-4215-9559-5c15a9174a2a",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |