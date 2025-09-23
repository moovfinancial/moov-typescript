# WalletTransactions
(*walletTransactions*)

## Overview

### Available Operations

* [list](#list) - List all the transactions associated with a particular Moov wallet. 

Read our [wallet transactions guide](https://docs.moov.io/guides/sources/wallets/transactions/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/wallets.read` scope.
* [get](#get) - Get details on a specific wallet transaction. 

Read our [wallet transactions guide](https://docs.moov.io/guides/sources/wallets/transactions/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/wallets.read` scope.

## list

List all the transactions associated with a particular Moov wallet. 

Read our [wallet transactions guide](https://docs.moov.io/guides/sources/wallets/transactions/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/wallets.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listWalletTransactions" method="get" path="/accounts/{accountID}/wallets/{walletID}/transactions" -->
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
  const result = await moov.walletTransactions.list({
    accountID: "69e4529b-baf0-4f00-877b-123cfd9d6116",
    skip: 60,
    count: 20,
    walletID: "4f971587-62fe-42c9-bc61-7409d9c8660c",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { walletTransactionsList } from "@moovio/sdk/funcs/walletTransactionsList.js";

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
  const res = await walletTransactionsList(moov, {
    accountID: "69e4529b-baf0-4f00-877b-123cfd9d6116",
    skip: 60,
    count: 20,
    walletID: "4f971587-62fe-42c9-bc61-7409d9c8660c",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("walletTransactionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListWalletTransactionsRequest](../../models/operations/listwallettransactionsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListWalletTransactionsResponse](../../models/operations/listwallettransactionsresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.ListWalletTransactionsValidationError | 422                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## get

Get details on a specific wallet transaction. 

Read our [wallet transactions guide](https://docs.moov.io/guides/sources/wallets/transactions/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts/{accountID}/wallets.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWalletTransaction" method="get" path="/accounts/{accountID}/wallets/{walletID}/transactions/{transactionID}" -->
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
  const result = await moov.walletTransactions.get({
    accountID: "f0b02d73-10dc-42e6-8030-fd78fcbc114f",
    walletID: "03db97f6-c308-4595-8f43-fd247f1bd3f2",
    transactionID: "e0a32cf5-5758-49ba-83da-75bf02c9c6d7",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { walletTransactionsGet } from "@moovio/sdk/funcs/walletTransactionsGet.js";

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
  const res = await walletTransactionsGet(moov, {
    accountID: "f0b02d73-10dc-42e6-8030-fd78fcbc114f",
    walletID: "03db97f6-c308-4595-8f43-fd247f1bd3f2",
    transactionID: "e0a32cf5-5758-49ba-83da-75bf02c9c6d7",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("walletTransactionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWalletTransactionRequest](../../models/operations/getwallettransactionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetWalletTransactionResponse](../../models/operations/getwallettransactionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |