# FeeProperties

## Example Usage

```typescript
import { FeeProperties } from "moov-sdk/models/components";

let value: FeeProperties = {
  fixedAmount: "0.15",
  variableRate: "0.14",
  minPerTransaction: "1.75",
  maxPerTransaction: "3.50",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `fixedAmount`                                                                                                                  | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A fixed fee that is applied to the amount of each transaction in the `fixed` and `blended` fee models, expressed as a decimal. | 0.15                                                                                                                           |
| `variableRate`                                                                                                                 | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A percentage fee that is applied to the amount of each transaction in the `blended` fee model, expressed as a decimal.         | 0.14                                                                                                                           |
| `minPerTransaction`                                                                                                            | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Specifies the minimum allowable spending for a single transaction, working as a transaction floor.                             | 1.75                                                                                                                           |
| `maxPerTransaction`                                                                                                            | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Specifies the maximum allowable spending for a single transaction, working as a transaction ceiling.                           | 3.50                                                                                                                           |