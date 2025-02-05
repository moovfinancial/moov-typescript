/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { billingCreateFeePlanAgreements } from "../funcs/billingCreateFeePlanAgreements.js";
import { billingListFeePlanAgreements } from "../funcs/billingListFeePlanAgreements.js";
import { billingListFeePlans } from "../funcs/billingListFeePlans.js";
import { billingListPartnerPricing } from "../funcs/billingListPartnerPricing.js";
import { billingListPartnerPricingAgreements } from "../funcs/billingListPartnerPricingAgreements.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Billing extends ClientSDK {
  /**
   * List all fee plan agreements associated with an account.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/profile.read` scope.
   */
  async listFeePlanAgreements(
    request: operations.ListFeePlanAgreementsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListFeePlanAgreementsResponse> {
    return unwrapAsync(billingListFeePlanAgreements(
      this,
      request,
      options,
    ));
  }

  /**
   * Creates the subscription of a fee plan to a merchant account. Merchants are required to accept the fee plan terms prior to activation.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/profile.write` scope.
   */
  async createFeePlanAgreements(
    request: operations.CreateFeePlanAgreementsRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateFeePlanAgreementsResponse> {
    return unwrapAsync(billingCreateFeePlanAgreements(
      this,
      request,
      options,
    ));
  }

  /**
   * List all fee plans available for use by an account. This is intended to be used by an account when
   * selecting a fee plan to apply to a connected account.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/profile.read` scope.
   */
  async listFeePlans(
    request: operations.ListFeePlansRequest,
    options?: RequestOptions,
  ): Promise<operations.ListFeePlansResponse> {
    return unwrapAsync(billingListFeePlans(
      this,
      request,
      options,
    ));
  }

  /**
   * List all partner pricing plans available for use by an account.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/profile.read` scope.
   */
  async listPartnerPricing(
    request: operations.ListPartnerPricingRequest,
    options?: RequestOptions,
  ): Promise<operations.ListPartnerPricingResponse> {
    return unwrapAsync(billingListPartnerPricing(
      this,
      request,
      options,
    ));
  }

  /**
   * List all partner pricing agreements associated with an account.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/profile.read` scope.
   */
  async listPartnerPricingAgreements(
    request: operations.ListPartnerPricingAgreementsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListPartnerPricingAgreementsResponse> {
    return unwrapAsync(billingListPartnerPricingAgreements(
      this,
      request,
      options,
    ));
  }
}
