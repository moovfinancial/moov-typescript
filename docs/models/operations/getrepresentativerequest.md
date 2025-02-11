# GetRepresentativeRequest

## Example Usage

```typescript
import { GetRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: GetRepresentativeRequest = {
  accountID: "38eaa84f-74b9-4543-91a8-300b3402d3f2",
  representativeID: "d64b0ed1-cf79-4a4a-a76e-ced09ba46018",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |