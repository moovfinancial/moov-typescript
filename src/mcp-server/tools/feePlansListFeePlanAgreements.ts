/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { feePlansListFeePlanAgreements } from "../../funcs/feePlansListFeePlanAgreements.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListFeePlanAgreementsRequest$inboundSchema,
};

export const tool$feePlansListFeePlanAgreements: ToolDefinition<typeof args> = {
  name: "fee-plans-list-fee-plan-agreements",
  description: `List all fee plan agreements associated with an account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/profile.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await feePlansListFeePlanAgreements(
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
