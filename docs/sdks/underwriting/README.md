# Underwriting
(*underwriting*)

## Overview

### Available Operations

* [getUnderwriting](#getunderwriting) - Retrieve underwriting associated with a given Moov account. 

Read our [underwriting guide](https://docs.moov.io/guides/accounts/requirements/underwriting/) to learn more. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/profile.read` scope.
* [updateUnderwriting](#updateunderwriting) - Update the account's underwriting by passing new values for one or more of the fields. 

Read our [underwriting guide](https://docs.moov.io/guides/accounts/requirements/underwriting/) to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/profile.write` scope.

## getUnderwriting

Retrieve underwriting associated with a given Moov account. 

Read our [underwriting guide](https://docs.moov.io/guides/accounts/requirements/underwriting/) to learn more. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/profile.read` scope.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.underwriting.getUnderwriting({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "32ccafba-5d99-40e5-a8af-d05cc5d73a4e",
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
import { underwritingGetUnderwriting } from "moov-sdk/funcs/underwritingGetUnderwriting.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await underwritingGetUnderwriting(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "32ccafba-5d99-40e5-a8af-d05cc5d73a4e",
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
| `request`                                                                                                                                                                      | [operations.GetUnderwritingRequest](../../models/operations/getunderwritingrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetUnderwritingSecurity](../../models/operations/getunderwritingsecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Underwriting](../../models/components/underwriting.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateUnderwriting

Update the account's underwriting by passing new values for one or more of the fields. 

Read our [underwriting guide](https://docs.moov.io/guides/accounts/requirements/underwriting/) to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/profile.write` scope.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.underwriting.updateUnderwriting({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "455b1698-1657-4c75-944b-57db42578d81",
    updateUnderwriting: {
      averageTransactionSize: 686,
      maxTransactionSize: 927778,
      averageMonthlyTransactionVolume: 363635,
      volumeByCustomerType: {
        businessToBusinessPercentage: 103054,
        consumerToBusinessPercentage: 891201,
      },
      cardVolumeDistribution: {
        ecommercePercentage: 139066,
        cardPresentPercentage: 457019,
        mailOrPhonePercentage: 477438,
        debtRepaymentPercentage: 372012,
      },
      fulfillment: {
        hasPhysicalGoods: false,
        isShippingProduct: true,
        shipmentDurationDays: 571329,
        returnPolicy: "other",
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
import { underwritingUpdateUnderwriting } from "moov-sdk/funcs/underwritingUpdateUnderwriting.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await underwritingUpdateUnderwriting(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "455b1698-1657-4c75-944b-57db42578d81",
    updateUnderwriting: {
      averageTransactionSize: 686,
      maxTransactionSize: 927778,
      averageMonthlyTransactionVolume: 363635,
      volumeByCustomerType: {
        businessToBusinessPercentage: 103054,
        consumerToBusinessPercentage: 891201,
      },
      cardVolumeDistribution: {
        ecommercePercentage: 139066,
        cardPresentPercentage: 457019,
        mailOrPhonePercentage: 477438,
        debtRepaymentPercentage: 372012,
      },
      fulfillment: {
        hasPhysicalGoods: false,
        isShippingProduct: true,
        shipmentDurationDays: 571329,
        returnPolicy: "other",
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
| `request`                                                                                                                                                                      | [operations.UpdateUnderwritingRequest](../../models/operations/updateunderwritingrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateUnderwritingSecurity](../../models/operations/updateunderwritingsecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Underwriting](../../models/components/underwriting.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400, 409                       | application/json               |
| errors.UpdateUnderwritingError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |