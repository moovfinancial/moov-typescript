# RequestCardRequest

## Example Usage

```typescript
import { RequestCardRequest } from "@moovio/sdk/models/operations";

let value: RequestCardRequest = {
  accountID: "35c00d5a-5a73-4cd0-be6c-0a28e8d1b763",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | The Moov business account for which the card is to be issued.    |
| `requestCard`                                                    | [components.RequestCard](../../models/components/requestcard.md) | :heavy_check_mark:                                               | N/A                                                              |