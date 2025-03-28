# ListIssuedCardTransactionsRequest

## Example Usage

```typescript
import { ListIssuedCardTransactionsRequest } from "@moovio/sdk/models/operations";

let value: ListIssuedCardTransactionsRequest = {
  accountID: "ee33c533-4d72-4551-8db6-b5e817505f4b",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | The Moov business account for which cards have been issued.                                       |                                                                                                   |
| `skip`                                                                                            | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 60                                                                                                |
| `count`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 20                                                                                                |
| `issuedCardID`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | Optional ID of the issued card to filter results.                                                 |                                                                                                   |
| `startDateTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | Optional date-time which inclusively filters all card transactions created after this date-time.  |                                                                                                   |
| `endDateTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | Optional date-time which exclusively filters all card transactions created before this date-time. |                                                                                                   |