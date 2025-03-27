# GetCancellationRequest

## Example Usage

```typescript
import { GetCancellationRequest } from "@moovio/sdk/models/operations";

let value: GetCancellationRequest = {
  accountID: "360047bc-6cba-4248-bd6f-a586e031c3b8",
  transferID: "f22a0d66-9543-4bc9-83b2-e7739f9a4538",
  cancellationID: "9791e638-eb54-4a15-97c5-cc03a705af32",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Moov account ID of the partner or transfer's source or destination. |
| `transferID`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the transfer.                                        |
| `cancellationID`                                                    | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the cancellation.                                    |