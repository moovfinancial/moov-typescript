# CreateCancellationRequest

## Example Usage

```typescript
import { CreateCancellationRequest } from "@moovio/sdk/models/operations";

let value: CreateCancellationRequest = {
  accountID: "<id>",
  transferID: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `accountID`                    | *string*                       | :heavy_check_mark:             | The partner's Moov account ID. |
| `transferID`                   | *string*                       | :heavy_check_mark:             | The transfer ID to cancel.     |