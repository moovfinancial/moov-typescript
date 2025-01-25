# Sweeps
(*sweeps*)

## Overview

### Available Operations

* [createSweepConfig](#createsweepconfig) - Create a sweep config for a wallet.
* [listSweepConfigs](#listsweepconfigs) - List sweep configs associated with an account.
* [getSweepConfig](#getsweepconfig) - Get a sweep config associated with a wallet.
* [patchSweepConfig](#patchsweepconfig) - Update settings on a sweep config.
* [listSweeps](#listsweeps) - List sweeps associated with a wallet.
* [getSweep](#getsweep) - Get details on a specific sweep.

## createSweepConfig

Create a sweep config for a wallet.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.sweeps.createSweepConfig({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "3a373e85-2777-40fe-aacd-52d6fc641d76",
    createSweepConfig: {
      walletID: "01234567-89ab-cdef-0123-456789abcdef",
      status: "enabled",
      pushPaymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
      pullPaymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
    },
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
import { sweepsCreateSweepConfig } from "@moovio/sdk/funcs/sweepsCreateSweepConfig.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await sweepsCreateSweepConfig(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "3a373e85-2777-40fe-aacd-52d6fc641d76",
    createSweepConfig: {
      walletID: "01234567-89ab-cdef-0123-456789abcdef",
      status: "enabled",
      pushPaymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
      pullPaymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
    },
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
| `request`                                                                                                                                                                      | [operations.CreateSweepConfigRequest](../../models/operations/createsweepconfigrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateSweepConfigSecurity](../../models/operations/createsweepconfigsecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SweepConfig](../../models/components/sweepconfig.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GenericError           | 400, 409                      | application/json              |
| errors.CreateSweepConfigError | 422                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## listSweepConfigs

List sweep configs associated with an account.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.sweeps.listSweepConfigs({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "b06d7726-4020-4fef-9035-75779c0fc48c",
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
import { sweepsListSweepConfigs } from "@moovio/sdk/funcs/sweepsListSweepConfigs.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await sweepsListSweepConfigs(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "b06d7726-4020-4fef-9035-75779c0fc48c",
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
| `request`                                                                                                                                                                      | [operations.ListSweepConfigsRequest](../../models/operations/listsweepconfigsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListSweepConfigsSecurity](../../models/operations/listsweepconfigssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SweepConfig[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getSweepConfig

Get a sweep config associated with a wallet.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.sweeps.getSweepConfig({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "1f4428ca-3d11-441b-93d5-3fada6a5db01",
    sweepConfigID: "acef9550-4b7b-4675-807b-71755d182b2f",
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
import { sweepsGetSweepConfig } from "@moovio/sdk/funcs/sweepsGetSweepConfig.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await sweepsGetSweepConfig(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "1f4428ca-3d11-441b-93d5-3fada6a5db01",
    sweepConfigID: "acef9550-4b7b-4675-807b-71755d182b2f",
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
| `request`                                                                                                                                                                      | [operations.GetSweepConfigRequest](../../models/operations/getsweepconfigrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetSweepConfigSecurity](../../models/operations/getsweepconfigsecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SweepConfig](../../models/components/sweepconfig.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## patchSweepConfig

Update settings on a sweep config.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.sweeps.patchSweepConfig({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "c0ee091a-5b72-49c9-9c8b-7cb99d7f9309",
    sweepConfigID: "c1f1c60c-cb13-4bc6-891c-f34d96682f06",
    patchSweepConfig: {
      status: "disabled",
    },
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
import { sweepsPatchSweepConfig } from "@moovio/sdk/funcs/sweepsPatchSweepConfig.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await sweepsPatchSweepConfig(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "c0ee091a-5b72-49c9-9c8b-7cb99d7f9309",
    sweepConfigID: "c1f1c60c-cb13-4bc6-891c-f34d96682f06",
    patchSweepConfig: {
      status: "disabled",
    },
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
| `request`                                                                                                                                                                      | [operations.PatchSweepConfigRequest](../../models/operations/patchsweepconfigrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PatchSweepConfigSecurity](../../models/operations/patchsweepconfigsecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SweepConfig](../../models/components/sweepconfig.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GenericError          | 400, 409                     | application/json             |
| errors.PatchSweepConfigError | 422                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## listSweeps

List sweeps associated with a wallet.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.sweeps.listSweeps({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "0fe45272-ee0d-401f-a10e-21e396676598",
    walletID: "5f738f67-1989-4589-beb1-3d2f5c53a821",
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
import { sweepsListSweeps } from "@moovio/sdk/funcs/sweepsListSweeps.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await sweepsListSweeps(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "0fe45272-ee0d-401f-a10e-21e396676598",
    walletID: "5f738f67-1989-4589-beb1-3d2f5c53a821",
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
| `request`                                                                                                                                                                      | [operations.ListSweepsRequest](../../models/operations/listsweepsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListSweepsSecurity](../../models/operations/listsweepssecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Sweep[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getSweep

Get details on a specific sweep.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.sweeps.getSweep({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "adb697e6-2888-48b9-b2c5-f2c3d487add5",
    walletID: "9f00e2b3-9dfb-48a3-9a25-a08e80f9cf36",
    sweepID: "a5324f55-fbec-4323-94e4-c512608bb175",
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
import { sweepsGetSweep } from "@moovio/sdk/funcs/sweepsGetSweep.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await sweepsGetSweep(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "adb697e6-2888-48b9-b2c5-f2c3d487add5",
    walletID: "9f00e2b3-9dfb-48a3-9a25-a08e80f9cf36",
    sweepID: "a5324f55-fbec-4323-94e4-c512608bb175",
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
| `request`                                                                                                                                                                      | [operations.GetSweepRequest](../../models/operations/getsweeprequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetSweepSecurity](../../models/operations/getsweepsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Sweep](../../models/components/sweep.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |