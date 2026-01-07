# ListProductsResponse

## Example Usage

```typescript
import { ListProductsResponse } from "@moovio/sdk/models/operations";

let value: ListProductsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: [
    {
      productID: "30e37085-8508-4045-8d2f-ec5edf893c7e",
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
          publicID: "q7lKWleAy9fUNhEGezQ1g",
        },
      ],
      createdOn: new Date("2025-04-02T23:47:44.686Z"),
      updatedOn: new Date("2026-06-17T20:01:38.823Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Product](../../models/components/product.md)[] | :heavy_check_mark:                                         | N/A                                                        |