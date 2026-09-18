# CreateProductResponse

## Example Usage

```typescript
import { CreateProductResponse } from "@moovio/sdk/models/operations";

let value: CreateProductResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    productID: "<id>",
    title: "<value>",
    basePrice: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    isTaxable: true,
    optionGroups: [
      {
        name: "<value>",
        minSelect: 59952,
        maxSelect: 887012,
        options: [],
      },
    ],
    images: [
      {
        imageID: "<id>",
        link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
        publicID: "q7lKWleAy9fUNhEGezQ1g",
      },
    ],
    category: {
      categoryID: "<id>",
      name: "Beverages",
      fullName: "Food, Beverages & Tobacco > Beverages",
      level: 2,
    },
    createdOn: new Date("2026-03-01T18:29:56.552Z"),
    updatedOn: new Date("2026-06-08T19:52:23.368Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | N/A                                                      |