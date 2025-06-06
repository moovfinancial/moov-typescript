# UpdateCardRequest

## Example Usage

```typescript
import { UpdateCardRequest } from "@moovio/sdk/models/operations";

let value: UpdateCardRequest = {
  accountID: "e5a3aa8b-90fd-4f4f-8903-99afe8a8c8a7",
  cardID: "01234567-89ab-cdef-0123-456789abcdef",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accountID`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `cardID`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 01234567-89ab-cdef-0123-456789abcdef                           |
| `updateCard`                                                   | [components.UpdateCard](../../models/components/updatecard.md) | :heavy_check_mark:                                             | N/A                                                            | {<br/>"cardCvv": "456"<br/>}                                   |