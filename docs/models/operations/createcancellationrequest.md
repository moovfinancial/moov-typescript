# CreateCancellationRequest

## Example Usage

```typescript
import { CreateCancellationRequest } from "@moovio/sdk/models/operations";

let value: CreateCancellationRequest = {
  accountID: "3985056c-b33a-4a81-940c-ce1eefc44baa",
  transferID: "849cb68c-3377-4096-a9e5-134d8f414fbe",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `accountID`                    | *string*                       | :heavy_check_mark:             | The partner's Moov account ID. |
| `transferID`                   | *string*                       | :heavy_check_mark:             | The transfer ID to cancel.     |