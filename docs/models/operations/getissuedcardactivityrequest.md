# GetIssuedCardActivityRequest

## Example Usage

```typescript
import { GetIssuedCardActivityRequest } from "@moovio/sdk/models/operations";

let value: GetIssuedCardActivityRequest = {
  accountID: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accountID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The Moov business account for which cards have been issued.                        |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The identifier for the activity item, either authorizationID or cardTransactionID. |