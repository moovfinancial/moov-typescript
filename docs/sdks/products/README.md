# Products

## Overview

### Available Operations

* [list](#list) - List active (non-disabled) products for an account.
* [create](#create) - Creates a new product for the specified account.
* [get](#get) - Retrieve a product by ID.
* [update](#update) - Update a product and its options.
* [disable](#disable) - Disable a product by ID.

The product will no longer be available, but will remain in the system for historical and reporting purposes.

## list

List active (non-disabled) products for an account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listProducts" method="get" path="/accounts/{accountID}/products" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.products.list({
    accountID: "cd696219-4308-446c-b0d8-1759254995c2",
    skip: 60,
    count: 20,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { productsList } from "@moovio/sdk/funcs/productsList.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await productsList(moov, {
    accountID: "cd696219-4308-446c-b0d8-1759254995c2",
    skip: 60,
    count: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProductsRequest](../../models/operations/listproductsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProductsResponse](../../models/operations/listproductsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Creates a new product for the specified account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createProduct" method="post" path="/accounts/{accountID}/products" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.products.create({
    accountID: "27cd3181-7c1c-4d81-b020-e7d55c33941f",
    productRequest: {
      title: "World's best lemonade",
      description: "Really, the best.",
      basePrice: {
        currency: "USD",
        valueDecimal: "4.99",
      },
      images: [
        {
          imageID: "fed91252-6f48-4b70-885e-520bf53a52ff",
        },
        {
          imageID: "eb466644-0a58-4b87-af1e-94d03e223ad2",
        },
      ],
      optionGroups: [
        {
          name: "Flavor add-ins",
          description: "Choose up to 3 flavor add-ins to enhance your lemonade.",
          minSelect: 0,
          maxSelect: 3,
          options: [
            {
              name: "Strawberry puree",
              description: "Fresh and fruity.",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.99",
              },
              images: [
                {
                  imageID: "d359808d-9896-4414-8d17-dac43f35842d",
                },
              ],
            },
            {
              name: "Passionfruit syrup",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.49",
              },
            },
            {
              name: "Cherry syrup",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.49",
              },
            },
          ],
        },
        {
          name: "Sweetener",
          description: "Choose a sweetener for your lemonade.",
          minSelect: 1,
          maxSelect: 1,
          options: [
            {
              name: "Cane Sugar",
            },
            {
              name: "Honey",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.99",
              },
            },
            {
              name: "Stevia",
              description: "Natural, zero-calorie sweetener.",
            },
          ],
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { productsCreate } from "@moovio/sdk/funcs/productsCreate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await productsCreate(moov, {
    accountID: "27cd3181-7c1c-4d81-b020-e7d55c33941f",
    productRequest: {
      title: "World's best lemonade",
      description: "Really, the best.",
      basePrice: {
        currency: "USD",
        valueDecimal: "4.99",
      },
      images: [
        {
          imageID: "fed91252-6f48-4b70-885e-520bf53a52ff",
        },
        {
          imageID: "eb466644-0a58-4b87-af1e-94d03e223ad2",
        },
      ],
      optionGroups: [
        {
          name: "Flavor add-ins",
          description: "Choose up to 3 flavor add-ins to enhance your lemonade.",
          minSelect: 0,
          maxSelect: 3,
          options: [
            {
              name: "Strawberry puree",
              description: "Fresh and fruity.",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.99",
              },
              images: [
                {
                  imageID: "d359808d-9896-4414-8d17-dac43f35842d",
                },
              ],
            },
            {
              name: "Passionfruit syrup",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.49",
              },
            },
            {
              name: "Cherry syrup",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.49",
              },
            },
          ],
        },
        {
          name: "Sweetener",
          description: "Choose a sweetener for your lemonade.",
          minSelect: 1,
          maxSelect: 1,
          options: [
            {
              name: "Cane Sugar",
            },
            {
              name: "Honey",
              priceModifier: {
                currency: "USD",
                valueDecimal: "0.99",
              },
            },
            {
              name: "Stevia",
              description: "Natural, zero-calorie sweetener.",
            },
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateProductRequest](../../models/operations/createproductrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateProductResponse](../../models/operations/createproductresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GenericError                  | 400, 409                             | application/json                     |
| errors.ProductRequestValidationError | 422                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## get

Retrieve a product by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getProduct" method="get" path="/accounts/{accountID}/products/{productID}" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.products.get({
    accountID: "a749d848-5ebc-42a4-9ae6-555804317835",
    productID: "dd0b4873-5cf5-4aa8-aa86-e31d86f7e38a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { productsGet } from "@moovio/sdk/funcs/productsGet.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await productsGet(moov, {
    accountID: "a749d848-5ebc-42a4-9ae6-555804317835",
    productID: "dd0b4873-5cf5-4aa8-aa86-e31d86f7e38a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProductRequest](../../models/operations/getproductrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetProductResponse](../../models/operations/getproductresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update a product and its options.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateProduct" method="put" path="/accounts/{accountID}/products/{productID}" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.products.update({
    accountID: "7a7b55ed-d90d-4e83-a8f6-f146eaebd0cc",
    productID: "fa407877-3b46-4484-814e-65b147d76a9e",
    productRequest: {
      title: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      optionGroups: [
        {
          name: "<value>",
          minSelect: 328576,
          maxSelect: 430951,
          options: [],
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { productsUpdate } from "@moovio/sdk/funcs/productsUpdate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await productsUpdate(moov, {
    accountID: "7a7b55ed-d90d-4e83-a8f6-f146eaebd0cc",
    productID: "fa407877-3b46-4484-814e-65b147d76a9e",
    productRequest: {
      title: "<value>",
      basePrice: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      optionGroups: [
        {
          name: "<value>",
          minSelect: 328576,
          maxSelect: 430951,
          options: [],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateProductRequest](../../models/operations/updateproductrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateProductResponse](../../models/operations/updateproductresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GenericError                  | 400, 409                             | application/json                     |
| errors.ProductRequestValidationError | 422                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## disable

Disable a product by ID.

The product will no longer be available, but will remain in the system for historical and reporting purposes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="disableProduct" method="delete" path="/accounts/{accountID}/products/{productID}" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.products.disable({
    accountID: "9fbe72c0-abba-4bb7-b1d0-d15ee702fe62",
    productID: "1e11a7dc-4e86-41ed-b256-55c22f3bfd38",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { productsDisable } from "@moovio/sdk/funcs/productsDisable.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "v2024.01.00",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await productsDisable(moov, {
    accountID: "9fbe72c0-abba-4bb7-b1d0-d15ee702fe62",
    productID: "1e11a7dc-4e86-41ed-b256-55c22f3bfd38",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsDisable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DisableProductRequest](../../models/operations/disableproductrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DisableProductResponse](../../models/operations/disableproductresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |