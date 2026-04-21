# GooglePay

## Overview

### Available Operations

* [linkToken](#linktoken) - Connect a Google Pay token to the specified account.

The `token` data is defined by Google Pay and should be passed through from Google Pay's response unmodified.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
you'll need to specify the `/accounts/{accountID}/cards.write` scope.

## linkToken

Connect a Google Pay token to the specified account.

The `token` data is defined by Google Pay and should be passed through from Google Pay's response unmodified.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
you'll need to specify the `/accounts/{accountID}/cards.write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="linkGooglePayToken" method="post" path="/accounts/{accountID}/google-pay/tokens" -->
```typescript
import { Moov } from "@moovio/sdk";

const moov = new Moov({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await moov.googlePay.linkToken({
    accountID: "<id>",
    linkGooglePay: {
      token: {
        protocolVersion: "ECv2",
        signature: "<value>",
        intermediateSigningKey: {
          signedKey: "<value>",
          signatures: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
        signedMessage: "<value>",
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
    username: "",
    password: "",
  },
});

async function run() {
  const res = await googlePayLinkToken(moov, {
    accountID: "<id>",
    linkGooglePay: {
      token: {
        protocolVersion: "ECv2",
        signature: "<value>",
        intermediateSigningKey: {
          signedKey: "<value>",
          signatures: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
        signedMessage: "<value>",
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