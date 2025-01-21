# Representatives
(*representatives*)

## Overview

### Available Operations

* [createRepresentative](#createrepresentative) - Moov accounts associated with businesses require information regarding individuals who represent the business. 
You can provide this information by creating a representative. Each account is allowed a maximum of 7 representatives. 
Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [listRepresentatives](#listrepresentatives) - A Moov account may have multiple representatives depending on the associated business’s ownership and management structure. 
You can use this method to list all the representatives for a given Moov account. 
Note that Moov accounts associated with an individual do not have representatives. 
Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [deleteRepresentative](#deleterepresentative) - Deletes a business representative associated with a Moov account. Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [getRepresentative](#getrepresentative) - Retrieve a specific representative associated with a given Moov account. Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [updateRepresentative](#updaterepresentative) - If a representative’s information has changed you can patch the information associated with a specific representative ID. 
Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

When **can** profile data be updated:

- For unverified representatives, all profile data can be edited.
- During the verification process, missing or incomplete profile data can be edited.
- Verified representatives can only add missing profile data.

When **can’t** profile data be updated:

- Verified representatives cannot change any existing profile data.

If you need to update information in a locked state, please contact Moov support.

## createRepresentative

Moov accounts associated with businesses require information regarding individuals who represent the business. 
You can provide this information by creating a representative. Each account is allowed a maximum of 7 representatives. 
Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.representatives.createRepresentative({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "602bcb92-e33e-47e9-874b-f8c8cdea8a6e",
    createRepresentative: {
      name: {
        firstName: "Jordan",
        middleName: "Reese",
        lastName: "Lee",
        suffix: "Jr",
      },
      phone: {
        number: "8185551212",
        countryCode: "1",
      },
      email: "jordan.lee@classbooker.dev",
      address: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      birthDate: {
        day: 9,
        month: 11,
        year: 1989,
      },
      responsibilities: {
        ownershipPercentage: 38,
        jobTitle: "CEO",
      },
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
import { representativesCreateRepresentative } from "moov-sdk/funcs/representativesCreateRepresentative.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await representativesCreateRepresentative(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "602bcb92-e33e-47e9-874b-f8c8cdea8a6e",
    createRepresentative: {
      name: {
        firstName: "Jordan",
        middleName: "Reese",
        lastName: "Lee",
        suffix: "Jr",
      },
      phone: {
        number: "8185551212",
        countryCode: "1",
      },
      email: "jordan.lee@classbooker.dev",
      address: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      birthDate: {
        day: 9,
        month: 11,
        year: 1989,
      },
      responsibilities: {
        ownershipPercentage: 38,
        jobTitle: "CEO",
      },
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
| `request`                                                                                                                                                                      | [operations.CreateRepresentativeRequest](../../models/operations/createrepresentativerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateRepresentativeSecurity](../../models/operations/createrepresentativesecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Representative](../../models/components/representative.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GenericError                  | 400, 409                             | application/json                     |
| errors.RepresentativeValidationError | 422                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## listRepresentatives

A Moov account may have multiple representatives depending on the associated business’s ownership and management structure. 
You can use this method to list all the representatives for a given Moov account. 
Note that Moov accounts associated with an individual do not have representatives. 
Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.representatives.listRepresentatives({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "33c72fc5-9781-4400-9547-0fa6966c8791",
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
import { representativesListRepresentatives } from "moov-sdk/funcs/representativesListRepresentatives.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await representativesListRepresentatives(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "33c72fc5-9781-4400-9547-0fa6966c8791",
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
| `request`                                                                                                                                                                      | [operations.ListRepresentativesRequest](../../models/operations/listrepresentativesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListRepresentativesSecurity](../../models/operations/listrepresentativessecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Representative[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteRepresentative

Deletes a business representative associated with a Moov account. Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  await moov.representatives.deleteRepresentative({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "8c15ae30-39cc-45a6-a9b1-f96dfd44efa8",
    representativeID: "302eff0a-1b46-4437-bfa0-532d4401ffcd",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { representativesDeleteRepresentative } from "moov-sdk/funcs/representativesDeleteRepresentative.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await representativesDeleteRepresentative(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "8c15ae30-39cc-45a6-a9b1-f96dfd44efa8",
    representativeID: "302eff0a-1b46-4437-bfa0-532d4401ffcd",
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
| `request`                                                                                                                                                                      | [operations.DeleteRepresentativeRequest](../../models/operations/deleterepresentativerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteRepresentativeSecurity](../../models/operations/deleterepresentativesecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getRepresentative

Retrieve a specific representative associated with a given Moov account. Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.representatives.getRepresentative({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "64980616-9a3a-476e-b482-151eb6571b76",
    representativeID: "7b611595-93d0-48cc-9da4-3aac709d069a",
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
import { representativesGetRepresentative } from "moov-sdk/funcs/representativesGetRepresentative.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await representativesGetRepresentative(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "64980616-9a3a-476e-b482-151eb6571b76",
    representativeID: "7b611595-93d0-48cc-9da4-3aac709d069a",
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
| `request`                                                                                                                                                                      | [operations.GetRepresentativeRequest](../../models/operations/getrepresentativerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetRepresentativeSecurity](../../models/operations/getrepresentativesecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Representative](../../models/components/representative.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateRepresentative

If a representative’s information has changed you can patch the information associated with a specific representative ID. 
Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.

To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

When **can** profile data be updated:

- For unverified representatives, all profile data can be edited.
- During the verification process, missing or incomplete profile data can be edited.
- Verified representatives can only add missing profile data.

When **can’t** profile data be updated:

- Verified representatives cannot change any existing profile data.

If you need to update information in a locked state, please contact Moov support.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.representatives.updateRepresentative({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "377d9553-179a-45f6-8ed4-c92810fbb4d0",
    representativeID: "54619159-548e-45ed-b917-271fb71fc438",
    updateRepresentative: {
      name: {
        firstName: "Jordan",
        middleName: "Reese",
        lastName: "Lee",
        suffix: "Jr",
      },
      phone: {
        number: "8185551212",
        countryCode: "1",
      },
      address: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      birthDate: {
        day: 9,
        month: 11,
        year: 1989,
      },
      responsibilities: {
        ownershipPercentage: 38,
        jobTitle: "CEO",
      },
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
import { representativesUpdateRepresentative } from "moov-sdk/funcs/representativesUpdateRepresentative.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await representativesUpdateRepresentative(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "377d9553-179a-45f6-8ed4-c92810fbb4d0",
    representativeID: "54619159-548e-45ed-b917-271fb71fc438",
    updateRepresentative: {
      name: {
        firstName: "Jordan",
        middleName: "Reese",
        lastName: "Lee",
        suffix: "Jr",
      },
      phone: {
        number: "8185551212",
        countryCode: "1",
      },
      address: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      birthDate: {
        day: 9,
        month: 11,
        year: 1989,
      },
      responsibilities: {
        ownershipPercentage: 38,
        jobTitle: "CEO",
      },
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
| `request`                                                                                                                                                                      | [operations.UpdateRepresentativeRequest](../../models/operations/updaterepresentativerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateRepresentativeSecurity](../../models/operations/updaterepresentativesecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Representative](../../models/components/representative.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |