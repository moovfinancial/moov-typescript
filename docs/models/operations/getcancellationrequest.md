# GetCancellationRequest

## Example Usage

```typescript
import { GetCancellationRequest } from "@moovio/sdk/models/operations";

let value: GetCancellationRequest = {
  accountID: "364a6ff1-ecb5-4acd-ac52-84c06c1a3240",
  transferID: "5f1e71d1-a379-4e46-b352-889360047bc6",
  cancellationID: "ba248d6f-a586-4e03-91c3-b8df22a0d669",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Moov account ID of the partner or transfer's source or destination. |
| `transferID`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the transfer.                                        |
| `cancellationID`                                                    | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the cancellation.                                    |