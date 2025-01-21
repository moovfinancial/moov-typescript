# Cards
(*cards*)

## Overview

### Available Operations

* [registerApplePayMerchantDomains](#registerapplepaymerchantdomains) - Add domains to be registered with Apple Pay.

Any domains that will be used to accept payments must first be [verified](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) 
with Apple.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).
* [updateApplePayMerchantDomains](#updateapplepaymerchantdomains) -   Add or remove domains to be registered with Apple Pay. 

  Any domains that will be used to accept payments must first be [verified](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) 
  with Apple.
  
  To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope when generating a 
  [token](https://docs.moov.io/api/authentication/access-tokens/).
* [getApplePayMerchantDomains](#getapplepaymerchantdomains) -   Get domains registered with Apple Pay. 
  
  Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more. 
  
  To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.read` scope when generating a 
  [token](https://docs.moov.io/api/authentication/access-tokens/).
* [createApplePaySession](#createapplepaysession) - Create a session with Apple Pay to facilitate a payment. 

Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more. 
A successful response from this endpoint should be passed through to Apple Pay unchanged. 

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [linkApplePayToken](#linkapplepaytoken) - Connect an Apple Pay token to the specified account. 

Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more. 
The `token` data is defined by Apple Pay and should be passed through from Apple Pay's response unmodified.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [linkCard](#linkcard) - Link a card to an existing Moov account. 

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/#link-a-card) to learn more.

Only use this endpoint if you have provided Moov with a copy of your PCI attestation of compliance. 

During card linking, the provided data will be verified by submitting a $0 authorization (account verification) request. 
If `merchantAccountID` is provided, the authorization request will contain that account's statement descriptor and address. 
Otherwise, the platform account's profile will be used. If no statement descriptor has been set, the authorization will 
use the account's name instead.

It is strongly recommended that callers include the `X-Wait-For` header, set to `payment-method`, if the newly linked 
card is intended to be used right away. If this header is not included, the caller will need to poll the [List Payment 
Methods](https://docs.moov.io/api/sources/payment-methods/list/)
endpoint to wait for the new payment methods to be available for use.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope
when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [listCards](#listcards) - List all the active cards associated with a Moov account. 

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [getCard](#getcard) - Fetch a specific card associated with a Moov account. 

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [updateCard](#updatecard) - Update a linked card and/or resubmit it for verification. 

If a value is provided for CVV, a new verification ($0 authorization) will be submitted for the card. Updating the expiration 
date or 
address will update the information stored on file for the card but will not be verified.

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/#reverify-a-card) to learn 
more.

Only use this endpoint if you have provided Moov with a copy of your PCI attestation of compliance. 

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).
* [disableCard](#disablecard) - Disables a card associated with a Moov account.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

## registerApplePayMerchantDomains

Add domains to be registered with Apple Pay.

Any domains that will be used to accept payments must first be [verified](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) 
with Apple.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.registerApplePayMerchantDomains({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "133fed79-519d-4b63-99ec-26b95076a45b",
    registerApplePayMerchantDomains: {
      domains: [
        "checkout.classbooker.dev",
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
import { MoovCore } from "moov-sdk/core.js";
import { cardsRegisterApplePayMerchantDomains } from "moov-sdk/funcs/cardsRegisterApplePayMerchantDomains.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsRegisterApplePayMerchantDomains(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "133fed79-519d-4b63-99ec-26b95076a45b",
    registerApplePayMerchantDomains: {
      domains: [
        "checkout.classbooker.dev",
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
| `request`                                                                                                                                                                      | [operations.RegisterApplePayMerchantDomainsRequest](../../models/operations/registerapplepaymerchantdomainsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RegisterApplePayMerchantDomainsSecurity](../../models/operations/registerapplepaymerchantdomainssecurity.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## updateApplePayMerchantDomains

  Add or remove domains to be registered with Apple Pay. 

  Any domains that will be used to accept payments must first be [verified](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) 
  with Apple.
  
  To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope when generating a 
  [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  await moov.cards.updateApplePayMerchantDomains({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "b7d68fce-1dbc-4562-93aa-d9ad030c78e6",
    updateApplePayMerchantDomains: {
      addDomains: [
        "pay.classbooker.dev",
      ],
      removeDomains: [
        "checkout.classbooker.dev",
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { cardsUpdateApplePayMerchantDomains } from "moov-sdk/funcs/cardsUpdateApplePayMerchantDomains.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsUpdateApplePayMerchantDomains(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "b7d68fce-1dbc-4562-93aa-d9ad030c78e6",
    updateApplePayMerchantDomains: {
      addDomains: [
        "pay.classbooker.dev",
      ],
      removeDomains: [
        "checkout.classbooker.dev",
      ],
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
| `request`                                                                                                                                                                      | [operations.UpdateApplePayMerchantDomainsRequest](../../models/operations/updateapplepaymerchantdomainsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateApplePayMerchantDomainsSecurity](../../models/operations/updateapplepaymerchantdomainssecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getApplePayMerchantDomains

  Get domains registered with Apple Pay. 
  
  Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more. 
  
  To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.read` scope when generating a 
  [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.getApplePayMerchantDomains({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "cd0931b0-e02f-47b3-87fc-0789a05479e9",
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
import { cardsGetApplePayMerchantDomains } from "moov-sdk/funcs/cardsGetApplePayMerchantDomains.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsGetApplePayMerchantDomains(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "cd0931b0-e02f-47b3-87fc-0789a05479e9",
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
| `request`                                                                                                                                                                      | [operations.GetApplePayMerchantDomainsRequest](../../models/operations/getapplepaymerchantdomainsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetApplePayMerchantDomainsSecurity](../../models/operations/getapplepaymerchantdomainssecurity.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApplePayMerchantDomains](../../models/components/applepaymerchantdomains.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createApplePaySession

Create a session with Apple Pay to facilitate a payment. 

Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more. 
A successful response from this endpoint should be passed through to Apple Pay unchanged. 

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.createApplePaySession({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "1d911f27-36e5-4497-8e9e-c3ecff1a8ae0",
    createApplePaySession: {
      domain: "checkout.classbooker.dev",
      displayName: "Lillie.Abbott74",
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
import { cardsCreateApplePaySession } from "moov-sdk/funcs/cardsCreateApplePaySession.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsCreateApplePaySession(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "1d911f27-36e5-4497-8e9e-c3ecff1a8ae0",
    createApplePaySession: {
      domain: "checkout.classbooker.dev",
      displayName: "Lillie.Abbott74",
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
| `request`                                                                                                                                                                      | [operations.CreateApplePaySessionRequest](../../models/operations/createapplepaysessionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateApplePaySessionSecurity](../../models/operations/createapplepaysessionsecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409, 422       | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## linkApplePayToken

Connect an Apple Pay token to the specified account. 

Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more. 
The `token` data is defined by Apple Pay and should be passed through from Apple Pay's response unmodified.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.linkApplePayToken({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "f4d3b593-6370-42f3-acf5-eab4393e2a01",
    linkApplePay: {
      token: {
        paymentData: {
          version: "EC_v1",
          data: "3+f4oOTwPa6f1UZ6tG...CE=",
          signature: "MIAGCSqGSIb3DQ.AAAA==",
          header: {
            ephemeralPublicKey: "MFkwEK...Md==",
            publicKeyHash: "l0CnXdMv...D1I=",
            transactionId: "32b...4f3",
          },
        },
        paymentMethod: {
          displayName: "Visa 1234",
          network: "Visa",
          type: "debit",
        },
        transactionIdentifier: "32b...4f3",
      },
      billingContact: {
        addressLines: [
          "123 Sesame Street",
        ],
        locality: "Phoenix",
        postalCode: "30345",
        administrativeArea: "AZ",
        countryCode: "US",
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
import { cardsLinkApplePayToken } from "moov-sdk/funcs/cardsLinkApplePayToken.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsLinkApplePayToken(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "f4d3b593-6370-42f3-acf5-eab4393e2a01",
    linkApplePay: {
      token: {
        paymentData: {
          version: "EC_v1",
          data: "3+f4oOTwPa6f1UZ6tG...CE=",
          signature: "MIAGCSqGSIb3DQ.AAAA==",
          header: {
            ephemeralPublicKey: "MFkwEK...Md==",
            publicKeyHash: "l0CnXdMv...D1I=",
            transactionId: "32b...4f3",
          },
        },
        paymentMethod: {
          displayName: "Visa 1234",
          network: "Visa",
          type: "debit",
        },
        transactionIdentifier: "32b...4f3",
      },
      billingContact: {
        addressLines: [
          "123 Sesame Street",
        ],
        locality: "Phoenix",
        postalCode: "30345",
        administrativeArea: "AZ",
        countryCode: "US",
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
| `request`                                                                                                                                                                      | [operations.LinkApplePayTokenRequest](../../models/operations/linkapplepaytokenrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LinkApplePayTokenSecurity](../../models/operations/linkapplepaytokensecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LinkedApplePayPaymentMethod](../../models/components/linkedapplepaypaymentmethod.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.GenericError      | 400, 409                 | application/json         |
| errors.LinkApplePayError | 422                      | application/json         |
| errors.APIError          | 4XX, 5XX                 | \*/\*                    |

## linkCard

Link a card to an existing Moov account. 

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/#link-a-card) to learn more.

Only use this endpoint if you have provided Moov with a copy of your PCI attestation of compliance. 

During card linking, the provided data will be verified by submitting a $0 authorization (account verification) request. 
If `merchantAccountID` is provided, the authorization request will contain that account's statement descriptor and address. 
Otherwise, the platform account's profile will be used. If no statement descriptor has been set, the authorization will 
use the account's name instead.

It is strongly recommended that callers include the `X-Wait-For` header, set to `payment-method`, if the newly linked 
card is intended to be used right away. If this header is not included, the caller will need to poll the [List Payment 
Methods](https://docs.moov.io/api/sources/payment-methods/list/)
endpoint to wait for the new payment methods to be available for use.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope
when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.linkCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xWaitFor: "payment-method",
    accountID: "500c4473-7f7b-4a70-8a8c-d5cb2e08e0e4",
    linkCard: {
      cardNumber: "4111111111111111",
      cardCvv: "123",
      expiration: {
        month: "01",
        year: "21",
      },
      holderName: "Jules Jackson",
      billingAddress: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      cardOnFile: true,
      merchantAccountID: "01234567-89ab-cdef-0123-456789abcdef",
      verifyName: true,
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
import { cardsLinkCard } from "moov-sdk/funcs/cardsLinkCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsLinkCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xWaitFor: "payment-method",
    accountID: "500c4473-7f7b-4a70-8a8c-d5cb2e08e0e4",
    linkCard: {
      cardNumber: "4111111111111111",
      cardCvv: "123",
      expiration: {
        month: "01",
        year: "21",
      },
      holderName: "Jules Jackson",
      billingAddress: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      cardOnFile: true,
      merchantAccountID: "01234567-89ab-cdef-0123-456789abcdef",
      verifyName: true,
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
| `request`                                                                                                                                                                      | [operations.LinkCardRequest](../../models/operations/linkcardrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LinkCardSecurity](../../models/operations/linkcardsecurity.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Card](../../models/components/card.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.GenericError  | 400, 409             | application/json     |
| errors.LinkCardError | 422                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## listCards

List all the active cards associated with a Moov account. 

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.listCards({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "5881119b-63c7-492b-8c20-09d0fca99676",
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
import { cardsListCards } from "moov-sdk/funcs/cardsListCards.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsListCards(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "5881119b-63c7-492b-8c20-09d0fca99676",
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
| `request`                                                                                                                                                                      | [operations.ListCardsRequest](../../models/operations/listcardsrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListCardsSecurity](../../models/operations/listcardssecurity.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Card[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getCard

Fetch a specific card associated with a Moov account. 

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.read` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.getCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "21f0d82e-dc9b-4e80-ac2a-99b6babfebd7",
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
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
import { cardsGetCard } from "moov-sdk/funcs/cardsGetCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsGetCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "21f0d82e-dc9b-4e80-ac2a-99b6babfebd7",
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
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
| `request`                                                                                                                                                                      | [operations.GetCardRequest](../../models/operations/getcardrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetCardSecurity](../../models/operations/getcardsecurity.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Card](../../models/components/card.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateCard

Update a linked card and/or resubmit it for verification. 

If a value is provided for CVV, a new verification ($0 authorization) will be submitted for the card. Updating the expiration 
date or 
address will update the information stored on file for the card but will not be verified.

Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/#reverify-a-card) to learn 
more.

Only use this endpoint if you have provided Moov with a copy of your PCI attestation of compliance. 

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.cards.updateCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a960061d-fb6d-4929-99b5-c96c672840f6",
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
    updateCard: {
      cardCvv: "456",
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
import { cardsUpdateCard } from "moov-sdk/funcs/cardsUpdateCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsUpdateCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a960061d-fb6d-4929-99b5-c96c672840f6",
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
    updateCard: {
      cardCvv: "456",
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
| `request`                                                                                                                                                                      | [operations.UpdateCardRequest](../../models/operations/updatecardrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateCardSecurity](../../models/operations/updatecardsecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Card](../../models/components/card.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.GenericError    | 400, 409               | application/json       |
| errors.UpdateCardError | 422                    | application/json       |
| errors.APIError        | 4XX, 5XX               | \*/\*                  |

## disableCard

Disables a card associated with a Moov account.

To use this endpoint from the browser, you'll need to specify the `/accounts/{accountID}/cards.write` scope when generating 
a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  await moov.cards.disableCard({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a6b47d56-0b54-4dd8-9692-efad0ab1ebb4",
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { cardsDisableCard } from "moov-sdk/funcs/cardsDisableCard.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await cardsDisableCard(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a6b47d56-0b54-4dd8-9692-efad0ab1ebb4",
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
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
| `request`                                                                                                                                                                      | [operations.DisableCardRequest](../../models/operations/disablecardrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DisableCardSecurity](../../models/operations/disablecardsecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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