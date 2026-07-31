# TransferCapture

The card authorization and capture IDs associated with a transfer.

## Example Usage

```typescript
import { TransferCapture } from "@moovio/sdk/models/components";

let value: TransferCapture = {
  authorizationID: "<id>",
  captureID: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `authorizationID`                                           | *string*                                                    | :heavy_check_mark:                                          | ID of the card authorization associated with this transfer. |
| `captureID`                                                 | *string*                                                    | :heavy_check_mark:                                          | ID of the card capture associated with this transfer.       |