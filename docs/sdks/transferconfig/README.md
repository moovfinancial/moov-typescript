# TransferConfig

## Overview

### Available Operations

* [create](#create) - Create a transfer config for an account.
* [get](#get) - Get the transfer config for an account.
* [update](#update) - Update the transfer config for an account.

## create

Create a transfer config for an account.

### Example Usage: Fixed amount tip config created

<!-- UsageSnippet language="typescript" operationID="createTransferConfig" method="post" path="/accounts/{accountID}/transfer-config" example="Fixed amount tip config created" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const result = await moov.transferConfig.create({
    accountID: "<id>",
    createTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
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
import { transferConfigCreate } from "@moovio/sdk/funcs/transferConfigCreate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const res = await transferConfigCreate(moov, {
    accountID: "<id>",
    createTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transferConfigCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Percentage tip config created

<!-- UsageSnippet language="typescript" operationID="createTransferConfig" method="post" path="/accounts/{accountID}/transfer-config" example="Percentage tip config created" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const result = await moov.transferConfig.create({
    accountID: "<id>",
    createTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
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
import { transferConfigCreate } from "@moovio/sdk/funcs/transferConfigCreate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const res = await transferConfigCreate(moov, {
    accountID: "<id>",
    createTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transferConfigCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferConfigRequest](../../models/operations/createtransferconfigrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransferConfigResponse](../../models/operations/createtransferconfigresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GenericError                  | 400                                  | application/json                     |
| errors.TransferConfigValidationError | 422                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## get

Get the transfer config for an account.

### Example Usage: Fixed amount tip config

<!-- UsageSnippet language="typescript" operationID="getTransferConfig" method="get" path="/accounts/{accountID}/transfer-config" example="Fixed amount tip config" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const result = await moov.transferConfig.get({
    accountID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transferConfigGet } from "@moovio/sdk/funcs/transferConfigGet.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const res = await transferConfigGet(moov, {
    accountID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transferConfigGet failed:", res.error);
  }
}

run();
```
### Example Usage: Percentage tip config

<!-- UsageSnippet language="typescript" operationID="getTransferConfig" method="get" path="/accounts/{accountID}/transfer-config" example="Percentage tip config" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const result = await moov.transferConfig.get({
    accountID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transferConfigGet } from "@moovio/sdk/funcs/transferConfigGet.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const res = await transferConfigGet(moov, {
    accountID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transferConfigGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransferConfigRequest](../../models/operations/gettransferconfigrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransferConfigResponse](../../models/operations/gettransferconfigresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update the transfer config for an account.

### Example Usage: Updated fixed amount tip config

<!-- UsageSnippet language="typescript" operationID="updateTransferConfig" method="put" path="/accounts/{accountID}/transfer-config" example="Updated fixed amount tip config" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const result = await moov.transferConfig.update({
    accountID: "<id>",
    putTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
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
import { transferConfigUpdate } from "@moovio/sdk/funcs/transferConfigUpdate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const res = await transferConfigUpdate(moov, {
    accountID: "<id>",
    putTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transferConfigUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Updated percentage tip config

<!-- UsageSnippet language="typescript" operationID="updateTransferConfig" method="put" path="/accounts/{accountID}/transfer-config" example="Updated percentage tip config" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const result = await moov.transferConfig.update({
    accountID: "<id>",
    putTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
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
import { transferConfigUpdate } from "@moovio/sdk/funcs/transferConfigUpdate.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    basicAuth: {
      username: "<YOUR_USERNAME_HERE>",
      password: "<YOUR_PASSWORD_HERE>",
      accessToken: "<YOUR_ACCESS_TOKEN_HERE>",
    },
  },
});

async function run() {
  const res = await transferConfigUpdate(moov, {
    accountID: "<id>",
    putTransferConfig: {
      tipPresets: {
        fixedAmountOptions: [
          {
            currency: "USD",
            valueDecimal: "12.987654321",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transferConfigUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTransferConfigRequest](../../models/operations/updatetransferconfigrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTransferConfigResponse](../../models/operations/updatetransferconfigresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GenericError                  | 400                                  | application/json                     |
| errors.TransferConfigValidationError | 422                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |