/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { walletTransactionsGet } from "../funcs/walletTransactionsGet.js";
import { walletTransactionsList } from "../funcs/walletTransactionsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class WalletTransactions extends ClientSDK {
  /**
   * List all the transactions associated with a particular Moov wallet.
   *
   * Read our [wallet transactions guide](https://docs.moov.io/guides/sources/wallets/transactions/) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/wallets.read` scope.
   */
  async list(
    request: operations.ListWalletTransactionsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListWalletTransactionsResponse> {
    return unwrapAsync(walletTransactionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get details on a specific wallet transaction.
   *
   * Read our [wallet transactions guide](https://docs.moov.io/guides/sources/wallets/transactions/) to learn more.
   *
   * To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/)
   * you'll need to specify the `/accounts/{accountID}/wallets.read` scope.
   */
  async get(
    request: operations.GetWalletTransactionRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWalletTransactionResponse> {
    return unwrapAsync(walletTransactionsGet(
      this,
      request,
      options,
    ));
  }
}
