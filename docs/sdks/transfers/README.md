# Transfers

## Overview

### Available Operations

* [generateOptions](#generateoptions) - Generate available payment method options for one or multiple transfer participants depending on the accountID or paymentMethodID you 
supply in the request body.

The accountID in the route should the partner's accountID.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
* [create](#create) - Move money by providing the source, destination, and amount in the request body.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
* [list](#list) - List all the transfers associated with a particular Moov account. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

When you run this request, you retrieve 200 transfers at a time. You can advance past a results set of 200 transfers by using the `skip` parameter (for example, 
if you set `skip`= 10, you will see a results set of 200 transfers after the first 10). If you are searching a high volume of transfers, the request will likely 
process very slowly. To achieve faster performance, restrict the data as much as you can by using the `StartDateTime` and `EndDateTime` parameters for a limited 
period of time. You can run multiple requests in smaller time window increments until you've retrieved all the transfers you need.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
* [get](#get) - Retrieve full transfer details for an individual transfer of a particular Moov account. 

Payment rail-specific details are included in the source and destination. Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) 
to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
* [update](#update) - Update the metadata contained on a transfer.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
* [createCancellation](#createcancellation) -   Initiate a cancellation for a card, ACH, or queued transfer.
  
  To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
  to specify the `/accounts/{accountID}/transfers.write` scope.
* [getCancellation](#getcancellation) -   Get details of a cancellation for a transfer.
  
  To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
  to specify the `/accounts/{accountID}/transfers.read` scope.
* [initiateRefund](#initiaterefund) - Initiate a refund for a card transfer.

**Use the [Cancel or refund a card transfer](https://docs.moov.io/api/money-movement/refunds/cancel/) endpoint for more comprehensive cancel and refund options.**    
See the [reversals](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) guide for more information. 

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
* [listRefunds](#listrefunds) - Get a list of refunds for a card transfer.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
* [getRefund](#getrefund) - Get details of a refund for a card transfer.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
* [createReversal](#createreversal) - Reverses a card transfer by initiating a cancellation or refund depending on the transaction status. 
Read our [reversals guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) 
to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

## generateOptions

Generate available payment method options for one or multiple transfer participants depending on the accountID or paymentMethodID you 
supply in the request body.

The accountID in the route should the partner's accountID.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTransferOptions" method="post" path="/accounts/{accountID}/transfer-options" -->
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
  const result = await moov.transfers.generateOptions({
    accountID: "deafe3cf-31d4-4dcc-8176-3d6bf8bb4f04",
    createTransferOptions: {
      source: {},
      destination: {},
      amount: {
        currency: "USD",
        value: 1204,
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
import { transfersGenerateOptions } from "@moovio/sdk/funcs/transfersGenerateOptions.js";

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
  const res = await transfersGenerateOptions(moov, {
    accountID: "deafe3cf-31d4-4dcc-8176-3d6bf8bb4f04",
    createTransferOptions: {
      source: {},
      destination: {},
      amount: {
        currency: "USD",
        value: 1204,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGenerateOptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferOptionsRequest](../../models/operations/createtransferoptionsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransferOptionsResponse](../../models/operations/createtransferoptionsresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GenericError                   | 400                                   | application/json                      |
| errors.TransferOptionsValidationError | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## create

Move money by providing the source, destination, and amount in the request body.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/accounts/{accountID}/transfers" -->
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
  const result = await moov.transfers.create({
    xIdempotencyKey: "d6903402-776f-48d6-8fba-0358959d34e5",
    accountID: "ea9f2225-403b-4e2c-93b0-0eda090ffa65",
    createTransfer: {
      source: {
        paymentMethodID: "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
      },
      destination: {
        paymentMethodID: "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
      },
      amount: {
        currency: "USD",
        value: 32945,
      },
      description: "Transfer from card to wallet",
      metadata: {
        "optional": "metadata",
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
import { transfersCreate } from "@moovio/sdk/funcs/transfersCreate.js";

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
  const res = await transfersCreate(moov, {
    xIdempotencyKey: "d6903402-776f-48d6-8fba-0358959d34e5",
    accountID: "ea9f2225-403b-4e2c-93b0-0eda090ffa65",
    createTransfer: {
      source: {
        paymentMethodID: "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
      },
      destination: {
        paymentMethodID: "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
      },
      amount: {
        currency: "USD",
        value: 32945,
      },
      description: "Transfer from card to wallet",
      metadata: {
        "optional": "metadata",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferRequest](../../models/operations/createtransferrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransferResponse](../../models/operations/createtransferresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400                            | application/json               |
| errors.Transfer                | 409                            | application/json               |
| errors.TransferValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## list

List all the transfers associated with a particular Moov account. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

When you run this request, you retrieve 200 transfers at a time. You can advance past a results set of 200 transfers by using the `skip` parameter (for example, 
if you set `skip`= 10, you will see a results set of 200 transfers after the first 10). If you are searching a high volume of transfers, the request will likely 
process very slowly. To achieve faster performance, restrict the data as much as you can by using the `StartDateTime` and `EndDateTime` parameters for a limited 
period of time. You can run multiple requests in smaller time window increments until you've retrieved all the transfers you need.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTransfers" method="get" path="/accounts/{accountID}/transfers" -->
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
  const result = await moov.transfers.list({
    skip: 60,
    count: 20,
    accountID: "0579c895-4d2b-4024-8092-f71b80ab5d00",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transfersList } from "@moovio/sdk/funcs/transfersList.js";

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
  const res = await transfersList(moov, {
    skip: 60,
    count: 20,
    accountID: "0579c895-4d2b-4024-8092-f71b80ab5d00",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransfersRequest](../../models/operations/listtransfersrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTransfersResponse](../../models/operations/listtransfersresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ListTransfersValidationError | 422                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## get

Retrieve full transfer details for an individual transfer of a particular Moov account. 

Payment rail-specific details are included in the source and destination. Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) 
to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTransfer" method="get" path="/accounts/{accountID}/transfers/{transferID}" -->
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
  const result = await moov.transfers.get({
    transferID: "960cf5a2-50a3-4914-ad86-d54c022bf5df",
    accountID: "31113f7b-9f68-44e9-9338-6d8e655c7c96",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transfersGet } from "@moovio/sdk/funcs/transfersGet.js";

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
  const res = await transfersGet(moov, {
    transferID: "960cf5a2-50a3-4914-ad86-d54c022bf5df",
    accountID: "31113f7b-9f68-44e9-9338-6d8e655c7c96",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransferRequest](../../models/operations/gettransferrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransferResponse](../../models/operations/gettransferresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update the metadata contained on a transfer.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateTransfer" method="patch" path="/accounts/{accountID}/transfers/{transferID}" -->
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
  const result = await moov.transfers.update({
    transferID: "de30c075-4245-4d62-bfb3-f76d4d7d3b9c",
    accountID: "18a7907d-2f89-493a-b15a-3aad91c24496",
    patchTransfer: {
      metadata: {
        "optional": "metadata",
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
import { transfersUpdate } from "@moovio/sdk/funcs/transfersUpdate.js";

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
  const res = await transfersUpdate(moov, {
    transferID: "de30c075-4245-4d62-bfb3-f76d4d7d3b9c",
    accountID: "18a7907d-2f89-493a-b15a-3aad91c24496",
    patchTransfer: {
      metadata: {
        "optional": "metadata",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTransferRequest](../../models/operations/updatetransferrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTransferResponse](../../models/operations/updatetransferresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.PatchTransferValidationError | 422                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## createCancellation

  Initiate a cancellation for a card, ACH, or queued transfer.
  
  To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
  to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCancellation" method="post" path="/accounts/{accountID}/transfers/{transferID}/cancellations" -->
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
  const result = await moov.transfers.createCancellation({
    accountID: "10ae862c-6658-4f87-967d-46e995737204",
    transferID: "36c80a6c-ceb2-4e5d-a437-8a39afdfdc58",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transfersCreateCancellation } from "@moovio/sdk/funcs/transfersCreateCancellation.js";

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
  const res = await transfersCreateCancellation(moov, {
    accountID: "10ae862c-6658-4f87-967d-46e995737204",
    transferID: "36c80a6c-ceb2-4e5d-a437-8a39afdfdc58",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreateCancellation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCancellationRequest](../../models/operations/createcancellationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCancellationResponse](../../models/operations/createcancellationresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getCancellation

  Get details of a cancellation for a transfer.
  
  To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
  to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCancellation" method="get" path="/accounts/{accountID}/transfers/{transferID}/cancellations/{cancellationID}" -->
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
  const result = await moov.transfers.getCancellation({
    accountID: "55cb62c2-22e4-4a36-bd53-3b9adc77ee81",
    transferID: "bc13b680-bac3-432e-bf44-e9aa6426cbb2",
    cancellationID: "770cb4b5-d5b0-4e8b-995b-86b790296ba5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transfersGetCancellation } from "@moovio/sdk/funcs/transfersGetCancellation.js";

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
  const res = await transfersGetCancellation(moov, {
    accountID: "55cb62c2-22e4-4a36-bd53-3b9adc77ee81",
    transferID: "bc13b680-bac3-432e-bf44-e9aa6426cbb2",
    cancellationID: "770cb4b5-d5b0-4e8b-995b-86b790296ba5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGetCancellation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCancellationRequest](../../models/operations/getcancellationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCancellationResponse](../../models/operations/getcancellationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## initiateRefund

Initiate a refund for a card transfer.

**Use the [Cancel or refund a card transfer](https://docs.moov.io/api/money-movement/refunds/cancel/) endpoint for more comprehensive cancel and refund options.**    
See the [reversals](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) guide for more information. 

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="initiateRefund" method="post" path="/accounts/{accountID}/transfers/{transferID}/refunds" -->
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
  const result = await moov.transfers.initiateRefund({
    xIdempotencyKey: "8d9af6b8-67e1-4efa-8188-68039f34097d",
    accountID: "cb6ae9f9-afab-4f06-9eb0-8abf54a3ada2",
    transferID: "04022119-95be-4ef4-9dd4-b3782f6aa7b9",
    createRefund: {
      amount: 1000,
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
import { transfersInitiateRefund } from "@moovio/sdk/funcs/transfersInitiateRefund.js";

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
  const res = await transfersInitiateRefund(moov, {
    xIdempotencyKey: "8d9af6b8-67e1-4efa-8188-68039f34097d",
    accountID: "cb6ae9f9-afab-4f06-9eb0-8abf54a3ada2",
    transferID: "04022119-95be-4ef4-9dd4-b3782f6aa7b9",
    createRefund: {
      amount: 1000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersInitiateRefund failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InitiateRefundRequest](../../models/operations/initiaterefundrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitiateRefundResponse](../../models/operations/initiaterefundresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GenericError          | 400                          | application/json             |
| errors.CardAcquiringRefund   | 409                          | application/json             |
| errors.RefundValidationError | 422                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## listRefunds

Get a list of refunds for a card transfer.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRefunds" method="get" path="/accounts/{accountID}/transfers/{transferID}/refunds" -->
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
  const result = await moov.transfers.listRefunds({
    accountID: "03f5baaa-f5d8-44bd-90db-868745fe66e8",
    transferID: "6b1aa1a1-bff1-43b9-9126-2806fdc9c732",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transfersListRefunds } from "@moovio/sdk/funcs/transfersListRefunds.js";

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
  const res = await transfersListRefunds(moov, {
    accountID: "03f5baaa-f5d8-44bd-90db-868745fe66e8",
    transferID: "6b1aa1a1-bff1-43b9-9126-2806fdc9c732",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersListRefunds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRefundsRequest](../../models/operations/listrefundsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListRefundsResponse](../../models/operations/listrefundsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getRefund

Get details of a refund for a card transfer.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRefund" method="get" path="/accounts/{accountID}/transfers/{transferID}/refunds/{refundID}" -->
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
  const result = await moov.transfers.getRefund({
    transferID: "e90d3386-c5b2-4e2b-b841-efc590eba6c0",
    accountID: "bbb69538-edaa-4a0b-b107-f46f2da89864",
    refundID: "8e12687e-a4e8-46c9-9e11-a57bbd781e44",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transfersGetRefund } from "@moovio/sdk/funcs/transfersGetRefund.js";

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
  const res = await transfersGetRefund(moov, {
    transferID: "e90d3386-c5b2-4e2b-b841-efc590eba6c0",
    accountID: "bbb69538-edaa-4a0b-b107-f46f2da89864",
    refundID: "8e12687e-a4e8-46c9-9e11-a57bbd781e44",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGetRefund failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRefundRequest](../../models/operations/getrefundrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetRefundResponse](../../models/operations/getrefundresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createReversal

Reverses a card transfer by initiating a cancellation or refund depending on the transaction status. 
Read our [reversals guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) 
to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createReversal" method="post" path="/accounts/{accountID}/transfers/{transferID}/reversals" -->
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
  const result = await moov.transfers.createReversal({
    xIdempotencyKey: "b91d00b2-4ecb-4eb4-a67f-d6f76c0b7ad8",
    accountID: "f225b49d-911b-440b-baed-6065968b69cb",
    transferID: "a17b29e2-4af6-4c9d-ad3a-dd0ded2966ad",
    createReversal: {
      amount: 1000,
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
import { transfersCreateReversal } from "@moovio/sdk/funcs/transfersCreateReversal.js";

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
  const res = await transfersCreateReversal(moov, {
    xIdempotencyKey: "b91d00b2-4ecb-4eb4-a67f-d6f76c0b7ad8",
    accountID: "f225b49d-911b-440b-baed-6065968b69cb",
    transferID: "a17b29e2-4af6-4c9d-ad3a-dd0ded2966ad",
    createReversal: {
      amount: 1000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreateReversal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateReversalRequest](../../models/operations/createreversalrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateReversalResponse](../../models/operations/createreversalresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400, 409                       | application/json               |
| errors.ReversalValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |