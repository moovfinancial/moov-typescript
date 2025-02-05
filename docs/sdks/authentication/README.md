# Authentication
(*authentication*)

## Overview

### Available Operations

* [revokeAccessToken](#revokeaccesstoken) - Revoke an auth token.

Allows clients to notify the authorization server that a previously obtained refresh or access token is no longer needed.
* [createAccessToken](#createaccesstoken) - Create or refresh an access token.

## revokeAccessToken

Revoke an auth token.

Allows clients to notify the authorization server that a previously obtained refresh or access token is no longer needed.

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
  const result = await moov.authentication.revokeAccessToken({
    token: "<value>",
    clientId: "5clTR_MdVrrkgxw2",
    clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
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
import { authenticationRevokeAccessToken } from "@moovio/sdk/funcs/authenticationRevokeAccessToken.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await authenticationRevokeAccessToken(moov, {
    token: "<value>",
    clientId: "5clTR_MdVrrkgxw2",
    clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
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
| `request`                                                                                                                                                                      | [components.RevokeTokenRequest](../../models/components/revoketokenrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RevokeAccessTokenResponse](../../models/operations/revokeaccesstokenresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400                            | application/json               |
| errors.RevokeTokenRequestError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## createAccessToken

Create or refresh an access token.

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
  const result = await moov.authentication.createAccessToken({
    grantType: "client_credentials",
    clientId: "5clTR_MdVrrkgxw2",
    clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
    scope: "/accounts.read /accounts.write",
    refreshToken: "eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...",
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
import { authenticationCreateAccessToken } from "@moovio/sdk/funcs/authenticationCreateAccessToken.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await authenticationCreateAccessToken(moov, {
    grantType: "client_credentials",
    clientId: "5clTR_MdVrrkgxw2",
    clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
    scope: "/accounts.read /accounts.write",
    refreshToken: "eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...",
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
| `request`                                                                                                                                                                      | [components.AuthTokenRequest](../../models/components/authtokenrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAccessTokenResponse](../../models/operations/createaccesstokenresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GenericError          | 400                          | application/json             |
| errors.AuthTokenRequestError | 422                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |