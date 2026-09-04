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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `accountID`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Moov account ID of an authorized partner or the transfer's source or destination. |
| `transferID`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | Identifier for the auth-capture `card-payment` transfer.                          |