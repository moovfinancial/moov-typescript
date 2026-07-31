# GetCaptureRequest

## Example Usage

```typescript
import { GetCaptureRequest } from "@moovio/sdk/models/operations";

let value: GetCaptureRequest = {
  accountID: "<id>",
  transferID: "<id>",
  captureID: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `accountID`                     | *string*                        | :heavy_check_mark:              | The merchant's Moov account ID. |
| `transferID`                    | *string*                        | :heavy_check_mark:              | Identifier for the transfer.    |
| `captureID`                     | *string*                        | :heavy_check_mark:              | Identifier for the capture.     |