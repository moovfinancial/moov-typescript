# UpdateProductRequest

## Example Usage

```typescript
import { UpdateProductRequest } from "@moovio/sdk/models/operations";

let value: UpdateProductRequest = {
  accountID: "792c7a95-c37e-4426-9009-31f5c86b555a",
  productID: "3406229f-124b-4770-919a-14b2650ce63f",
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
| `productID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `productRequest`                                                       | [components.ProductRequest](../../models/components/productrequest.md) | :heavy_check_mark:                                                     | N/A                                                                    |