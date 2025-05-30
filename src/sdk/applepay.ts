/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applePayCreateSession } from "../funcs/applePayCreateSession.js";
import { applePayGetMerchantDomains } from "../funcs/applePayGetMerchantDomains.js";
import { applePayLinkToken } from "../funcs/applePayLinkToken.js";
import { applePayRegisterMerchantDomains } from "../funcs/applePayRegisterMerchantDomains.js";
import { applePayUpdateMerchantDomains } from "../funcs/applePayUpdateMerchantDomains.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ApplePay extends ClientSDK {
  /**
   * Add domains to be registered with Apple Pay.
   *
   * Any domains that will be used to accept payments must first be [verified](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains)
   * with Apple.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope.
   */
  async registerMerchantDomains(
    request: operations.RegisterApplePayMerchantDomainsRequest,
    options?: RequestOptions,
  ): Promise<operations.RegisterApplePayMerchantDomainsResponse> {
    return unwrapAsync(applePayRegisterMerchantDomains(
      this,
      request,
      options,
    ));
  }

  /**
   * Add or remove domains to be registered with Apple Pay.
   *
   * Any domains that will be used to accept payments must first be [verified](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains)
   * with Apple.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope.
   */
  async updateMerchantDomains(
    request: operations.UpdateApplePayMerchantDomainsRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateApplePayMerchantDomainsResponse | undefined> {
    return unwrapAsync(applePayUpdateMerchantDomains(
      this,
      request,
      options,
    ));
  }

  /**
   * Get domains registered with Apple Pay.
   *
   * Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/apple-pay.read` scope.
   */
  async getMerchantDomains(
    request: operations.GetApplePayMerchantDomainsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetApplePayMerchantDomainsResponse> {
    return unwrapAsync(applePayGetMerchantDomains(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a session with Apple Pay to facilitate a payment.
   *
   * Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more.
   * A successful response from this endpoint should be passed through to Apple Pay unchanged.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/apple-pay.write` scope.
   */
  async createSession(
    request: operations.CreateApplePaySessionRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateApplePaySessionResponse> {
    return unwrapAsync(applePayCreateSession(
      this,
      request,
      options,
    ));
  }

  /**
   * Connect an Apple Pay token to the specified account.
   *
   * Read our [Apple Pay tutorial](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) to learn more.
   * The `token` data is defined by Apple Pay and should be passed through from Apple Pay's response unmodified.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/cards.write` scope.
   */
  async linkToken(
    request: operations.LinkApplePayTokenRequest,
    options?: RequestOptions,
  ): Promise<operations.LinkApplePayTokenResponse> {
    return unwrapAsync(applePayLinkToken(
      this,
      request,
      options,
    ));
  }
}
