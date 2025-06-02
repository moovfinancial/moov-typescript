# IssuingTransactions
(*issuingTransactions*)

## Overview

### Available Operations

* [listAuthorizations](#listauthorizations) - List issued card authorizations associated with a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.
* [getAuthorization](#getauthorization) - Retrieves details of an authorization associated with a specific Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.
* [listAuthorizationEvents](#listauthorizationevents) - List card network and Moov platform events that affect the authorization and its hold on a wallet balance.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.
* [list](#list) - List issued card transactions associated with a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.
* [get](#get) - Retrieves details of an issued card transaction associated with a specific Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.

## listAuthorizations

List issued card authorizations associated with a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.issuingTransactions.listAuthorizations({
    accountID: "6465d95a-e945-4a49-8983-d74faa135bb4",
    skip: 60,
    count: 20,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { issuingTransactionsListAuthorizations } from "@moovio/sdk/funcs/issuingTransactionsListAuthorizations.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await issuingTransactionsListAuthorizations(moov, {
    accountID: "6465d95a-e945-4a49-8983-d74faa135bb4",
    skip: 60,
    count: 20,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIssuedCardAuthorizationsRequest](../../models/operations/listissuedcardauthorizationsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIssuedCardAuthorizationsResponse](../../models/operations/listissuedcardauthorizationsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAuthorization

Retrieves details of an authorization associated with a specific Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.issuingTransactions.getAuthorization({
    accountID: "0ccac2cc-6692-44a9-b0d1-35a1892c2db2",
    authorizationID: "d9ee8dde-b1eb-492f-bea1-d8e09bccbc52",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { issuingTransactionsGetAuthorization } from "@moovio/sdk/funcs/issuingTransactionsGetAuthorization.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await issuingTransactionsGetAuthorization(moov, {
    accountID: "0ccac2cc-6692-44a9-b0d1-35a1892c2db2",
    authorizationID: "d9ee8dde-b1eb-492f-bea1-d8e09bccbc52",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIssuedCardAuthorizationRequest](../../models/operations/getissuedcardauthorizationrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIssuedCardAuthorizationResponse](../../models/operations/getissuedcardauthorizationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuthorizationEvents

List card network and Moov platform events that affect the authorization and its hold on a wallet balance.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.issuingTransactions.listAuthorizationEvents({
    accountID: "f30f8cb3-64d8-4a5f-a427-965317fa559a",
    authorizationID: "e6a0946d-f3d8-451e-9b1c-5bc346a95dd6",
    skip: 60,
    count: 20,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { issuingTransactionsListAuthorizationEvents } from "@moovio/sdk/funcs/issuingTransactionsListAuthorizationEvents.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await issuingTransactionsListAuthorizationEvents(moov, {
    accountID: "f30f8cb3-64d8-4a5f-a427-965317fa559a",
    authorizationID: "e6a0946d-f3d8-451e-9b1c-5bc346a95dd6",
    skip: 60,
    count: 20,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIssuedCardAuthorizationEventsRequest](../../models/operations/listissuedcardauthorizationeventsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIssuedCardAuthorizationEventsResponse](../../models/operations/listissuedcardauthorizationeventsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## list

List issued card transactions associated with a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.issuingTransactions.list({
    accountID: "4efcb497-f915-4b6e-b973-e5e5bcc1fd34",
    skip: 60,
    count: 20,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { issuingTransactionsList } from "@moovio/sdk/funcs/issuingTransactionsList.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await issuingTransactionsList(moov, {
    accountID: "4efcb497-f915-4b6e-b973-e5e5bcc1fd34",
    skip: 60,
    count: 20,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIssuedCardTransactionsRequest](../../models/operations/listissuedcardtransactionsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIssuedCardTransactionsResponse](../../models/operations/listissuedcardtransactionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Retrieves details of an issued card transaction associated with a specific Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.issuingTransactions.get({
    accountID: "b2b6e23c-a5aa-46a9-adb7-d12876e47288",
    cardTransactionID: "d5a1aab9-eb96-409a-ab95-88ac99cf00a5",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { issuingTransactionsGet } from "@moovio/sdk/funcs/issuingTransactionsGet.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await issuingTransactionsGet(moov, {
    accountID: "b2b6e23c-a5aa-46a9-adb7-d12876e47288",
    cardTransactionID: "d5a1aab9-eb96-409a-ab95-88ac99cf00a5",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIssuedCardTransactionRequest](../../models/operations/getissuedcardtransactionrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIssuedCardTransactionResponse](../../models/operations/getissuedcardtransactionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |