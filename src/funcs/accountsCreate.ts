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
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { MoovError } from "../models/errors/mooverror.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * You can create **business** or **individual** accounts for your users (i.e., customers, merchants) by passing the required
 * information to Moov. Requirements differ per account type and requested [capabilities](https://docs.moov.io/guides/accounts/capabilities/requirements/).
 *
 * If you're requesting the `wallet`, `send-funds`, `collect-funds`, or `card-issuing` capabilities, you'll need to:
 *   + Send Moov the user [platform terms of service agreement](https://docs.moov.io/guides/accounts/requirements/platform-agreement/) acceptance.
 *     This can be done upon account creation, or by [patching](https://docs.moov.io/api/moov-accounts/accounts/patch/) the account using the `termsOfService` field.
 * If you're creating a business account with the business type `llc`, `partnership`, or `privateCorporation`, you'll need to:
 *   + Provide [business representatives](https://docs.moov.io/api/moov-accounts/representatives/) after creating the account.
 *   + [Patch](https://docs.moov.io/api/moov-accounts/accounts/patch/) the account to indicate that business representative ownership information is complete.
 *
 * Visit our documentation to read more about [creating accounts](https://docs.moov.io/guides/accounts/create-accounts/) and [verification requirements](https://docs.moov.io/guides/accounts/requirements/identity-verification/).
 * Note that the `mode` field (for production or sandbox) is only required when creating a _facilitator_ account. All non-facilitator account requests will ignore the mode field and be set to the calling facilitator's mode.
 *
 * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) you'll need
 * to specify the `/accounts.write` scope.
 */
export function accountsCreate(
  client: MoovCore,
  request: components.CreateAccount,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.CreateAccountResponse,
    | errors.GenericError
    | errors.CreateAccountResponseBody
    | MoovError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
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
  request: components.CreateAccount,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.CreateAccountResponse,
      | errors.GenericError
      | errors.CreateAccountResponseBody
      | MoovError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => components.CreateAccount$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/accounts")();

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
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "createAccount",
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
    userAgent: client._options.userAgent,
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
    operations.CreateAccountResponse,
    | errors.GenericError
    | errors.CreateAccountResponseBody
    | MoovError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, operations.CreateAccountResponse$inboundSchema, {
      hdrs: true,
      key: "Result",
    }),
    M.jsonErr([400, 409], errors.GenericError$inboundSchema, { hdrs: true }),
    M.jsonErr(422, errors.CreateAccountResponseBody$inboundSchema, {
      hdrs: true,
    }),
    M.fail([401, 403, 404, 429]),
    M.fail([500, 504]),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
