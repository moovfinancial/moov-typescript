# CreateCancellationRequest

## Example Usage

```typescript
import { CreateCancellationRequest } from "@moovio/sdk/models/operations";

let value: CreateCancellationRequest = {
  accountID: "364a6ff1-ecb5-4acd-ac52-84c06c1a3240",
  transferID: "5f1e71d1-a379-4e46-b352-889360047bc6",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `accountID`                    | *string*                       | :heavy_check_mark:             | The partner's Moov account ID. |
| `transferID`                   | *string*                       | :heavy_check_mark:             | The transfer ID to cancel.     |