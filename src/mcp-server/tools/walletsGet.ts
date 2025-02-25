/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { walletsGet } from "../../funcs/walletsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetWalletRequest$inboundSchema,
};

export const tool$walletsGet: ToolDefinition<typeof args> = {
  name: "wallets_get",
  description:
    `Get information on a specific wallet (e.g., the available balance). 

Read our [Moov wallets guide](https://docs.moov.io/guides/sources/wallets/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/wallets.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await walletsGet(
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
