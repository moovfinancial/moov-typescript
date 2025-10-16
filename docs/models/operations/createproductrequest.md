# CreateProductRequest

## Example Usage

```typescript
import { CreateProductRequest } from "@moovio/sdk/models/operations";

let value: CreateProductRequest = {
  accountID: "f5ebe946-352a-4efb-aa60-bc965780d615",
  productRequest: {
    title: "<value>",
    basePrice: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    optionGroups: [
      {
        name: "<value>",
        minSelect: 903729,
        maxSelect: 102098,
        options: [
          {
            name: "<value>",
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `productRequest`                                                       | [components.ProductRequest](../../models/components/productrequest.md) | :heavy_check_mark:                                                     | N/A                                                                    |