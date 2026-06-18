# ListCancellationsRequest

## Example Usage

```typescript
import { ListCancellationsRequest } from "@moovio/sdk/models/operations";

let value: ListCancellationsRequest = {
  accountID: "<id>",
  transferID: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Moov account ID of the partner or transfer's source or destination. |
| `transferID`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the transfer.                                        |