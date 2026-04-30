# UpdateProductResponse

## Example Usage

```typescript
import { UpdateProductResponse } from "@moovio/sdk/models/operations";

let value: UpdateProductResponse = {
  headers: {},
  result: {
    productID: "<id>",
    title: "<value>",
    basePrice: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    optionGroups: [
      {
        name: "<value>",
        minSelect: 225596,
        maxSelect: 59952,
        options: [
          {
            name: "<value>",
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            images: [
              {
                imageID: "<id>",
                link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                publicID: "q7lKWleAy9fUNhEGezQ1g",
              },
            ],
          },
        ],
      },
    ],
    images: [
      {
        imageID: "<id>",
        link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
        publicID: "q7lKWleAy9fUNhEGezQ1g",
      },
    ],
    createdOn: new Date("2025-06-12T00:16:40.280Z"),
    updatedOn: new Date("2026-03-01T18:29:56.552Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | N/A                                                      |