# PaymentLinks
(*paymentLinks*)

## Overview

### Available Operations

* [createPaymentLink](#createpaymentlink) - Create a payment link that allows an end user to make a payment on Moov's hosted payment link page.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.
* [listPaymentLinks](#listpaymentlinks) - List all the payment links created under a Moov account.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.read` scope.
* [getPaymentLink](#getpaymentlink) - Retrieve a payment link by code.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.read` scope.
* [updatePaymentLink](#updatepaymentlink) - Update a payment link.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.
* [disablePaymentLink](#disablepaymentlink) - Disable a payment link.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.
* [getPaymentLinkQRCode](#getpaymentlinkqrcode) - Retrieve the payment link encoded in a QR code. 

Use the `Accept` header to specify the format of the response. Supported formats are `application/json` and `image/png`.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

## createPaymentLink

Create a payment link that allows an end user to make a payment on Moov's hosted payment link page.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.paymentLinks.createPaymentLink({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "831ce989-44b7-4d2f-8990-b0ab3c903956",
    createPaymentLink: {
      partnerAccountID: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      merchantPaymentMethodID: "4c4e7f8e-81f4-4f3d-8f6f-6f6e7f8e4c4e",
      amount: {
        currency: "USD",
        value: 1204,
      },
      display: {
        title: "Example Payment Link",
        description: "This is an example payment link.",
        callToAction: "pay",
      },
      customer: {
        requirePhone: true,
      },
      payment: {
        allowedMethods: [
          "card-payment",
          "ach-debit-collect",
        ],
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
        },
      },
      payout: {
        allowedMethods: [
          "push-to-card",
        ],
        recipient: {
          email: "jordan.lee@classbooker.dev",
        },
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
import { paymentLinksCreatePaymentLink } from "@moovio/sdk/funcs/paymentLinksCreatePaymentLink.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await paymentLinksCreatePaymentLink(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "831ce989-44b7-4d2f-8990-b0ab3c903956",
    createPaymentLink: {
      partnerAccountID: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      merchantPaymentMethodID: "4c4e7f8e-81f4-4f3d-8f6f-6f6e7f8e4c4e",
      amount: {
        currency: "USD",
        value: 1204,
      },
      display: {
        title: "Example Payment Link",
        description: "This is an example payment link.",
        callToAction: "pay",
      },
      customer: {
        requirePhone: true,
      },
      payment: {
        allowedMethods: [
          "card-payment",
          "ach-debit-collect",
        ],
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
        },
      },
      payout: {
        allowedMethods: [
          "push-to-card",
        ],
        recipient: {
          email: "jordan.lee@classbooker.dev",
        },
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
| `request`                                                                                                                                                                      | [operations.CreatePaymentLinkRequest](../../models/operations/createpaymentlinkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreatePaymentLinkSecurity](../../models/operations/createpaymentlinksecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaymentLink](../../models/components/paymentlink.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GenericError           | 400, 409                      | application/json              |
| errors.CreatePaymentLinkError | 422                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## listPaymentLinks

List all the payment links created under a Moov account.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.paymentLinks.listPaymentLinks({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "9f728868-b3c8-409c-9aa0-282a13d8ddc8",
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
import { paymentLinksListPaymentLinks } from "@moovio/sdk/funcs/paymentLinksListPaymentLinks.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await paymentLinksListPaymentLinks(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "9f728868-b3c8-409c-9aa0-282a13d8ddc8",
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
| `request`                                                                                                                                                                      | [operations.ListPaymentLinksRequest](../../models/operations/listpaymentlinksrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListPaymentLinksSecurity](../../models/operations/listpaymentlinkssecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaymentLink[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getPaymentLink

Retrieve a payment link by code.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.read` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.paymentLinks.getPaymentLink({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "34a1451d-384e-4fff-a7ce-e90c2bb61969",
    paymentLinkCode: "uc7ZYKrMhi",
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
import { paymentLinksGetPaymentLink } from "@moovio/sdk/funcs/paymentLinksGetPaymentLink.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await paymentLinksGetPaymentLink(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "34a1451d-384e-4fff-a7ce-e90c2bb61969",
    paymentLinkCode: "uc7ZYKrMhi",
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
| `request`                                                                                                                                                                      | [operations.GetPaymentLinkRequest](../../models/operations/getpaymentlinkrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetPaymentLinkSecurity](../../models/operations/getpaymentlinksecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaymentLink](../../models/components/paymentlink.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updatePaymentLink

Update a payment link.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.paymentLinks.updatePaymentLink({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "94fe6aeb-a005-4850-b45d-bb0fa580425d",
    paymentLinkCode: "uc7ZYKrMhi",
    updatePaymentLink: {
      amount: {
        currency: "USD",
        value: 1204,
      },
      customer: {
        requireAddress: true,
        requirePhone: true,
      },
      payment: {
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
        },
      },
      payout: {
        recipient: {
          email: "jordan.lee@classbooker.dev",
        },
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
import { paymentLinksUpdatePaymentLink } from "@moovio/sdk/funcs/paymentLinksUpdatePaymentLink.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await paymentLinksUpdatePaymentLink(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "94fe6aeb-a005-4850-b45d-bb0fa580425d",
    paymentLinkCode: "uc7ZYKrMhi",
    updatePaymentLink: {
      amount: {
        currency: "USD",
        value: 1204,
      },
      customer: {
        requireAddress: true,
        requirePhone: true,
      },
      payment: {
        cardDetails: {
          dynamicDescriptor: "WhlBdy *Yoga 11-12",
        },
        achDetails: {
          companyEntryDescription: "Gym dues",
          originatingCompanyName: "Whole Body Fit",
        },
      },
      payout: {
        recipient: {
          email: "jordan.lee@classbooker.dev",
        },
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
| `request`                                                                                                                                                                      | [operations.UpdatePaymentLinkRequest](../../models/operations/updatepaymentlinkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdatePaymentLinkSecurity](../../models/operations/updatepaymentlinksecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaymentLink](../../models/components/paymentlink.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GenericError           | 400, 409                      | application/json              |
| errors.UpdatePaymentLinkError | 422                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## disablePaymentLink

Disable a payment link.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  await moov.paymentLinks.disablePaymentLink({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "edc2775b-a4a3-4513-8870-3bdf4aaaed8e",
    paymentLinkCode: "uc7ZYKrMhi",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "@moovio/sdk/core.js";
import { paymentLinksDisablePaymentLink } from "@moovio/sdk/funcs/paymentLinksDisablePaymentLink.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await paymentLinksDisablePaymentLink(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "edc2775b-a4a3-4513-8870-3bdf4aaaed8e",
    paymentLinkCode: "uc7ZYKrMhi",
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
| `request`                                                                                                                                                                      | [operations.DisablePaymentLinkRequest](../../models/operations/disablepaymentlinkrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DisablePaymentLinkSecurity](../../models/operations/disablepaymentlinksecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getPaymentLinkQRCode

Retrieve the payment link encoded in a QR code. 

Use the `Accept` header to specify the format of the response. Supported formats are `application/json` and `image/png`.

To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need 
to specify the `/accounts/{accountID}/transfers.write` scope.

### Example Usage

```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov();

async function run() {
  const result = await moov.paymentLinks.getPaymentLinkQRCode({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "248ffcf9-c53a-4e8e-a8b8-8c5014496a79",
    paymentLinkCode: "uc7ZYKrMhi",
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
import { paymentLinksGetPaymentLinkQRCode } from "@moovio/sdk/funcs/paymentLinksGetPaymentLinkQRCode.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await paymentLinksGetPaymentLinkQRCode(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "248ffcf9-c53a-4e8e-a8b8-8c5014496a79",
    paymentLinkCode: "uc7ZYKrMhi",
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
| `request`                                                                                                                                                                      | [operations.GetPaymentLinkQRCodeRequest](../../models/operations/getpaymentlinkqrcoderequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetPaymentLinkQRCodeSecurity](../../models/operations/getpaymentlinkqrcodesecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPaymentLinkQRCodeResponse](../../models/operations/getpaymentlinkqrcoderesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |