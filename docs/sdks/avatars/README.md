# Avatars

## Overview

### Available Operations

* [get](#get) - Get avatar image for an account using a unique ID.    

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/profile-enrichment.read` scope.
* [upload](#upload) - Upload a user avatar image for an account.

The image will be normalized to 512x512 PNG format and stored separately from 
automatically discovered logos. User-uploaded avatars take precedence over enriched avatars at read time.

This endpoint only accepts accountID values for the uniqueID parameter.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts.write` scope.
* [delete](#delete) - Delete a user-uploaded avatar for an account.

After deletion, the avatar endpoint will fall back to the enriched avatar
or an account-type-aware fallback icon.

This endpoint only accepts accountID values for the uniqueID parameter.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts.write` scope.

## get

Get avatar image for an account using a unique ID.    

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/profile-enrichment.read` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAvatar" method="get" path="/avatars/{uniqueID}" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.avatars.get({
    uniqueID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { avatarsGet } from "@moovio/sdk/funcs/avatarsGet.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await avatarsGet(moov, {
    uniqueID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("avatarsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAvatarRequest](../../models/operations/getavatarrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAvatarResponse](../../models/operations/getavatarresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## upload

Upload a user avatar image for an account.

The image will be normalized to 512x512 PNG format and stored separately from 
automatically discovered logos. User-uploaded avatars take precedence over enriched avatars at read time.

This endpoint only accepts accountID values for the uniqueID parameter.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadAvatar" method="put" path="/avatars/{uniqueID}" -->
```typescript
import { Moov } from "@moovio/sdk";
import { openAsBlob } from "node:fs";

const moov = new Moov();

async function run() {
  const result = await moov.avatars.upload({
    username: "",
  }, {
    uniqueID: "<id>",
    avatarUploadRequest: {
      file: await openAsBlob("example.file"),
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
import { avatarsUpload } from "@moovio/sdk/funcs/avatarsUpload.js";
import { openAsBlob } from "node:fs";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await avatarsUpload(moov, {
    username: "",
  }, {
    uniqueID: "<id>",
    avatarUploadRequest: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("avatarsUpload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadAvatarRequest](../../models/operations/uploadavatarrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UploadAvatarSecurity](../../models/operations/uploadavatarsecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadAvatarResponse](../../models/operations/uploadavatarresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## delete

Delete a user-uploaded avatar for an account.

After deletion, the avatar endpoint will fall back to the enriched avatar
or an account-type-aware fallback icon.

This endpoint only accepts accountID values for the uniqueID parameter.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the `/accounts.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAvatar" method="delete" path="/avatars/{uniqueID}" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.avatars.delete({
    username: "",
  }, {
    uniqueID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { avatarsDelete } from "@moovio/sdk/funcs/avatarsDelete.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await avatarsDelete(moov, {
    username: "",
  }, {
    uniqueID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("avatarsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAvatarRequest](../../models/operations/deleteavatarrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteAvatarSecurity](../../models/operations/deleteavatarsecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteAvatarResponse](../../models/operations/deleteavatarresponse.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |