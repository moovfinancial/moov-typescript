# UpdateCardRequest

## Example Usage

```typescript
import { UpdateCardRequest } from "@moovio/sdk/models/operations";

let value: UpdateCardRequest = {
  accountID: "c47b2374-d95d-4cfd-962d-05efab088513",
  cardID: "01234567-89ab-cdef-0123-456789abcdef",
  updateCard: {
    cardCvv: "456",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accountID`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `cardID`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 01234567-89ab-cdef-0123-456789abcdef                           |
| `updateCard`                                                   | [components.UpdateCard](../../models/components/updatecard.md) | :heavy_check_mark:                                             | N/A                                                            | {<br/>"cardCvv": "456"<br/>}                                   |