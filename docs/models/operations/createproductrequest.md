# CreateProductRequest

## Example Usage

```typescript
import { CreateProductRequest } from "@moovio/sdk/models/operations";

let value: CreateProductRequest = {
  accountID: "<id>",
  productRequest: {
    title: "<value>",
    basePrice: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    optionGroups: [
      {
        name: "<value>",
        minSelect: 977644,
        maxSelect: 374163,
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