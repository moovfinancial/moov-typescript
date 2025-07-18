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
 * Link a card to an existing Moov account.
 *
 * Read our [accept card payments guide](https://docs.moov.io/guides/sources/cards/accept-card-payments/#link-a-card) to learn more.
 *
 * Only use this endpoint if you have provided Moov with a copy of your PCI attestation of compliance.
 *
 * During card linking, the provided data will be verified by submitting a $0 authorization (account verification) request.
 * If `merchantAccountID` is provided, the authorization request will contain that account's statement descriptor and address.
 * Otherwise, the platform account's profile will be used. If no statement descriptor has been set, the authorization will
 * use the account's name instead.
 *
 * It is strongly recommended that callers include the `X-Wait-For` header, set to `payment-method`, if the newly linked
 * card is intended to be used right away. If this header is not included, the caller will need to poll the [List Payment
 * Methods](https://docs.moov.io/api/sources/payment-methods/list/)
 * endpoint to wait for the new payment methods to be available for use.
 *
 * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
 * you'll need to specify the `/accounts/{accountID}/cards.write` scope.
 */
export function cardsLink(
  client: MoovCore,
  request: operations.LinkCardRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.LinkCardResponse,
    | errors.GenericError
    | errors.LinkCardError
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
  request: operations.LinkCardRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.LinkCardResponse,
      | errors.GenericError
      | errors.LinkCardError
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
    (value) => operations.LinkCardRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.LinkCard, { explode: true });

  const pathParams = {
    accountID: encodeSimple("accountID", payload.accountID, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/accounts/{accountID}/cards")(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-moov-version": encodeSimple(
      "x-moov-version",
      client._options.xMoovVersion,
      { explode: false, charEncoding: "none" },
    ),
    "x-wait-for": encodeSimple("x-wait-for", payload["x-wait-for"], {
      explode: false,
      charEncoding: "none",
    }),
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "linkCard",
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
    operations.LinkCardResponse,
    | errors.GenericError
    | errors.LinkCardError
    | MoovError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, operations.LinkCardResponse$inboundSchema, {
      hdrs: true,
      key: "Result",
    }),
    M.jsonErr(400, errors.GenericError$inboundSchema, { hdrs: true }),
    M.jsonErr(422, errors.LinkCardError$inboundSchema, { hdrs: true }),
    M.fail([401, 403, 404, 409, 429]),
    M.fail([500, 504]),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
