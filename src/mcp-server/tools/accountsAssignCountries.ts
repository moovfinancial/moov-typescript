/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsAssignCountries } from "../../funcs/accountsAssignCountries.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AssignAccountCountriesRequest$inboundSchema,
};

export const tool$accountsAssignCountries: ToolDefinition<typeof args> = {
  name: "accounts-assign-countries",
  description: `Assign the countries of operation for an account.

This endpoint will always overwrite the previously assigned values. 

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/profile.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsAssignCountries(
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
