# CreateProductResponse

## Example Usage

```typescript
import { CreateProductResponse } from "@moovio/sdk/models/operations";

let value: CreateProductResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    productID: "7bccae5e-0eb4-45cc-bf46-dac9bc66de27",
    title: "<value>",
    basePrice: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    optionGroups: [
      {
        name: "<value>",
        minSelect: 18424,
        maxSelect: 504490,
        options: [],
      },
    ],
    images: [
      {
        imageID: "f7be8907-e233-4bcb-8b74-4d8d7ceefe37",
        link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
      },
    ],
    createdOn: new Date("2024-02-17T23:26:04.032Z"),
    updatedOn: new Date("2025-01-03T17:47:03.549Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | N/A                                                      |