# CardIssuing
(*cardIssuing*)

## Overview

### Available Operations

* [requestCard](#requestcard) - Request a virtual card be issued.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [listIssuedCards](#listissuedcards) - List Moov issued cards existing for the account.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [getIssuedCard](#getissuedcard) - Retrieve a single issued card associated with a Moov account.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [updateIssuedCard](#updateissuedcard) - Update a Moov issued card.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [getFullIssuedCard](#getfullissuedcard) - Get issued card with PAN, CVV, and expiration. 

Only use this endpoint if you have provided Moov with a copy of your PCI attestation of compliance.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.read-secure` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

## requestCard

Request a virtual card be issued.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cardIssuing.requestCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "9c0ff49b-9aaf-4815-b4a4-3e412558f6bc",
    requestCard: {
      fundingWalletID: "df7610a6-b14e-4eee-9a55-1890b6b3207c",
      authorizedUser: {
        firstName: "Tanya",
        lastName: "Flatley",
        birthDate: {
          day: 9,
          month: 11,
          year: 1989,
        },
      },
      formFactor: "virtual",
      expiration: {
        month: "01",
        year: "21",
      },
      controls: {
        velocityLimits: [
          {
            amount: 10000,
            interval: "per-transaction",
          },
          {
            amount: 10000,
            interval: "per-transaction",
          },
        ],
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
import { MoovCore } from "@moovio/sdk/core.js";
import { cardIssuingRequestCard } from "@moovio/sdk/funcs/cardIssuingRequestCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardIssuingRequestCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "9c0ff49b-9aaf-4815-b4a4-3e412558f6bc",
    requestCard: {
      fundingWalletID: "df7610a6-b14e-4eee-9a55-1890b6b3207c",
      authorizedUser: {
        firstName: "Tanya",
        lastName: "Flatley",
        birthDate: {
          day: 9,
          month: 11,
          year: 1989,
        },
      },
      formFactor: "virtual",
      expiration: {
        month: "01",
        year: "21",
      },
      controls: {
        velocityLimits: [
          {
            amount: 10000,
            interval: "per-transaction",
          },
          {
            amount: 10000,
            interval: "per-transaction",
          },
        ],
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
| `request`                                                                                                                                                                      | [operations.RequestCardRequest](../../models/operations/requestcardrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RequestCardSecurity](../../models/operations/requestcardsecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IssuedCard](../../models/components/issuedcard.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.GenericError     | 400                     | application/json        |
| errors.RequestCardError | 422                     | application/json        |
| errors.APIError         | 4XX, 5XX                | \*/\*                   |

## listIssuedCards

List Moov issued cards existing for the account.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cardIssuing.listIssuedCards({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "33bbd03b-931d-4e6d-b831-8698f4aee791",
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
import { cardIssuingListIssuedCards } from "@moovio/sdk/funcs/cardIssuingListIssuedCards.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardIssuingListIssuedCards(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "33bbd03b-931d-4e6d-b831-8698f4aee791",
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
| `request`                                                                                                                                                                      | [operations.ListIssuedCardsRequest](../../models/operations/listissuedcardsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListIssuedCardsSecurity](../../models/operations/listissuedcardssecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IssuedCard[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getIssuedCard

Retrieve a single issued card associated with a Moov account.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cardIssuing.getIssuedCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "c63d9bae-2097-4bfa-8ac7-e9e8dff6e9ae",
    issuedCardID: "aa0c86df-7f7d-4200-9ee4-24ba8870a7d4",
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
import { cardIssuingGetIssuedCard } from "@moovio/sdk/funcs/cardIssuingGetIssuedCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardIssuingGetIssuedCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "c63d9bae-2097-4bfa-8ac7-e9e8dff6e9ae",
    issuedCardID: "aa0c86df-7f7d-4200-9ee4-24ba8870a7d4",
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
| `request`                                                                                                                                                                      | [operations.GetIssuedCardRequest](../../models/operations/getissuedcardrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetIssuedCardSecurity](../../models/operations/getissuedcardsecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IssuedCard](../../models/components/issuedcard.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIssuedCard

Update a Moov issued card.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  await moov.cardIssuing.updateIssuedCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "fc445a8c-5b64-4ab9-ba30-5bdb0ffc02b0",
    issuedCardID: "064f9e03-fc5f-4a7d-83d2-2ec946f77ff2",
    updateIssuedCard: {
      authorizedUser: {
        birthDate: {
          day: 9,
          month: 11,
          year: 1989,
        },
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { cardIssuingUpdateIssuedCard } from "@moovio/sdk/funcs/cardIssuingUpdateIssuedCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardIssuingUpdateIssuedCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "fc445a8c-5b64-4ab9-ba30-5bdb0ffc02b0",
    issuedCardID: "064f9e03-fc5f-4a7d-83d2-2ec946f77ff2",
    updateIssuedCard: {
      authorizedUser: {
        birthDate: {
          day: 9,
          month: 11,
          year: 1989,
        },
      },
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
| `request`                                                                                                                                                                      | [operations.UpdateIssuedCardRequest](../../models/operations/updateissuedcardrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateIssuedCardSecurity](../../models/operations/updateissuedcardsecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GenericError          | 400, 409                     | application/json             |
| errors.UpdateIssuedCardError | 422                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## getFullIssuedCard

Get issued card with PAN, CVV, and expiration. 

Only use this endpoint if you have provided Moov with a copy of your PCI attestation of compliance.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/issued-cards.read-secure` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cardIssuing.getFullIssuedCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "f03c4c3e-2685-44e6-8d4b-0d5bd082a301",
    issuedCardID: "1da6b593-679e-44ab-a9e4-6db6db4b8f46",
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
import { cardIssuingGetFullIssuedCard } from "@moovio/sdk/funcs/cardIssuingGetFullIssuedCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardIssuingGetFullIssuedCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "f03c4c3e-2685-44e6-8d4b-0d5bd082a301",
    issuedCardID: "1da6b593-679e-44ab-a9e4-6db6db4b8f46",
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
| `request`                                                                                                                                                                      | [operations.GetFullIssuedCardRequest](../../models/operations/getfullissuedcardrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetFullIssuedCardSecurity](../../models/operations/getfullissuedcardsecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FullIssuedCard](../../models/components/fullissuedcard.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |