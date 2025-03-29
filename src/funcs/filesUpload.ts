/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { MoovCore } from "../core.js";
import { appendForm, encodeSimple } from "../lib/encodings.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
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
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";
import { isReadableStream } from "../types/streams.js";

/**
 * Upload a file and link it to the specified Moov account.
 *
 * The maximum file size is 10MB. Each account is allowed a maximum of 50 files. Acceptable file types include csv, jpg, pdf,
 * and png.
 *
 * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
 * you'll need to specify the `/accounts/{accountID}/files.write` scope.
 */
export function filesUpload(
  client: MoovCore,
  request: operations.UploadFileRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.UploadFileResponse,
    | errors.GenericError
    | errors.FileValidationError
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
  request: operations.UploadFileRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.UploadFileResponse,
      | errors.GenericError
      | errors.FileValidationError
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
    (value) => operations.UploadFileRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.FileUploadRequestMultiPart.file)) {
    appendForm(body, "file", payload.FileUploadRequestMultiPart.file);
  } else if (
    isReadableStream(payload.FileUploadRequestMultiPart.file.content)
  ) {
    const buffer = await readableStreamToArrayBuffer(
      payload.FileUploadRequestMultiPart.file.content,
    );
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    appendForm(body, "file", blob);
  } else {
    appendForm(
      body,
      "file",
      new Blob([payload.FileUploadRequestMultiPart.file.content], {
        type: "application/octet-stream",
      }),
      payload.FileUploadRequestMultiPart.file.fileName,
    );
  }
  appendForm(
    body,
    "filePurpose",
    payload.FileUploadRequestMultiPart.filePurpose,
  );
  if (payload.FileUploadRequestMultiPart.metadata !== undefined) {
    appendForm(body, "metadata", payload.FileUploadRequestMultiPart.metadata);
  }

  const pathParams = {
    accountID: encodeSimple("accountID", payload.accountID, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/accounts/{accountID}/files")(pathParams);

  const headers = new Headers(compactMap({
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
    operationID: "uploadFile",
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
    operations.UploadFileResponse,
    | errors.GenericError
    | errors.FileValidationError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.UploadFileResponse$inboundSchema, {
      hdrs: true,
      key: "Result",
    }),
    M.jsonErr([400, 409], errors.GenericError$inboundSchema, { hdrs: true }),
    M.jsonErr(422, errors.FileValidationError$inboundSchema, { hdrs: true }),
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
