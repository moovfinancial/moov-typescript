# CardAcceptanceMethods

Describes the distribution of card transactions by payment method.

## Example Usage

```typescript
import { CardAcceptanceMethods } from "@moovio/sdk/models/components";

let value: CardAcceptanceMethods = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `inPersonPercentage`                                                                                 | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Percentage of card transactions that are in-person payments. Minimum value is 0, maximum is 100.     |
| `mailOrPhonePercentage`                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Percentage of card transactions that are mail or phone payments. Minimum value is 0, maximum is 100. |
| `onlinePercentage`                                                                                   | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Percentage of card transactions that are online payments. Minimum value is 0, maximum is 100.        |