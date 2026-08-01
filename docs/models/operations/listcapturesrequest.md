# ListCapturesRequest

## Example Usage

```typescript
import { ListCapturesRequest } from "@moovio/sdk/models/operations";

let value: ListCapturesRequest = {
  accountID: "<id>",
  transferID: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `accountID`                     | *string*                        | :heavy_check_mark:              | The merchant's Moov account ID. |
| `transferID`                    | *string*                        | :heavy_check_mark:              | Identifier for the transfer.    |