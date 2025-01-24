# UpdateCardRequest

## Example Usage

```typescript
import { UpdateCardRequest } from "moov-sdk/models/operations";

let value: UpdateCardRequest = {
  accountID: "327ccf66-0dac-47e0-8161-193aed31ff57",
  cardID: "01234567-89ab-cdef-0123-456789abcdef",
  updateCard: {
    cardCvv: "456",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `xMoovVersion`                                                 | [components.Versions](../../models/components/versions.md)     | :heavy_minus_sign:                                             | Specify an API version.                                        |                                                                |
| `accountID`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `cardID`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 01234567-89ab-cdef-0123-456789abcdef                           |
| `updateCard`                                                   | [components.UpdateCard](../../models/components/updatecard.md) | :heavy_check_mark:                                             | N/A                                                            | {<br/>"cardCvv": "456"<br/>}                                   |