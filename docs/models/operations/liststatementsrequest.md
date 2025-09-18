# ListStatementsRequest

## Example Usage

```typescript
import { ListStatementsRequest } from "@moovio/sdk/models/operations";

let value: ListStatementsRequest = {
  skip: 60,
  count: 20,
  accountID: "8c02abe6-97f5-404e-9aa8-fa10c0d5701f",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `billingPeriodStartDateTime`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | Optional date-time which inclusively filters all statements where billing period is on or after this date-time. |                                                                                                                 |
| `billingPeriodEndDateTime`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | Optional date-time which exclusively filters all statements where billing period is before this date-time.      |                                                                                                                 |
| `skip`                                                                                                          | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 60                                                                                                              |
| `count`                                                                                                         | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 20                                                                                                              |
| `accountID`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |