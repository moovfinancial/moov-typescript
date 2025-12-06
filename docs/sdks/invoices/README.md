# Invoices

## Overview

### Available Operations

* [createInvoice](#createinvoice) - Create an invoice for a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.write` scope.
* [listInvoices](#listinvoices) - List all the invoices created under a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.read` scope.
* [getInvoice](#getinvoice) - Retrieve an invoice by ID.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.read` scope.
* [updateInvoice](#updateinvoice) - Updates an invoice.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.write` scope.
* [markPaidInvoice](#markpaidinvoice) - Marks an invoice as paid outside of the Moov platform.
If a payment link was created, the corresponding payment link is canceled, but a receipt is still sent.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.write` scope.

## createInvoice

Create an invoice for a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createInvoice" method="post" path="/accounts/{accountID}/invoices" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.invoices.createInvoice({
    accountID: "241bf524-e777-4941-a5e4-d7f3f34d7a00",
    createInvoice: {
      customerAccountID: "<id>",
      description: "austere gah under ew failing provided repeatedly pick onto",
      lineItems: {
        items: [],
      },
      taxAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
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
import { invoicesCreateInvoice } from "@moovio/sdk/funcs/invoicesCreateInvoice.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await invoicesCreateInvoice(moov, {
    accountID: "241bf524-e777-4941-a5e4-d7f3f34d7a00",
    createInvoice: {
      customerAccountID: "<id>",
      description: "austere gah under ew failing provided repeatedly pick onto",
      lineItems: {
        items: [],
      },
      taxAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesCreateInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInvoiceRequest](../../models/operations/createinvoicerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateInvoiceResponse](../../models/operations/createinvoiceresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.GenericError       | 400, 409                  | application/json          |
| errors.CreateInvoiceError | 422                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## listInvoices

List all the invoices created under a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listInvoices" method="get" path="/accounts/{accountID}/invoices" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.invoices.listInvoices({
    skip: 60,
    count: 20,
    accountID: "114b02db-e4ca-47de-acc9-5624f4afccb5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { invoicesListInvoices } from "@moovio/sdk/funcs/invoicesListInvoices.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await invoicesListInvoices(moov, {
    skip: 60,
    count: 20,
    accountID: "114b02db-e4ca-47de-acc9-5624f4afccb5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesListInvoices failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInvoicesRequest](../../models/operations/listinvoicesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListInvoicesResponse](../../models/operations/listinvoicesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ListInvoicesValidationError | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## getInvoice

Retrieve an invoice by ID.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getInvoice" method="get" path="/accounts/{accountID}/invoices/{invoiceID}" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.invoices.getInvoice({
    accountID: "3ecce96f-a052-4c96-b389-98e880af1ab4",
    invoiceID: "fc90d016-39ea-4110-b77a-2e1c95827f46",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { invoicesGetInvoice } from "@moovio/sdk/funcs/invoicesGetInvoice.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await invoicesGetInvoice(moov, {
    accountID: "3ecce96f-a052-4c96-b389-98e880af1ab4",
    invoiceID: "fc90d016-39ea-4110-b77a-2e1c95827f46",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesGetInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInvoiceRequest](../../models/operations/getinvoicerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetInvoiceResponse](../../models/operations/getinvoiceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateInvoice

Updates an invoice.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateInvoice" method="patch" path="/accounts/{accountID}/invoices/{invoiceID}" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.invoices.updateInvoice({
    accountID: "ce46d65a-8504-4afa-b3f7-303401bd08b3",
    invoiceID: "ef510999-370a-4350-87d5-bc81fc02a2ea",
    updateInvoice: {
      lineItems: {
        items: [
          {
            name: "<value>",
            basePrice: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            quantity: 984515,
            options: [
              {
                name: "<value>",
                quantity: 761923,
                priceModifier: {
                  currency: "USD",
                  valueDecimal: "12.987654321",
                },
              },
            ],
          },
        ],
      },
      taxAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
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
import { invoicesUpdateInvoice } from "@moovio/sdk/funcs/invoicesUpdateInvoice.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await invoicesUpdateInvoice(moov, {
    accountID: "ce46d65a-8504-4afa-b3f7-303401bd08b3",
    invoiceID: "ef510999-370a-4350-87d5-bc81fc02a2ea",
    updateInvoice: {
      lineItems: {
        items: [
          {
            name: "<value>",
            basePrice: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            quantity: 984515,
            options: [
              {
                name: "<value>",
                quantity: 761923,
                priceModifier: {
                  currency: "USD",
                  valueDecimal: "12.987654321",
                },
              },
            ],
          },
        ],
      },
      taxAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesUpdateInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInvoiceRequest](../../models/operations/updateinvoicerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateInvoiceResponse](../../models/operations/updateinvoiceresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.GenericError       | 400, 409                  | application/json          |
| errors.UpdateInvoiceError | 422                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## markPaidInvoice

Marks an invoice as paid outside of the Moov platform.
If a payment link was created, the corresponding payment link is canceled, but a receipt is still sent.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/invoices.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="markPaidInvoice" method="put" path="/accounts/{accountID}/invoices/{invoiceID}/mark-paid" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.invoices.markPaidInvoice({
    accountID: "e270fffe-637f-4828-ace1-3813031d3274",
    invoiceID: "9a08a44d-da9a-4385-8870-bb488c363e91",
    markInvoicePaid: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { invoicesMarkPaidInvoice } from "@moovio/sdk/funcs/invoicesMarkPaidInvoice.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  xMoovVersion: "<value>",
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await invoicesMarkPaidInvoice(moov, {
    accountID: "e270fffe-637f-4828-ace1-3813031d3274",
    invoiceID: "9a08a44d-da9a-4385-8870-bb488c363e91",
    markInvoicePaid: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesMarkPaidInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MarkPaidInvoiceRequest](../../models/operations/markpaidinvoicerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MarkPaidInvoiceResponse](../../models/operations/markpaidinvoiceresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.GenericError         | 400, 409                    | application/json            |
| errors.MarkInvoicePaidError | 422                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |