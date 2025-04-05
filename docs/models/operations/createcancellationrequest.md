# CreateCancellationRequest

## Example Usage

```typescript
import { CreateCancellationRequest } from "@moovio/sdk/models/operations";

let value: CreateCancellationRequest = {
  accountID: "072df7d9-b46b-4f22-b259-3015ede2919f",
  transferID: "896abfb7-f91a-44b3-8f40-9a2df620b51a",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `accountID`                    | *string*                       | :heavy_check_mark:             | The partner's Moov account ID. |
| `transferID`                   | *string*                       | :heavy_check_mark:             | The transfer ID to cancel.     |