# CreateCancellationRequest

## Example Usage

```typescript
import { CreateCancellationRequest } from "@moovio/sdk/models/operations";

let value: CreateCancellationRequest = {
  accountID: "d8f414fb-e94f-4364-aa6f-f1ecb5acdc52",
  transferID: "4c06c1a3-240a-45f1-ae71-d1a379e46352",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `accountID`                    | *string*                       | :heavy_check_mark:             | The partner's Moov account ID. |
| `transferID`                   | *string*                       | :heavy_check_mark:             | The transfer ID to cancel.     |