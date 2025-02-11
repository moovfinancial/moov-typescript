/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { underwritingGet } from "../funcs/underwritingGet.js";
import { underwritingUpsert } from "../funcs/underwritingUpsert.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Underwriting extends ClientSDK {
  /**
   * Retrieve underwriting associated with a given Moov account.
   *
   * Read our [underwriting guide](https://docs.moov.io/guides/accounts/requirements/underwriting/) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/profile.read` scope.
   */
  async get(
    request: operations.GetUnderwritingRequest,
    options?: RequestOptions,
  ): Promise<operations.GetUnderwritingResponse> {
    return unwrapAsync(underwritingGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Create or update the account's underwriting.
   *
   * Read our [underwriting guide](https://docs.moov.io/guides/accounts/requirements/underwriting/) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/profile.write` scope.
   */
  async upsert(
    request: operations.UpsertUnderwritingRequest,
    options?: RequestOptions,
  ): Promise<operations.UpsertUnderwritingResponse> {
    return unwrapAsync(underwritingUpsert(
      this,
      request,
      options,
    ));
  }
}
