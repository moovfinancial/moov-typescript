# GetRepresentativeRequest

## Example Usage

```typescript
import { GetRepresentativeRequest } from "@moovio/sdk/models/operations";

let value: GetRepresentativeRequest = {
  accountID: "431a8300-b340-42d3-af24-d64b0ed1cf79",
  representativeID: "4a76eced-09ba-4460-a189-377029fa1d61",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accountID`               | *string*                  | :heavy_check_mark:        | ID of the account.        |
| `representativeID`        | *string*                  | :heavy_check_mark:        | ID of the representative. |