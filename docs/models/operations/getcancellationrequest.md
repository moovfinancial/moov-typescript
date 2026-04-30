# GetCancellationRequest

## Example Usage

```typescript
import { GetCancellationRequest } from "@moovio/sdk/models/operations";

let value: GetCancellationRequest = {
  accountID: "<id>",
  transferID: "<id>",
  cancellationID: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Moov account ID of the partner or transfer's source or destination. |
| `transferID`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the transfer.                                        |
| `cancellationID`                                                    | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the cancellation.                                    |