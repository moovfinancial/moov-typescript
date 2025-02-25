/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { disputesUpdateEvidence } from "../../funcs/disputesUpdateEvidence.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateDisputeEvidenceRequest$inboundSchema,
};

export const tool$disputesUpdateEvidence: ToolDefinition<typeof args> = {
  name: "disputes_update-evidence",
  description: `Updates dispute evidence by ID.

Read our [disputes guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/disputes/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/transfers.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await disputesUpdateEvidence(
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
