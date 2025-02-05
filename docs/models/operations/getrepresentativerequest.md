# GetRepresentativeRequest

## Example Usage

```typescript
import { GetRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: GetRepresentativeRequest = {
  accountID: "700e6e76-4149-4c8c-b29e-33bc35a697cd",
  representativeID: "9970417d-9a34-42d4-9821-55595c15a917",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |