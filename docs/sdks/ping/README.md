# Ping
(*ping*)

## Overview

### Available Operations

* [ping](#ping) - A simple endpoint to check auth.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/ping.read` scope.

## ping

A simple endpoint to check auth.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/ping.read` scope.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  await moov.ping.ping({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { pingPing } from "moov-sdk/funcs/pingPing.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await pingPing(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PingRequest](../../models/operations/pingrequest.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PingSecurity](../../models/operations/pingsecurity.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |