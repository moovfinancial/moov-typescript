# Files
(*files*)

## Overview

### Available Operations

* [uploadFile](#uploadfile) - Upload a file and link it to the specified Moov account. 

The maximum file size is 10MB. Each account is allowed a maximum of 50 files. Acceptable file types include csv, jpg, pdf, 
and png. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the 
`/accounts/{accountID}/files.write` scope.
* [listFiles](#listfiles) - List all the files associated with a particular Moov account.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the 
`/accounts/{accountID}/files.read` scope.
* [getFileDetails](#getfiledetails) - Retrieve file details associated with a specific Moov account.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the 
`/accounts/{accountID}/files.read` scope.

## uploadFile

Upload a file and link it to the specified Moov account. 

The maximum file size is 10MB. Each account is allowed a maximum of 50 files. Acceptable file types include csv, jpg, pdf, 
and png. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the 
`/accounts/{accountID}/files.write` scope.

### Example Usage

```typescript
import { Moov } from "moov-sdk";
import { openAsBlob } from "node:fs";

const moov = new Moov();

async function run() {
  const result = await moov.files.uploadFile({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "997f59d4-6b68-4f95-a825-1ae3f3faf278",
    fileUploadRequestMultiPart: {
      file: await openAsBlob("example.file"),
      filePurpose: "representative_verification",
      metadata: "{\"requirement_id\": \"document.individual.verification\"}",
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
import { filesUploadFile } from "moov-sdk/funcs/filesUploadFile.js";
import { openAsBlob } from "node:fs";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await filesUploadFile(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "997f59d4-6b68-4f95-a825-1ae3f3faf278",
    fileUploadRequestMultiPart: {
      file: await openAsBlob("example.file"),
      filePurpose: "representative_verification",
      metadata: "{\"requirement_id\": \"document.individual.verification\"}",
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
| `request`                                                                                                                                                                      | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UploadFileSecurity](../../models/operations/uploadfilesecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FileDetails](../../models/components/filedetails.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.GenericError        | 400, 409                   | application/json           |
| errors.FileValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## listFiles

List all the files associated with a particular Moov account.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the 
`/accounts/{accountID}/files.read` scope.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.files.listFiles({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a3c35406-9eb6-4801-bbac-0649c31c058a",
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
import { filesListFiles } from "moov-sdk/funcs/filesListFiles.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await filesListFiles(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a3c35406-9eb6-4801-bbac-0649c31c058a",
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
| `request`                                                                                                                                                                      | [operations.ListFilesRequest](../../models/operations/listfilesrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListFilesSecurity](../../models/operations/listfilessecurity.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FileDetails[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getFileDetails

Retrieve file details associated with a specific Moov account.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the 
`/accounts/{accountID}/files.read` scope.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.files.getFileDetails({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "346add0a-4dae-4729-8e74-1a50d00d677a",
    fileID: "bf657841-ba2d-4060-ad21-eb2b7372cf85",
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
import { filesGetFileDetails } from "moov-sdk/funcs/filesGetFileDetails.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await filesGetFileDetails(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "346add0a-4dae-4729-8e74-1a50d00d677a",
    fileID: "bf657841-ba2d-4060-ad21-eb2b7372cf85",
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
| `request`                                                                                                                                                                      | [operations.GetFileDetailsRequest](../../models/operations/getfiledetailsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetFileDetailsSecurity](../../models/operations/getfiledetailssecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FileDetails](../../models/components/filedetails.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |