/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { MoovCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Create a session with Apple Pay to facilitate a payment.
 *
 * Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more.
 * A successful response from this endpoint should be passed through to Apple Pay unchanged.
 *
 * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
 * you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope.
 */
export function applePayCreateSession(
  client: MoovCore,
  request: operations.CreateApplePaySessionRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.CreateApplePaySessionResponse,
    | errors.GenericError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: MoovCore,
  request: operations.CreateApplePaySessionRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.CreateApplePaySessionResponse,
      | errors.GenericError
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.CreateApplePaySessionRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.CreateApplePaySession, {
    explode: true,
  });

  const pathParams = {
    accountID: encodeSimple("accountID", payload.accountID, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/accounts/{accountID}/apple-pay/sessions")(
    pathParams,
  );

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-moov-version": encodeSimple(
      "x-moov-version",
      client._options.xMoovVersion,
      { explode: false, charEncoding: "none" },
    ),
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "createApplePaySession",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "409",
      "422",
      "429",
      "4XX",
      "500",
      "504",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.CreateApplePaySessionResponse,
    | errors.GenericError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.CreateApplePaySessionResponse$inboundSchema, {
      hdrs: true,
      key: "Result",
    }),
    M.jsonErr([400, 409, 422], errors.GenericError$inboundSchema, {
      hdrs: true,
    }),
    M.fail([401, 403, 404, 429]),
    M.fail([500, 504]),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
