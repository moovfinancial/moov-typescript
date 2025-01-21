# EnrichedAddress
(*enrichedAddress*)

## Overview

### Available Operations

* [getEnrichmentAddress](#getenrichmentaddress) -   Fetch enriched address suggestions. Requires a partial address. 
  
  To use this endpoint from the browser, you'll need to specify the `/profile-enrichment.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

## getEnrichmentAddress

  Fetch enriched address suggestions. Requires a partial address. 
  
  To use this endpoint from the browser, you'll need to specify the `/profile-enrichment.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.enrichedAddress.getEnrichmentAddress({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    search: "<value>",
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
import { enrichedAddressGetEnrichmentAddress } from "moov-sdk/funcs/enrichedAddressGetEnrichmentAddress.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await enrichedAddressGetEnrichmentAddress(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    search: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetEnrichmentAddressRequest](../../models/operations/getenrichmentaddressrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetEnrichmentAddressSecurity](../../models/operations/getenrichmentaddresssecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EnrichedAddressResponse](../../models/components/enrichedaddressresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |