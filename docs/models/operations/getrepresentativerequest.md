# GetRepresentativeRequest

## Example Usage

```typescript
import { GetRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: GetRepresentativeRequest = {
  accountID: "<id>",
  representativeID: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |