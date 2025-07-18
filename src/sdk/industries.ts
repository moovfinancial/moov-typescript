/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { industriesList } from "../funcs/industriesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Industries extends ClientSDK {
  /**
   * Returns a list of industries relevant to merchant profile enrichment.  Results are ordered by industry name.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/),
   * you'll need to specify the `/profile-enrichment.read` scope.
   */
  async list(
    request: operations.ListIndustriesRequest,
    options?: RequestOptions,
  ): Promise<operations.ListIndustriesResponse> {
    return unwrapAsync(industriesList(
      this,
      request,
      options,
    ));
  }
}
