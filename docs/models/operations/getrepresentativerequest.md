# GetRepresentativeRequest

## Example Usage

```typescript
import { GetRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: GetRepresentativeRequest = {
  accountID: "290bdb2a-431e-4a9c-ba5e-0211c3a51a7e",
  representativeID: "d4386c1d-160f-483b-bd2f-8338ef281731",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |