/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { disputesSubmitEvidence } from "../../funcs/disputesSubmitEvidence.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SubmitDisputeEvidenceRequest$inboundSchema,
};

export const tool$disputesSubmitEvidence: ToolDefinition<typeof args> = {
  name: "disputes-submit-evidence",
  description: `Submit the evidence associated with a dispute.

Evidence items must be uploaded using the appropriate endpoint(s) prior to calling this endpoint to submit it. **Evidence can only
be submitted once per dispute.**

Read our [disputes guide](https://docs.moov.io/guides/money-movement/accept-payments/card-acceptance/disputes/) to learn more.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/transfers.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await disputesSubmitEvidence(
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
