# Wallets
(*wallets*)

## Overview

### Available Operations

* [listWallets](#listwallets) - List the wallets associated with a Moov account. Read our [Moov wallets guide](https://docs.moov.io/guides/sources/wallets/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/wallets.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [getWallet](#getwallet) - Get information on a specific wallet (e.g., the available balance). Read our [Moov wallets guide](https://docs.moov.io/guides/sources/wallets/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/wallets.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

## listWallets

List the wallets associated with a Moov account. Read our [Moov wallets guide](https://docs.moov.io/guides/sources/wallets/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/wallets.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.wallets.listWallets({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "60acf390-dc7f-4510-9b9b-ec968d375f0c",
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
import { walletsListWallets } from "@moovio/sdk/funcs/walletsListWallets.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await walletsListWallets(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "60acf390-dc7f-4510-9b9b-ec968d375f0c",
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
| `request`                                                                                                                                                                      | [operations.ListWalletsRequest](../../models/operations/listwalletsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListWalletsSecurity](../../models/operations/listwalletssecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Wallet[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getWallet

Get information on a specific wallet (e.g., the available balance). Read our [Moov wallets guide](https://docs.moov.io/guides/sources/wallets/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/wallets.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.wallets.getWallet({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "499bec36-0099-43cb-884f-620887342259",
    walletID: "bc779af6-b7d5-464a-ad1f-f6476fa72706",
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
import { walletsGetWallet } from "@moovio/sdk/funcs/walletsGetWallet.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await walletsGetWallet(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "499bec36-0099-43cb-884f-620887342259",
    walletID: "bc779af6-b7d5-464a-ad1f-f6476fa72706",
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
| `request`                                                                                                                                                                      | [operations.GetWalletRequest](../../models/operations/getwalletrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetWalletSecurity](../../models/operations/getwalletsecurity.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Wallet](../../models/components/wallet.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |