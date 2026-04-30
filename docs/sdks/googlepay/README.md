# GooglePay

## Overview

### Available Operations

* [linkToken](#linktoken) - Connect a Google Pay token to the specified account.

The `paymentMethodData` field should contain the `paymentMethodData` property from Google Pay's
[PaymentData](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) response,
passed through unmodified.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
you'll need to specify the `/accounts/{accountID}/cards.write` scope.

## linkToken

Connect a Google Pay token to the specified account.

The `paymentMethodData` field should contain the `paymentMethodData` property from Google Pay's
[PaymentData](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) response,
passed through unmodified.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
you'll need to specify the `/accounts/{accountID}/cards.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="linkGooglePayToken" method="post" path="/accounts/{accountID}/google-pay/tokens" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    basicAuth: {
      username: "",
      password: "",
    },
  },
});

async function run() {
  const result = await moov.googlePay.linkToken({
    accountID: "<id>",
    linkGooglePay: {
      merchantAccountID: "c5f78a7e-2fb0-4e4a-bcf0-9e1f8b0e5c7a",
      paymentMethodData: {
        type: "CARD",
        info: {
          cardNetwork: "VISA",
          cardDetails: "1234",
          cardFundingSource: "DEBIT",
          billingAddress: {
            countryCode: "US",
          },
        },
        tokenizationData: {
          type: "PAYMENT_GATEWAY",
          token: "<value>",
        },
      },
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
import { googlePayLinkToken } from "@moovio/sdk/funcs/googlePayLinkToken.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore({
  security: {
    basicAuth: {
      username: "",
      password: "",
    },
  },
});

async function run() {
  const res = await googlePayLinkToken(moov, {
    accountID: "<id>",
    linkGooglePay: {
      merchantAccountID: "c5f78a7e-2fb0-4e4a-bcf0-9e1f8b0e5c7a",
      paymentMethodData: {
        type: "CARD",
        info: {
          cardNetwork: "VISA",
          cardDetails: "1234",
          cardFundingSource: "DEBIT",
          billingAddress: {
            countryCode: "US",
          },
        },
        tokenizationData: {
          type: "PAYMENT_GATEWAY",
          token: "<value>",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("googlePayLinkToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LinkGooglePayTokenRequest](../../models/operations/linkgooglepaytokenrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LinkGooglePayTokenResponse](../../models/operations/linkgooglepaytokenresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.GenericError       | 400, 409                  | application/json          |
| errors.LinkGooglePayError | 422                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |