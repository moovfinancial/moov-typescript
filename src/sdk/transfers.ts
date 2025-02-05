/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transfersCreate } from "../funcs/transfersCreate.js";
import { transfersCreateReversal } from "../funcs/transfersCreateReversal.js";
import { transfersGenerateOptions } from "../funcs/transfersGenerateOptions.js";
import { transfersGet } from "../funcs/transfersGet.js";
import { transfersGetRefund } from "../funcs/transfersGetRefund.js";
import { transfersInitiateRefund } from "../funcs/transfersInitiateRefund.js";
import { transfersList } from "../funcs/transfersList.js";
import { transfersListRefunds } from "../funcs/transfersListRefunds.js";
import { transfersUpdate } from "../funcs/transfersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Transfers extends ClientSDK {
  /**
   * Move money by providing the source, destination, and amount in the request body.
   *
   * Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
   */
  async create(
    request: operations.CreateTransferRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateTransferResponse> {
    return unwrapAsync(transfersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * List all the transfers associated with a particular Moov account.
   *
   * Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.
   *
   * When you run this request, you retrieve 200 transfers at a time. You can advance past a results set of 200 transfers by using the `skip` parameter (for example,
   * if you set `skip`= 10, you will see a results set of 200 transfers after the first 2000). If you are searching a high volume of transfers, the request will likely
   * process very slowly. To achieve faster performance, restrict the data as much as you can by using the `StartDateTime` and `EndDateTime` parameters for a limited
   * period of time. You can run multiple requests in smaller time window increments until you've retrieved all the transfers you need.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
   */
  async list(
    request: operations.ListTransfersRequest,
    options?: RequestOptions,
  ): Promise<operations.ListTransfersResponse> {
    return unwrapAsync(transfersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve full transfer details for an individual transfer of a particular Moov account.
   *
   * Payment rail-specific details are included in the source and destination. Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/)
   * to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
   */
  async get(
    request: operations.GetTransferRequest,
    options?: RequestOptions,
  ): Promise<operations.GetTransferResponse> {
    return unwrapAsync(transfersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update the metadata contained on a transfer.
   *
   * Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
   */
  async update(
    request: operations.UpdateTransferRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateTransferResponse> {
    return unwrapAsync(transfersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate a refund for a card transfer.
   *
   * **Use the [Cancel or refund a card transfer](https://docs.moov.io/api/money-movement/refunds/cancel/) endpoint for more comprehensive cancel and refund options.**
   * See the [reversals](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/) guide for more information.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.write` scope.
   */
  async initiateRefund(
    request: operations.InitiateRefundRequest,
    options?: RequestOptions,
  ): Promise<operations.InitiateRefundResponse> {
    return unwrapAsync(transfersInitiateRefund(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a list of refunds for a card transfer.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
   */
  async listRefunds(
    request: operations.ListRefundsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListRefundsResponse> {
    return unwrapAsync(transfersListRefunds(
      this,
      request,
      options,
    ));
  }

  /**
   * Get details of a refund for a card transfer.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
   */
  async getRefund(
    request: operations.GetRefundRequest,
    options?: RequestOptions,
  ): Promise<operations.GetRefundResponse> {
    return unwrapAsync(transfersGetRefund(
      this,
      request,
      options,
    ));
  }

  /**
   * Reverses a card transfer by initiating a cancellation or refund depending on the transaction status.
   * Read our [reversals guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/reversals/)
   * to learn more.
   *
   * To access this endpoint using a [token](https://docs.moov.io/api/authentication/access-tokens/) you'll need
   * to specify the `/accounts/{accountID}/transfers.write` scope.
   */
  async createReversal(
    request: operations.CreateReversalRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateReversalResponse> {
    return unwrapAsync(transfersCreateReversal(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate available payment method options for one or multiple transfer participants depending on the accountID or paymentMethodID you
   * supply in the request.
   *
   * Read our [transfers overview guide](https://docs.moov.io/guides/money-movement/overview/) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/transfers.read` scope.
   */
  async generateOptions(
    request: operations.CreateTransferOptionsRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateTransferOptionsResponse> {
    return unwrapAsync(transfersGenerateOptions(
      this,
      request,
      options,
    ));
  }
}
