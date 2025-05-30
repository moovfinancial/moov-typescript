/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { endToEndEncryptionGenerateKey } from "../funcs/endToEndEncryptionGenerateKey.js";
import { endToEndEncryptionTestEncryptedToken } from "../funcs/endToEndEncryptionTestEncryptedToken.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class EndToEndEncryption extends ClientSDK {
  /**
   * Allows for testing a JWE token to ensure it's acceptable by Moov.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/ping.read` scope.
   */
  async testEncryptedToken(
    request: components.E2EEToken,
    options?: RequestOptions,
  ): Promise<operations.TestEndToEndTokenResponse | undefined> {
    return unwrapAsync(endToEndEncryptionTestEncryptedToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Generates a public key used to create a JWE token for passing secure authentication data through non-PCI compliant intermediaries.
   */
  async generateKey(
    request: operations.GenerateEndToEndKeyRequest,
    options?: RequestOptions,
  ): Promise<operations.GenerateEndToEndKeyResponse> {
    return unwrapAsync(endToEndEncryptionGenerateKey(
      this,
      request,
      options,
    ));
  }
}
