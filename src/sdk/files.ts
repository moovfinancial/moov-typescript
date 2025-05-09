/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesGet } from "../funcs/filesGet.js";
import { filesList } from "../funcs/filesList.js";
import { filesUpload } from "../funcs/filesUpload.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Files extends ClientSDK {
  /**
   * Upload a file and link it to the specified Moov account.
   *
   * The maximum file size is 20MB. Each account is allowed a maximum of 50 files. Acceptable file types include csv, jpg, pdf,
   * and png.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/files.write` scope.
   */
  async upload(
    request: operations.UploadFileRequest,
    options?: RequestOptions,
  ): Promise<operations.UploadFileResponse> {
    return unwrapAsync(filesUpload(
      this,
      request,
      options,
    ));
  }

  /**
   * List all the files associated with a particular Moov account.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/files.read` scope.
   */
  async list(
    request: operations.ListFilesRequest,
    options?: RequestOptions,
  ): Promise<operations.ListFilesResponse> {
    return unwrapAsync(filesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve file details associated with a specific Moov account.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/files.read` scope.
   */
  async get(
    request: operations.GetFileDetailsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetFileDetailsResponse> {
    return unwrapAsync(filesGet(
      this,
      request,
      options,
    ));
  }
}
