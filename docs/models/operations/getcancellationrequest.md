# GetCancellationRequest

## Example Usage

```typescript
import { GetCancellationRequest } from "@moovio/sdk/models/operations";

let value: GetCancellationRequest = {
  accountID: "0aac0cae-542d-4776-8f55-a3301fa0ccb8",
  transferID: "82a901d5-ac95-4009-8f73-f3d99cdbbff0",
  cancellationID: "a3bd1079-d9ba-4f8f-9d26-f8614c2aa030",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Moov account ID of the partner or transfer's source or destination. |
| `transferID`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the transfer.                                        |
| `cancellationID`                                                    | *string*                                                            | :heavy_check_mark:                                                  | Identifier for the cancellation.                                    |