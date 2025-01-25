# BankAccounts
(*bankAccounts*)

## Overview

### Available Operations

* [linkBankAccount](#linkbankaccount) - Link a bank account to an existing Moov account. Read our [bank accounts guide](https://docs.moov.io/guides/sources/bank-accounts/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

It is strongly recommended that callers include the `X-Wait-For` header, set to `payment-method`, if the newly linked
bank-account is intended to be used right away. If this header is not included, the caller will need to poll the [List Payment
Methods](https://docs.moov.io/api/sources/payment-methods/list/)
endpoint to wait for the new payment methods to be available for use.
* [listBankAccounts](#listbankaccounts) - List all the bank accounts associated with a particular Moov account. 

Read our [bank accounts guide](https://docs.moov.io/guides/sources/bank-accounts/) to learn more. To use this endpoint 
from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.read` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).
* [getBankAccount](#getbankaccount) - Retrieve bank account details (i.e. routing number or account type) associated with a specific Moov account. 

Read our [bank accounts guide](https://docs.moov.io/guides/sources/bank-accounts/) to learn more. To use this 
endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.read` scope when 
generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [disableBankAccount](#disablebankaccount) - Discontinue using a specified bank account linked to a Moov account. 

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope 
when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [initiateMicroDeposits](#initiatemicrodeposits) - Micro-deposits help confirm bank account ownership, helping reduce fraud and the risk of unauthorized activity. Use this method to initiate the micro-deposit verification, sending two small credit transfers to the bank account you want to confirm.

If you request micro-deposits before 4:15PM ET, they will appear that same day. If you request micro-deposits any time after 4:15PM ET, they will appear the next banking day. When the two credits are initiated, Moov simultaneously initiates a debit to recoup the micro-deposits. 

`sandbox` - Micro-deposits initiated for a `sandbox` bank account will always be `$0.00` / `$0.00` and instantly verifiable once initiated.

You can simulate micro-deposit verification in test mode. See our [test mode](https://docs.moov.io/guides/get-started/test-mode/#micro-deposits) guide for more information.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [completeMicroDeposits](#completemicrodeposits) - Complete the micro-deposit validation process by passing the amounts of the two transfers within three tries.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).
* [getBankAccountVerification](#getbankaccountverification) - Retrieve the current status and details of an instant verification, including whether the verification method was instant or same-day 
ACH. This helps track the verification process in real-time and provides details in case of exceptions.

The status will indicate the following:

- `new`: Verification initiated, credit pending to the payment network
- `sent-credit`: Credit sent, available for verification
- `failed`: Verification failed, description provided, user needs to add a new bank account
- `expired`: Verification expired after 14 days, initiate another verification
- `max-attempts-exceeded`: Five incorrect code attempts exhausted, initiate another verification

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.read` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).
* [initiateBankAccountVerification](#initiatebankaccountverification) - Instant micro-deposit verification offers a quick and efficient way to verify bank account ownership. 

Send a $0.01 credit with a unique verification code via RTP or same-day ACH, depending on the receiving bank’s capabilities. This
feature provides a faster alternative to traditional methods, allowing verification in a single session.

It is recommended to use the `X-Wait-For: rail-response` header to synchronously receive the outcome of the instant credit in the
 response payload.

Possible verification methods:
  - `instant`: Real-time verification credit sent via RTP
  - `ach`: Verification credit sent via same-day ACH

Possible statuses:
  - `new`: Verification initiated, credit pending
  - `sent-credit`: Credit sent, available for verification in the external bank account
  - `failed`: Verification failed due to credit rejection/return, details in `exceptionDetails`

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).
* [completeBankAccountVerification](#completebankaccountverification) - Finalize the instant micro-deposit verification by submitting the verification code displayed in the user’s bank account. 

Upon successful verification, the bank account status will be updated to `verified` and eligible for ACH debit transactions.

The following formats are accepted:
- `MV0000`
- `mv0000`
- `0000`

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when 
generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

## linkBankAccount

Link a bank account to an existing Moov account. Read our [bank accounts guide](https://docs.moov.io/guides/sources/bank-accounts/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

It is strongly recommended that callers include the `X-Wait-For` header, set to `payment-method`, if the newly linked
bank-account is intended to be used right away. If this header is not included, the caller will need to poll the [List Payment
Methods](https://docs.moov.io/api/sources/payment-methods/list/)
endpoint to wait for the new payment methods to be available for use.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.bankAccounts.linkBankAccount({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "5049418d-b6dc-4a6f-a285-091c0e15dc6a",
    linkBankAccount: {
      plaid: {
        token: "<value>",
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
import { bankAccountsLinkBankAccount } from "@moovio/sdk/funcs/bankAccountsLinkBankAccount.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsLinkBankAccount(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "5049418d-b6dc-4a6f-a285-091c0e15dc6a",
    linkBankAccount: {
      plaid: {
        token: "<value>",
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
| `request`                                                                                                                                                                      | [operations.LinkBankAccountRequest](../../models/operations/linkbankaccountrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LinkBankAccountSecurity](../../models/operations/linkbankaccountsecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccount](../../models/components/bankaccount.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GenericError               | 400, 409                          | application/json                  |
| errors.BankAccountValidationError | 422                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## listBankAccounts

List all the bank accounts associated with a particular Moov account. 

Read our [bank accounts guide](https://docs.moov.io/guides/sources/bank-accounts/) to learn more. To use this endpoint 
from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.read` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.bankAccounts.listBankAccounts({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "91095bec-ade2-4a8c-9f46-ae7f07234fee",
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
import { bankAccountsListBankAccounts } from "@moovio/sdk/funcs/bankAccountsListBankAccounts.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsListBankAccounts(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "91095bec-ade2-4a8c-9f46-ae7f07234fee",
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
| `request`                                                                                                                                                                      | [operations.ListBankAccountsRequest](../../models/operations/listbankaccountsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListBankAccountsSecurity](../../models/operations/listbankaccountssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccount[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getBankAccount

Retrieve bank account details (i.e. routing number or account type) associated with a specific Moov account. 

Read our [bank accounts guide](https://docs.moov.io/guides/sources/bank-accounts/) to learn more. To use this 
endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.read` scope when 
generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.bankAccounts.getBankAccount({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "30085225-d87e-47cd-8f08-001465f8cd22",
    bankAccountID: "6c5a7be6-792b-4628-af28-a852f8c9de5b",
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
import { bankAccountsGetBankAccount } from "@moovio/sdk/funcs/bankAccountsGetBankAccount.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsGetBankAccount(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "30085225-d87e-47cd-8f08-001465f8cd22",
    bankAccountID: "6c5a7be6-792b-4628-af28-a852f8c9de5b",
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
| `request`                                                                                                                                                                      | [operations.GetBankAccountRequest](../../models/operations/getbankaccountrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetBankAccountSecurity](../../models/operations/getbankaccountsecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccount](../../models/components/bankaccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## disableBankAccount

Discontinue using a specified bank account linked to a Moov account. 

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope 
when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  await moov.bankAccounts.disableBankAccount({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "d01209e7-2701-46cc-b0ba-56eabf4e1ec7",
    bankAccountID: "0ae3f56a-e391-4a80-962d-9fe4c7a45b97",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { bankAccountsDisableBankAccount } from "@moovio/sdk/funcs/bankAccountsDisableBankAccount.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsDisableBankAccount(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "d01209e7-2701-46cc-b0ba-56eabf4e1ec7",
    bankAccountID: "0ae3f56a-e391-4a80-962d-9fe4c7a45b97",
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
| `request`                                                                                                                                                                      | [operations.DisableBankAccountRequest](../../models/operations/disablebankaccountrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DisableBankAccountSecurity](../../models/operations/disablebankaccountsecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

## initiateMicroDeposits

Micro-deposits help confirm bank account ownership, helping reduce fraud and the risk of unauthorized activity. Use this method to initiate the micro-deposit verification, sending two small credit transfers to the bank account you want to confirm.

If you request micro-deposits before 4:15PM ET, they will appear that same day. If you request micro-deposits any time after 4:15PM ET, they will appear the next banking day. When the two credits are initiated, Moov simultaneously initiates a debit to recoup the micro-deposits. 

`sandbox` - Micro-deposits initiated for a `sandbox` bank account will always be `$0.00` / `$0.00` and instantly verifiable once initiated.

You can simulate micro-deposit verification in test mode. See our [test mode](https://docs.moov.io/guides/get-started/test-mode/#micro-deposits) guide for more information.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  await moov.bankAccounts.initiateMicroDeposits({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "ff04d5ff-8ad2-4d87-baf2-0c9dcb6d3e2a",
    bankAccountID: "10ed8688-d7e2-4a70-827d-af795759945d",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { bankAccountsInitiateMicroDeposits } from "@moovio/sdk/funcs/bankAccountsInitiateMicroDeposits.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsInitiateMicroDeposits(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "ff04d5ff-8ad2-4d87-baf2-0c9dcb6d3e2a",
    bankAccountID: "10ed8688-d7e2-4a70-827d-af795759945d",
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
| `request`                                                                                                                                                                      | [operations.InitiateMicroDepositsRequest](../../models/operations/initiatemicrodepositsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.InitiateMicroDepositsSecurity](../../models/operations/initiatemicrodepositssecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

## completeMicroDeposits

Complete the micro-deposit validation process by passing the amounts of the two transfers within three tries.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.bankAccounts.completeMicroDeposits({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "ebfc273d-980b-4a92-8dd9-bf9996f2a16e",
    bankAccountID: "3e6af61e-a5cb-4281-b0e6-e7e3d39edf65",
    completeMicroDeposits: {
      amounts: [
        18,
        21,
      ],
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
import { bankAccountsCompleteMicroDeposits } from "@moovio/sdk/funcs/bankAccountsCompleteMicroDeposits.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsCompleteMicroDeposits(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "ebfc273d-980b-4a92-8dd9-bf9996f2a16e",
    bankAccountID: "3e6af61e-a5cb-4281-b0e6-e7e3d39edf65",
    completeMicroDeposits: {
      amounts: [
        18,
        21,
      ],
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
| `request`                                                                                                                                                                      | [operations.CompleteMicroDepositsRequest](../../models/operations/completemicrodepositsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CompleteMicroDepositsSecurity](../../models/operations/completemicrodepositssecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CompletedMicroDeposits](../../models/components/completedmicrodeposits.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GenericError                | 400, 409                           | application/json                   |
| errors.MicroDepositValidationError | 422                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## getBankAccountVerification

Retrieve the current status and details of an instant verification, including whether the verification method was instant or same-day 
ACH. This helps track the verification process in real-time and provides details in case of exceptions.

The status will indicate the following:

- `new`: Verification initiated, credit pending to the payment network
- `sent-credit`: Credit sent, available for verification
- `failed`: Verification failed, description provided, user needs to add a new bank account
- `expired`: Verification expired after 14 days, initiate another verification
- `max-attempts-exceeded`: Five incorrect code attempts exhausted, initiate another verification

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.read` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.bankAccounts.getBankAccountVerification({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "0102058c-a936-482a-a3ca-2355850903d7",
    bankAccountID: "ee6888ef-544e-4146-bab7-ea04e31b2274",
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
import { bankAccountsGetBankAccountVerification } from "@moovio/sdk/funcs/bankAccountsGetBankAccountVerification.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsGetBankAccountVerification(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "0102058c-a936-482a-a3ca-2355850903d7",
    bankAccountID: "ee6888ef-544e-4146-bab7-ea04e31b2274",
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
| `request`                                                                                                                                                                      | [operations.GetBankAccountVerificationRequest](../../models/operations/getbankaccountverificationrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetBankAccountVerificationSecurity](../../models/operations/getbankaccountverificationsecurity.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccountVerification](../../models/components/bankaccountverification.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## initiateBankAccountVerification

Instant micro-deposit verification offers a quick and efficient way to verify bank account ownership. 

Send a $0.01 credit with a unique verification code via RTP or same-day ACH, depending on the receiving bank’s capabilities. This
feature provides a faster alternative to traditional methods, allowing verification in a single session.

It is recommended to use the `X-Wait-For: rail-response` header to synchronously receive the outcome of the instant credit in the
 response payload.

Possible verification methods:
  - `instant`: Real-time verification credit sent via RTP
  - `ach`: Verification credit sent via same-day ACH

Possible statuses:
  - `new`: Verification initiated, credit pending
  - `sent-credit`: Credit sent, available for verification in the external bank account
  - `failed`: Verification failed due to credit rejection/return, details in `exceptionDetails`

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.bankAccounts.initiateBankAccountVerification({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xWaitFor: "payment-method",
    accountID: "c2b4967e-86a5-474e-a78e-f013315f7dcc",
    bankAccountID: "d648f8f3-7641-4e40-8a99-c08de14889c8",
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
import { bankAccountsInitiateBankAccountVerification } from "@moovio/sdk/funcs/bankAccountsInitiateBankAccountVerification.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsInitiateBankAccountVerification(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xWaitFor: "payment-method",
    accountID: "c2b4967e-86a5-474e-a78e-f013315f7dcc",
    bankAccountID: "d648f8f3-7641-4e40-8a99-c08de14889c8",
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
| `request`                                                                                                                                                                      | [operations.InitiateBankAccountVerificationRequest](../../models/operations/initiatebankaccountverificationrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.InitiateBankAccountVerificationSecurity](../../models/operations/initiatebankaccountverificationsecurity.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccountVerificationCreated](../../models/components/bankaccountverificationcreated.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## completeBankAccountVerification

Finalize the instant micro-deposit verification by submitting the verification code displayed in the user’s bank account. 

Upon successful verification, the bank account status will be updated to `verified` and eligible for ACH debit transactions.

The following formats are accepted:
- `MV0000`
- `mv0000`
- `0000`

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/bank-accounts.write` scope when 
generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.bankAccounts.completeBankAccountVerification({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "88cf5aa5-bf76-406e-a986-eb33cd8890e3",
    bankAccountID: "0157260f-ae3c-496c-a9d8-24de5fbc6b31",
    completeBankAccountVerification: {
      code: "MV1234",
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
import { bankAccountsCompleteBankAccountVerification } from "@moovio/sdk/funcs/bankAccountsCompleteBankAccountVerification.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await bankAccountsCompleteBankAccountVerification(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "88cf5aa5-bf76-406e-a986-eb33cd8890e3",
    bankAccountID: "0157260f-ae3c-496c-a9d8-24de5fbc6b31",
    completeBankAccountVerification: {
      code: "MV1234",
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
| `request`                                                                                                                                                                      | [operations.CompleteBankAccountVerificationRequest](../../models/operations/completebankaccountverificationrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CompleteBankAccountVerificationSecurity](../../models/operations/completebankaccountverificationsecurity.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccountVerification](../../models/components/bankaccountverification.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409, 422       | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |