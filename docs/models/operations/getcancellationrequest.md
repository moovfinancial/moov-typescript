# GetCancellationRequest

## Example Usage

```typescript
import { GetCancellationRequest } from "@moovio/sdk/models/operations";

let value: GetCancellationRequest = {
  accountID: "248d6fa5-86e0-431c-83b8-df22a0d66954",
  transferID: "bc93b2e7-739f-49a4-9538-29791e638eb5",
  cancellationID: "a157c5cc-03a7-405a-8f32-58a530213516",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Moov account ID of the partner or transfer's source or destination. |
| `transferID`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the transfer.                                        |
| `cancellationID`                                                    | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the cancellation.                                    |