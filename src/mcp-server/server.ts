/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MoovCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$accountsAssignCountries } from "./tools/accountsAssignCountries.js";
import { tool$accountsCreate } from "./tools/accountsCreate.js";
import { tool$accountsDisconnect } from "./tools/accountsDisconnect.js";
import { tool$accountsGet } from "./tools/accountsGet.js";
import { tool$accountsGetCountries } from "./tools/accountsGetCountries.js";
import { tool$accountsGetMerchantProcessingAgreement } from "./tools/accountsGetMerchantProcessingAgreement.js";
import { tool$accountsGetTermsOfServiceToken } from "./tools/accountsGetTermsOfServiceToken.js";
import { tool$accountsList } from "./tools/accountsList.js";
import { tool$accountsUpdate } from "./tools/accountsUpdate.js";
import { tool$adjustmentsGet } from "./tools/adjustmentsGet.js";
import { tool$adjustmentsList } from "./tools/adjustmentsList.js";
import { tool$applePayCreateSession } from "./tools/applePayCreateSession.js";
import { tool$applePayGetMerchantDomains } from "./tools/applePayGetMerchantDomains.js";
import { tool$applePayLinkToken } from "./tools/applePayLinkToken.js";
import { tool$applePayRegisterMerchantDomains } from "./tools/applePayRegisterMerchantDomains.js";
import { tool$applePayUpdateMerchantDomains } from "./tools/applePayUpdateMerchantDomains.js";
import { tool$authenticationCreateAccessToken } from "./tools/authenticationCreateAccessToken.js";
import { tool$authenticationRevokeAccessToken } from "./tools/authenticationRevokeAccessToken.js";
import { tool$avatarsGet } from "./tools/avatarsGet.js";
import { tool$bankAccountsCompleteMicroDeposits } from "./tools/bankAccountsCompleteMicroDeposits.js";
import { tool$bankAccountsCompleteVerification } from "./tools/bankAccountsCompleteVerification.js";
import { tool$bankAccountsDisable } from "./tools/bankAccountsDisable.js";
import { tool$bankAccountsGet } from "./tools/bankAccountsGet.js";
import { tool$bankAccountsGetVerification } from "./tools/bankAccountsGetVerification.js";
import { tool$bankAccountsInitiateMicroDeposits } from "./tools/bankAccountsInitiateMicroDeposits.js";
import { tool$bankAccountsInitiateVerification } from "./tools/bankAccountsInitiateVerification.js";
import { tool$bankAccountsLink } from "./tools/bankAccountsLink.js";
import { tool$bankAccountsList } from "./tools/bankAccountsList.js";
import { tool$brandingCreate } from "./tools/brandingCreate.js";
import { tool$brandingGet } from "./tools/brandingGet.js";
import { tool$brandingUpdate } from "./tools/brandingUpdate.js";
import { tool$brandingUpsert } from "./tools/brandingUpsert.js";
import { tool$capabilitiesDisable } from "./tools/capabilitiesDisable.js";
import { tool$capabilitiesGet } from "./tools/capabilitiesGet.js";
import { tool$capabilitiesList } from "./tools/capabilitiesList.js";
import { tool$capabilitiesRequest } from "./tools/capabilitiesRequest.js";
import { tool$cardIssuingGet } from "./tools/cardIssuingGet.js";
import { tool$cardIssuingGetFull } from "./tools/cardIssuingGetFull.js";
import { tool$cardIssuingList } from "./tools/cardIssuingList.js";
import { tool$cardIssuingRequest } from "./tools/cardIssuingRequest.js";
import { tool$cardIssuingUpdate } from "./tools/cardIssuingUpdate.js";
import { tool$cardsDisable } from "./tools/cardsDisable.js";
import { tool$cardsGet } from "./tools/cardsGet.js";
import { tool$cardsLink } from "./tools/cardsLink.js";
import { tool$cardsList } from "./tools/cardsList.js";
import { tool$cardsUpdate } from "./tools/cardsUpdate.js";
import { tool$disputesAccept } from "./tools/disputesAccept.js";
import { tool$disputesDeleteEvidence } from "./tools/disputesDeleteEvidence.js";
import { tool$disputesGet } from "./tools/disputesGet.js";
import { tool$disputesGetEvidence } from "./tools/disputesGetEvidence.js";
import { tool$disputesGetEvidenceData } from "./tools/disputesGetEvidenceData.js";
import { tool$disputesList } from "./tools/disputesList.js";
import { tool$disputesListEvidence } from "./tools/disputesListEvidence.js";
import { tool$disputesSubmitEvidence } from "./tools/disputesSubmitEvidence.js";
import { tool$disputesUpdateEvidence } from "./tools/disputesUpdateEvidence.js";
import { tool$disputesUploadEvidenceFile } from "./tools/disputesUploadEvidenceFile.js";
import { tool$disputesUploadEvidenceText } from "./tools/disputesUploadEvidenceText.js";
import { tool$endToEndEncryptionGenerateKey } from "./tools/endToEndEncryptionGenerateKey.js";
import { tool$endToEndEncryptionTestEncryptedToken } from "./tools/endToEndEncryptionTestEncryptedToken.js";
import { tool$enrichedAddressGet } from "./tools/enrichedAddressGet.js";
import { tool$enrichedProfileGet } from "./tools/enrichedProfileGet.js";
import { tool$feePlansCreateFeePlanAgreements } from "./tools/feePlansCreateFeePlanAgreements.js";
import { tool$feePlansListFeePlanAgreements } from "./tools/feePlansListFeePlanAgreements.js";
import { tool$feePlansListFeePlans } from "./tools/feePlansListFeePlans.js";
import { tool$feePlansListFeesFetch } from "./tools/feePlansListFeesFetch.js";
import { tool$feePlansListPartnerPricing } from "./tools/feePlansListPartnerPricing.js";
import { tool$feePlansListPartnerPricingAgreements } from "./tools/feePlansListPartnerPricingAgreements.js";
import { tool$feePlansRetrieveFees } from "./tools/feePlansRetrieveFees.js";
import { tool$filesGet } from "./tools/filesGet.js";
import { tool$filesList } from "./tools/filesList.js";
import { tool$filesUpload } from "./tools/filesUpload.js";
import { tool$industriesList } from "./tools/industriesList.js";
import { tool$institutionsSearch } from "./tools/institutionsSearch.js";
import { tool$issuingTransactionsGet } from "./tools/issuingTransactionsGet.js";
import { tool$issuingTransactionsGetAuthorization } from "./tools/issuingTransactionsGetAuthorization.js";
import { tool$issuingTransactionsList } from "./tools/issuingTransactionsList.js";
import { tool$issuingTransactionsListAuthorizationEvents } from "./tools/issuingTransactionsListAuthorizationEvents.js";
import { tool$issuingTransactionsListAuthorizations } from "./tools/issuingTransactionsListAuthorizations.js";
import { tool$onboardingCreateInvite } from "./tools/onboardingCreateInvite.js";
import { tool$onboardingGetInvite } from "./tools/onboardingGetInvite.js";
import { tool$onboardingListInvites } from "./tools/onboardingListInvites.js";
import { tool$onboardingRevokeInvite } from "./tools/onboardingRevokeInvite.js";
import { tool$paymentLinksCreate } from "./tools/paymentLinksCreate.js";
import { tool$paymentLinksDisable } from "./tools/paymentLinksDisable.js";
import { tool$paymentLinksGet } from "./tools/paymentLinksGet.js";
import { tool$paymentLinksGetQRCode } from "./tools/paymentLinksGetQRCode.js";
import { tool$paymentLinksList } from "./tools/paymentLinksList.js";
import { tool$paymentLinksUpdate } from "./tools/paymentLinksUpdate.js";
import { tool$paymentMethodsGet } from "./tools/paymentMethodsGet.js";
import { tool$paymentMethodsList } from "./tools/paymentMethodsList.js";
import { tool$pingPing } from "./tools/pingPing.js";
import { tool$representativesCreate } from "./tools/representativesCreate.js";
import { tool$representativesDelete } from "./tools/representativesDelete.js";
import { tool$representativesGet } from "./tools/representativesGet.js";
import { tool$representativesList } from "./tools/representativesList.js";
import { tool$representativesUpdate } from "./tools/representativesUpdate.js";
import { tool$schedulingCancel } from "./tools/schedulingCancel.js";
import { tool$schedulingCreate } from "./tools/schedulingCreate.js";
import { tool$schedulingGet } from "./tools/schedulingGet.js";
import { tool$schedulingGetOccurrance } from "./tools/schedulingGetOccurrance.js";
import { tool$schedulingList } from "./tools/schedulingList.js";
import { tool$schedulingUpdate } from "./tools/schedulingUpdate.js";
import { tool$sweepsCreateConfig } from "./tools/sweepsCreateConfig.js";
import { tool$sweepsGet } from "./tools/sweepsGet.js";
import { tool$sweepsGetConfig } from "./tools/sweepsGetConfig.js";
import { tool$sweepsList } from "./tools/sweepsList.js";
import { tool$sweepsListConfigs } from "./tools/sweepsListConfigs.js";
import { tool$sweepsUpdateConfig } from "./tools/sweepsUpdateConfig.js";
import { tool$terminalApplicationsCreate } from "./tools/terminalApplicationsCreate.js";
import { tool$terminalApplicationsDelete } from "./tools/terminalApplicationsDelete.js";
import { tool$terminalApplicationsGet } from "./tools/terminalApplicationsGet.js";
import { tool$terminalApplicationsList } from "./tools/terminalApplicationsList.js";
import { tool$transfersCreate } from "./tools/transfersCreate.js";
import { tool$transfersCreateReversal } from "./tools/transfersCreateReversal.js";
import { tool$transfersGenerateOptions } from "./tools/transfersGenerateOptions.js";
import { tool$transfersGet } from "./tools/transfersGet.js";
import { tool$transfersGetRefund } from "./tools/transfersGetRefund.js";
import { tool$transfersInitiateRefund } from "./tools/transfersInitiateRefund.js";
import { tool$transfersList } from "./tools/transfersList.js";
import { tool$transfersListRefunds } from "./tools/transfersListRefunds.js";
import { tool$transfersUpdate } from "./tools/transfersUpdate.js";
import { tool$underwritingGet } from "./tools/underwritingGet.js";
import { tool$underwritingUpsert } from "./tools/underwritingUpsert.js";
import { tool$walletsGet } from "./tools/walletsGet.js";
import { tool$walletsList } from "./tools/walletsList.js";
import { tool$walletTransactionsGet } from "./tools/walletTransactionsGet.js";
import { tool$walletTransactionsList } from "./tools/walletTransactionsList.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  security?: SDKOptions["security"] | undefined;
  xMoovVersion?: SDKOptions["xMoovVersion"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Moov",
    version: "0.5.3",
  });

  const client = new MoovCore({
    security: deps.security,
    xMoovVersion: deps.xMoovVersion,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });
  const scopes = new Set(deps.scopes ?? mcpScopes);
  const tool = createRegisterTool(deps.logger, server, client, scopes);

  tool(tool$accountsCreate);
  tool(tool$accountsList);
  tool(tool$accountsGet);
  tool(tool$accountsUpdate);
  tool(tool$accountsDisconnect);
  tool(tool$accountsGetCountries);
  tool(tool$accountsAssignCountries);
  tool(tool$accountsGetMerchantProcessingAgreement);
  tool(tool$accountsGetTermsOfServiceToken);
  tool(tool$adjustmentsList);
  tool(tool$adjustmentsGet);
  tool(tool$applePayRegisterMerchantDomains);
  tool(tool$applePayUpdateMerchantDomains);
  tool(tool$applePayGetMerchantDomains);
  tool(tool$applePayCreateSession);
  tool(tool$applePayLinkToken);
  tool(tool$bankAccountsLink);
  tool(tool$bankAccountsList);
  tool(tool$bankAccountsGet);
  tool(tool$bankAccountsDisable);
  tool(tool$bankAccountsInitiateMicroDeposits);
  tool(tool$bankAccountsCompleteMicroDeposits);
  tool(tool$bankAccountsGetVerification);
  tool(tool$bankAccountsInitiateVerification);
  tool(tool$bankAccountsCompleteVerification);
  tool(tool$brandingCreate);
  tool(tool$brandingUpsert);
  tool(tool$brandingGet);
  tool(tool$brandingUpdate);
  tool(tool$capabilitiesList);
  tool(tool$capabilitiesRequest);
  tool(tool$capabilitiesGet);
  tool(tool$capabilitiesDisable);
  tool(tool$cardsLink);
  tool(tool$cardsList);
  tool(tool$cardsGet);
  tool(tool$cardsUpdate);
  tool(tool$cardsDisable);
  tool(tool$disputesList);
  tool(tool$disputesGet);
  tool(tool$disputesAccept);
  tool(tool$disputesListEvidence);
  tool(tool$disputesUploadEvidenceFile);
  tool(tool$disputesUploadEvidenceText);
  tool(tool$disputesSubmitEvidence);
  tool(tool$disputesGetEvidence);
  tool(tool$disputesUpdateEvidence);
  tool(tool$disputesDeleteEvidence);
  tool(tool$disputesGetEvidenceData);
  tool(tool$feePlansListFeePlanAgreements);
  tool(tool$feePlansCreateFeePlanAgreements);
  tool(tool$feePlansListFeePlans);
  tool(tool$feePlansRetrieveFees);
  tool(tool$feePlansListFeesFetch);
  tool(tool$feePlansListPartnerPricing);
  tool(tool$feePlansListPartnerPricingAgreements);
  tool(tool$filesUpload);
  tool(tool$filesList);
  tool(tool$filesGet);
  tool(tool$paymentLinksCreate);
  tool(tool$paymentLinksList);
  tool(tool$paymentLinksGet);
  tool(tool$paymentLinksUpdate);
  tool(tool$paymentLinksDisable);
  tool(tool$paymentLinksGetQRCode);
  tool(tool$paymentMethodsList);
  tool(tool$paymentMethodsGet);
  tool(tool$representativesCreate);
  tool(tool$representativesList);
  tool(tool$representativesDelete);
  tool(tool$representativesGet);
  tool(tool$representativesUpdate);
  tool(tool$schedulingCreate);
  tool(tool$schedulingList);
  tool(tool$schedulingUpdate);
  tool(tool$schedulingGet);
  tool(tool$schedulingCancel);
  tool(tool$schedulingGetOccurrance);
  tool(tool$sweepsCreateConfig);
  tool(tool$sweepsListConfigs);
  tool(tool$sweepsGetConfig);
  tool(tool$sweepsUpdateConfig);
  tool(tool$sweepsList);
  tool(tool$sweepsGet);
  tool(tool$transfersCreate);
  tool(tool$transfersList);
  tool(tool$transfersGet);
  tool(tool$transfersUpdate);
  tool(tool$transfersInitiateRefund);
  tool(tool$transfersListRefunds);
  tool(tool$transfersGetRefund);
  tool(tool$transfersCreateReversal);
  tool(tool$transfersGenerateOptions);
  tool(tool$underwritingGet);
  tool(tool$underwritingUpsert);
  tool(tool$walletsList);
  tool(tool$walletsGet);
  tool(tool$walletTransactionsList);
  tool(tool$walletTransactionsGet);
  tool(tool$avatarsGet);
  tool(tool$endToEndEncryptionTestEncryptedToken);
  tool(tool$endToEndEncryptionGenerateKey);
  tool(tool$enrichedAddressGet);
  tool(tool$enrichedProfileGet);
  tool(tool$industriesList);
  tool(tool$institutionsSearch);
  tool(tool$issuingTransactionsListAuthorizations);
  tool(tool$issuingTransactionsGetAuthorization);
  tool(tool$issuingTransactionsListAuthorizationEvents);
  tool(tool$issuingTransactionsList);
  tool(tool$issuingTransactionsGet);
  tool(tool$cardIssuingRequest);
  tool(tool$cardIssuingList);
  tool(tool$cardIssuingGet);
  tool(tool$cardIssuingUpdate);
  tool(tool$cardIssuingGetFull);
  tool(tool$authenticationRevokeAccessToken);
  tool(tool$authenticationCreateAccessToken);
  tool(tool$onboardingCreateInvite);
  tool(tool$onboardingListInvites);
  tool(tool$onboardingGetInvite);
  tool(tool$onboardingRevokeInvite);
  tool(tool$pingPing);
  tool(tool$terminalApplicationsCreate);
  tool(tool$terminalApplicationsList);
  tool(tool$terminalApplicationsGet);
  tool(tool$terminalApplicationsDelete);

  return server;
}
