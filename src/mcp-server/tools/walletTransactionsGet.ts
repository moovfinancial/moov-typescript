/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { walletTransactionsGet } from "../../funcs/walletTransactionsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetWalletTransactionRequest$inboundSchema,
};

export const tool$walletTransactionsGet: ToolDefinition<typeof args> = {
  name: "wallet-transactions-get",
  description: `Get details on a specific wallet transaction. 

Read our [wallet transactions guide](https://docs.moov.io/guides/sources/wallets/transactions/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/wallets.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await walletTransactionsGet(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
