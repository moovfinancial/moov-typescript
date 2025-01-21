/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { MoovCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Retrieve a specific representative associated with a given Moov account. Read our [business representatives guide](https://docs.moov.io/guides/accounts/requirements/business-representatives/) to learn more.
 *
 * To use this endpoint from the browser, you’ll need to specify the `/accounts/{accountID}/representatives.read` scope when generating a [token](https://docs.moov.io/api/authentication/access-tokens/).
 */
export async function representativesGetRepresentative(
  client: MoovCore,
  security: operations.GetRepresentativeSecurity,
  request: operations.GetRepresentativeRequest,
  options?: RequestOptions,
): Promise<
  Result<
    components.Representative,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetRepresentativeRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    accountID: encodeSimple("accountID", payload.accountID, {
      explode: false,
      charEncoding: "percent",
    }),
    representativeID: encodeSimple(
      "representativeID",
      payload.representativeID,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/accounts/{accountID}/representatives/{representativeID}",
  )(pathParams);

  const headers = new Headers(compactMap({
    Accept: "application/json",
    "x-moov-version": encodeSimple(
      "x-moov-version",
      payload["x-moov-version"],
      { explode: false, charEncoding: "none" },
    ),
  }));

  const requestSecurity = resolveSecurity(
    [
      {
        type: "http:basic",
        value: {
          username: security?.basicAuth?.username,
          password: security?.basicAuth?.password,
        },
      },
    ],
    [
      {
        fieldName: "Authorization",
        type: "oauth2",
        value: security?.oAuth2Auth,
      },
    ],
  );

  const context = {
    operationID: "getRepresentative",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["401", "403", "404", "429", "4XX", "500", "504", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    components.Representative,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.Representative$inboundSchema),
    M.fail([401, 403, 404, 429, "4XX"]),
    M.fail([500, 504, "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
