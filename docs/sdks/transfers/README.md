# Transfers
(*transfers*)

## Overview

### Available Operations

* [createTransfer](#createtransfer) - Move money by providing the source, destination, and amount in the request body.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.write` 
scope.
* [listTransfers](#listtransfers) - List all the transfers associated with a particular Moov account. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

When you run this request, you retrieve 200 transfers at a time. You can advance past a results set of 200 transfers by using the `skip` parameter (for example, 
if you set `skip`= 10, you will see a results set of 200 transfers after the first 2000). If you are searching a high volume of transfers, the request will likely 
process very slowly. To achieve faster performance, restrict the data as much as you can by using the `StartDateTime` and `EndDateTime` parameters for a limited 
period of time. You can run multiple requests in smaller time window increments until you've retrieved all the transfers you need.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.
* [getTransfer](#gettransfer) - Retrieve full transfer details for an individual transfer of a particular Moov account. 

Payment rail-specific details are included in the source and destination. Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) 
to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.
* [patchTransfer](#patchtransfer) - Update the metadata contained on a transfer. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.write` 
scope.
* [refundTransfer](#refundtransfer) - Initiate a refund for a card transfer.

**Use the [Cancel or refund a card transfer](https://docs.moov.io/api/money-movement/refunds/cancel/) endpoint for more comprehensive cancel and refund options.**    
See the [reversals](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) guide for more information. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.write` 
scope.
* [listRefunds](#listrefunds) - Get a list of refunds for a card transfer.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.
* [getRefund](#getrefund) - Get details of a refund for a card transfer.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.
* [reverseTransfer](#reversetransfer) - Reverses a card transfer by initiating a cancellation or refund depending on the transaction status. 
Read our [reversals guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) 
to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.
* [createTransferOptions](#createtransferoptions) - Generate available payment method options for one or multiple transfer participants depending on the accountID or paymentMethodID you 
supply in the request. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{yourAccountID}/transfers.read` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/). The accountID included must be your accountID. You can find your 
accountID on the [Business details](https://dashboard.moov.io/settings/business) page.

## createTransfer

Move money by providing the source, destination, and amount in the request body.

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.write` 
scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.createTransfer({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xIdempotencyKey: "f9d459c6-642b-4b0f-a642-2a074eb6b54d",
    accountID: "0bdee4f2-70df-485e-8104-60745a118ebb",
    createTransfer: {
      source: {
        paymentMethodID: "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
          debitHoldPeriod: "2-days",
        },
      },
      destination: {
        paymentMethodID: "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
        },
      },
      amount: {
        currency: "USD",
        value: 1204,
      },
      facilitatorFee: {
        totalDecimal: "12.987654321",
        markupDecimal: "0.987654321",
      },
      description: "Pay Instructor for May 15 Class",
      metadata: {
        "optional": "metadata",
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
import { transfersCreateTransfer } from "@moovio/sdk/funcs/transfersCreateTransfer.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersCreateTransfer(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xIdempotencyKey: "f9d459c6-642b-4b0f-a642-2a074eb6b54d",
    accountID: "0bdee4f2-70df-485e-8104-60745a118ebb",
    createTransfer: {
      source: {
        paymentMethodID: "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
          debitHoldPeriod: "2-days",
        },
      },
      destination: {
        paymentMethodID: "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
        },
      },
      amount: {
        currency: "USD",
        value: 1204,
      },
      facilitatorFee: {
        totalDecimal: "12.987654321",
        markupDecimal: "0.987654321",
      },
      description: "Pay Instructor for May 15 Class",
      metadata: {
        "optional": "metadata",
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
| `request`                                                                                                                                                                      | [operations.CreateTransferRequest](../../models/operations/createtransferrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateTransferSecurity](../../models/operations/createtransfersecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransferResponse](../../models/operations/createtransferresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400                            | application/json               |
| errors.Transfer                | 409                            | application/json               |
| errors.TransferValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## listTransfers

List all the transfers associated with a particular Moov account. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

When you run this request, you retrieve 200 transfers at a time. You can advance past a results set of 200 transfers by using the `skip` parameter (for example, 
if you set `skip`= 10, you will see a results set of 200 transfers after the first 2000). If you are searching a high volume of transfers, the request will likely 
process very slowly. To achieve faster performance, restrict the data as much as you can by using the `StartDateTime` and `EndDateTime` parameters for a limited 
period of time. You can run multiple requests in smaller time window increments until you've retrieved all the transfers you need.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.listTransfers({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    skip: 60,
    count: 20,
    accountID: "a7b433e5-531c-406b-bf40-4cde3c83fab5",
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
import { transfersListTransfers } from "@moovio/sdk/funcs/transfersListTransfers.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersListTransfers(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    skip: 60,
    count: 20,
    accountID: "a7b433e5-531c-406b-bf40-4cde3c83fab5",
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
| `request`                                                                                                                                                                      | [operations.ListTransfersRequest](../../models/operations/listtransfersrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListTransfersSecurity](../../models/operations/listtransferssecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Transfer[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getTransfer

Retrieve full transfer details for an individual transfer of a particular Moov account. 

Payment rail-specific details are included in the source and destination. Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) 
to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.getTransfer({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    transferID: "64607ba5-82d4-4278-93b5-c5c5ca5c9cd8",
    accountID: "cb1b48c3-1c11-4648-aa00-691b74c9ea1b",
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
import { transfersGetTransfer } from "@moovio/sdk/funcs/transfersGetTransfer.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersGetTransfer(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    transferID: "64607ba5-82d4-4278-93b5-c5c5ca5c9cd8",
    accountID: "cb1b48c3-1c11-4648-aa00-691b74c9ea1b",
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
| `request`                                                                                                                                                                      | [operations.GetTransferRequest](../../models/operations/gettransferrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetTransferSecurity](../../models/operations/gettransfersecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Transfer](../../models/components/transfer.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## patchTransfer

Update the metadata contained on a transfer. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.write` 
scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.patchTransfer({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    transferID: "9cc2093a-b55d-4f3f-b8e9-e13ac2df16ab",
    accountID: "f0dfbcc6-c1a2-42ff-b3f9-a41de383cabc",
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
import { transfersPatchTransfer } from "@moovio/sdk/funcs/transfersPatchTransfer.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersPatchTransfer(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    transferID: "9cc2093a-b55d-4f3f-b8e9-e13ac2df16ab",
    accountID: "f0dfbcc6-c1a2-42ff-b3f9-a41de383cabc",
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
| `request`                                                                                                                                                                      | [operations.PatchTransferRequest](../../models/operations/patchtransferrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PatchTransferSecurity](../../models/operations/patchtransfersecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Transfer](../../models/components/transfer.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## refundTransfer

Initiate a refund for a card transfer.

**Use the [Cancel or refund a card transfer](https://docs.moov.io/api/money-movement/refunds/cancel/) endpoint for more comprehensive cancel and refund options.**    
See the [reversals](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) guide for more information. 

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.write` 
scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.refundTransfer({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xIdempotencyKey: "3ba7635c-ceda-4c22-b383-46b4447b555b",
    accountID: "fcf8bc06-0dab-429a-b25f-0547cda2b142",
    transferID: "9032ecd3-7cf8-4760-a23e-09456a22dfb6",
    createRefund: {
      amount: 1000,
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
import { transfersRefundTransfer } from "@moovio/sdk/funcs/transfersRefundTransfer.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersRefundTransfer(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xIdempotencyKey: "3ba7635c-ceda-4c22-b383-46b4447b555b",
    accountID: "fcf8bc06-0dab-429a-b25f-0547cda2b142",
    transferID: "9032ecd3-7cf8-4760-a23e-09456a22dfb6",
    createRefund: {
      amount: 1000,
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
| `request`                                                                                                                                                                      | [operations.RefundTransferRequest](../../models/operations/refundtransferrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RefundTransferSecurity](../../models/operations/refundtransfersecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RefundTransferResponse](../../models/operations/refundtransferresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GenericError          | 400                          | application/json             |
| errors.CardAcquiringRefund   | 409                          | application/json             |
| errors.RefundValidationError | 422                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## listRefunds

Get a list of refunds for a card transfer.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.listRefunds({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "7d74a845-fe17-4ebe-a05e-71847ef8c510",
    transferID: "d081988f-448f-492c-8c60-836126fa0dfb",
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
import { transfersListRefunds } from "@moovio/sdk/funcs/transfersListRefunds.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersListRefunds(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "7d74a845-fe17-4ebe-a05e-71847ef8c510",
    transferID: "d081988f-448f-492c-8c60-836126fa0dfb",
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
| `request`                                                                                                                                                                      | [operations.ListRefundsRequest](../../models/operations/listrefundsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListRefundsSecurity](../../models/operations/listrefundssecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CardAcquiringRefund[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getRefund

Get details of a refund for a card transfer.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need to specify the `/accounts/{accountID}/transfers.read` 
scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.getRefund({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    transferID: "dbc09cb2-ef99-4553-8501-94323f377dbf",
    accountID: "7f90bf73-6fb7-41e7-90aa-a9133e7d92c2",
    refundID: "0f86fa43-1a9b-4a5d-8227-f253063f7fb1",
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
import { transfersGetRefund } from "@moovio/sdk/funcs/transfersGetRefund.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersGetRefund(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    transferID: "dbc09cb2-ef99-4553-8501-94323f377dbf",
    accountID: "7f90bf73-6fb7-41e7-90aa-a9133e7d92c2",
    refundID: "0f86fa43-1a9b-4a5d-8227-f253063f7fb1",
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
| `request`                                                                                                                                                                      | [operations.GetRefundRequest](../../models/operations/getrefundrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetRefundSecurity](../../models/operations/getrefundsecurity.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## reverseTransfer

Reverses a card transfer by initiating a cancellation or refund depending on the transaction status. 
Read our [reversals guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) 
to learn more.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.reverseTransfer({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xIdempotencyKey: "16ad771b-54f6-4f38-86a5-09d5f907e897",
    accountID: "47d7634a-2772-4a99-a0bc-2bb960cea7e2",
    transferID: "c39f87ae-8349-4b5b-9f87-1669f5d784aa",
    createReversal: {
      amount: 1000,
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
import { transfersReverseTransfer } from "@moovio/sdk/funcs/transfersReverseTransfer.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersReverseTransfer(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    xIdempotencyKey: "16ad771b-54f6-4f38-86a5-09d5f907e897",
    accountID: "47d7634a-2772-4a99-a0bc-2bb960cea7e2",
    transferID: "c39f87ae-8349-4b5b-9f87-1669f5d784aa",
    createReversal: {
      amount: 1000,
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
| `request`                                                                                                                                                                      | [operations.ReverseTransferRequest](../../models/operations/reversetransferrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ReverseTransferSecurity](../../models/operations/reversetransfersecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Reversal](../../models/components/reversal.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400, 409                       | application/json               |
| errors.ReversalValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## createTransferOptions

Generate available payment method options for one or multiple transfer participants depending on the accountID or paymentMethodID you 
supply in the request. 

Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.

To use this endpoint from the browser, you'll need to specify the `/accounts/{yourAccountID}/transfers.read` scope when generating a 
[token](https://docs.moov.io/api/authentication/access-tokens/). The accountID included must be your accountID. You can find your 
accountID on the [Business details](https://dashboard.moov.io/settings/business) page.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.transfers.createTransferOptions({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { transfersCreateTransferOptions } from "@moovio/sdk/funcs/transfersCreateTransferOptions.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await transfersCreateTransferOptions(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {});

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
| `request`                                                                                                                                                                      | [operations.CreateTransferOptionsRequest](../../models/operations/createtransferoptionsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateTransferOptionsSecurity](../../models/operations/createtransferoptionssecurity.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TransferOptions](../../models/components/transferoptions.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GenericError                   | 400                                   | application/json                      |
| errors.TransferOptionsValidationError | 422                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |