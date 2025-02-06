# UpdateCardRequest

## Example Usage

```typescript
import { UpdateCardRequest } from "@moovio/sdk/models/operations";

let value: UpdateCardRequest = {
  accountID: "69b55004-bacc-4dbf-8e99-0f2bd531b7be",
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