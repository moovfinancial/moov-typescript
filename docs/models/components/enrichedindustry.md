# EnrichedIndustry

An industry's MCC/SIC/NAICS codes, along with descriptive title.

## Example Usage

```typescript
import { EnrichedIndustry } from "moov-sdk/models/components";

let value: EnrichedIndustry = {
  title: "AC, Refrigeration Repair",
  naics: "811412",
  sic: "7623",
  mcc: "7623",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `title`                                       | *string*                                      | :heavy_check_mark:                            | N/A                                           | AC, Refrigeration Repair                      |
| `naics`                                       | *string*                                      | :heavy_check_mark:                            | North American Industry Classification System | 811412                                        |
| `sic`                                         | *string*                                      | :heavy_check_mark:                            | Standard Industrial Classification            | 7623                                          |
| `mcc`                                         | *string*                                      | :heavy_check_mark:                            | Merchant Category Code                        | 7623                                          |