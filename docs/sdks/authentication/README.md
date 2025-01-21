# Authentication
(*authentication*)

## Overview

### Available Operations

* [revokeAuthToken](#revokeauthtoken) - Revoke an auth token.

Allows clients to notify the authorization server that a previously obtained refresh or access token is no longer needed.
* [createAuthToken](#createauthtoken) - Create or refresh an access token.

## revokeAuthToken

Revoke an auth token.

Allows clients to notify the authorization server that a previously obtained refresh or access token is no longer needed.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  await moov.authentication.revokeAuthToken({
    revokeTokenRequest: {
      token: "<value>",
      clientId: "5clTR_MdVrrkgxw2",
      clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { authenticationRevokeAuthToken } from "moov-sdk/funcs/authenticationRevokeAuthToken.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await authenticationRevokeAuthToken(moov, {
    revokeTokenRequest: {
      token: "<value>",
      clientId: "5clTR_MdVrrkgxw2",
      clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
    },
  });

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
| `request`                                                                                                                                                                      | [operations.RevokeAuthTokenRequest](../../models/operations/revokeauthtokenrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400                            | application/json               |
| errors.RevokeTokenRequestError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## createAuthToken

Create or refresh an access token.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.authentication.createAuthToken({
    authTokenRequest: {
      grantType: "refresh_token",
      clientId: "5clTR_MdVrrkgxw2",
      clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
      scope: "/accounts.read /accounts.write",
      refreshToken: "eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...",
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
import { MoovCore } from "moov-sdk/core.js";
import { authenticationCreateAuthToken } from "moov-sdk/funcs/authenticationCreateAuthToken.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await authenticationCreateAuthToken(moov, {
    authTokenRequest: {
      grantType: "refresh_token",
      clientId: "5clTR_MdVrrkgxw2",
      clientSecret: "dNC-hg7sVm22jc3g_Eogtyu0_1Mqh_4-",
      scope: "/accounts.read /accounts.write",
      refreshToken: "eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...",
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
| `request`                                                                                                                                                                      | [operations.CreateAuthTokenRequest](../../models/operations/createauthtokenrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuthToken](../../models/components/authtoken.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GenericError          | 400                          | application/json             |
| errors.AuthTokenRequestError | 422                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |