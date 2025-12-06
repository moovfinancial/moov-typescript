# TerminalApplications

## Overview

### Available Operations

* [create](#create) - Create a new terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.write` scope.
* [list](#list) - List all the terminal applications for a Moov Account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.read` scope.
* [get](#get) - Fetch a specific terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.read` scope.
* [delete](#delete) - Delete a specific terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.write` scope.
* [createVersion](#createversion) - Register a new version of a terminal application. For Android applications, this is used to register a new version code of the application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.write` scope.

## create

Create a new terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTerminalApplication" method="post" path="/terminal-applications" -->
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
  const result = await moov.terminalApplications.create({
    platform: "android",
    packageName: "com.example.app",
    sha256Digest: "AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD",
    versionCode: "20332277",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { terminalApplicationsCreate } from "@moovio/sdk/funcs/terminalApplicationsCreate.js";

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
  const res = await terminalApplicationsCreate(moov, {
    platform: "android",
    packageName: "com.example.app",
    sha256Digest: "AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD:EE:FF:AA:BB:CC:DD",
    versionCode: "20332277",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalApplicationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateTerminalApplication](../../models/components/createterminalapplication.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTerminalApplicationResponse](../../models/operations/createterminalapplicationresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.GenericError             | 400, 409                        | application/json                |
| errors.TerminalApplicationError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## list

List all the terminal applications for a Moov Account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTerminalApplications" method="get" path="/terminal-applications" -->
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
  const result = await moov.terminalApplications.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { terminalApplicationsList } from "@moovio/sdk/funcs/terminalApplicationsList.js";

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
  const res = await terminalApplicationsList(moov, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalApplicationsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTerminalApplicationsRequest](../../models/operations/listterminalapplicationsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTerminalApplicationsResponse](../../models/operations/listterminalapplicationsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Fetch a specific terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTerminalApplication" method="get" path="/terminal-applications/{terminalApplicationID}" -->
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
  const result = await moov.terminalApplications.get({
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { terminalApplicationsGet } from "@moovio/sdk/funcs/terminalApplicationsGet.js";

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
  const res = await terminalApplicationsGet(moov, {
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalApplicationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTerminalApplicationRequest](../../models/operations/getterminalapplicationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTerminalApplicationResponse](../../models/operations/getterminalapplicationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Delete a specific terminal application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteTerminalApplication" method="delete" path="/terminal-applications/{terminalApplicationID}" -->
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
  const result = await moov.terminalApplications.delete({
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { terminalApplicationsDelete } from "@moovio/sdk/funcs/terminalApplicationsDelete.js";

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
  const res = await terminalApplicationsDelete(moov, {
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalApplicationsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTerminalApplicationRequest](../../models/operations/deleteterminalapplicationrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteTerminalApplicationResponse](../../models/operations/deleteterminalapplicationresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## createVersion

Register a new version of a terminal application. For Android applications, this is used to register a new version code of the application.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/terminal-applications.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTerminalApplicationVersion" method="post" path="/terminal-applications/{terminalApplicationID}/versions" -->
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
  const result = await moov.terminalApplications.createVersion({
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
    terminalApplicationVersion: {
      version: "20440059",
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
import { terminalApplicationsCreateVersion } from "@moovio/sdk/funcs/terminalApplicationsCreateVersion.js";

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
  const res = await terminalApplicationsCreateVersion(moov, {
    terminalApplicationID: "12345678-1234-1234-1234-123456789012",
    terminalApplicationVersion: {
      version: "20440059",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalApplicationsCreateVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTerminalApplicationVersionRequest](../../models/operations/createterminalapplicationversionrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTerminalApplicationVersionResponse](../../models/operations/createterminalapplicationversionresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.GenericError             | 400, 409                        | application/json                |
| errors.TerminalApplicationError | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |