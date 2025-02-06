# RequirementID

The unique ID of what the requirement is asking to be filled out.

## Example Usage

```typescript
import { RequirementID } from "@moovio/sdk/models/components";

let value: RequirementID = "business.average-monthly-transaction-volume";
```

## Values

```typescript
"account.tos-acceptance" | "individual.mobile" | "individual.email" | "individual.email-or-mobile" | "individual.firstname" | "individual.lastname" | "individual.address" | "individual.ssn-last4" | "individual.ssn" | "individual.birthdate" | "business.legalname" | "business.description-or-website" | "business.entity-type" | "business.business-type" | "business.dba" | "business.ein" | "business.address" | "business.phone" | "business.admins" | "business.controllers" | "business.owners" | "business.classification" | "business.industry-code-mcc" | "business.indicate-owners-provided" | "business.average-transaction-size" | "business.max-transaction-size" | "business.average-monthly-transaction-volume" | "business.volume-by-customer-type" | "business.card-volume-distribution" | "business.fulfillment" | "business.description" | "business.underwriting-documents-tier-one" | "bank-accounts.name" | "bank-accounts.routing-number" | "bank-accounts.account-number" | "document.business.verification" | "document.individual.tin" | "document.individual.verification" | "document.representative.{rep-uuid}.tin" | "document.representative.{rep-uuid}.verification" | "representative.{rep-uuid}.mobile" | "representative.{rep-uuid}.email" | "representative.{rep-uuid}.email-or-mobile" | "representative.{rep-uuid}.firstname" | "representative.{rep-uuid}.lastname" | "representative.{rep-uuid}.address" | "representative.{rep-uuid}.ssn-last4" | "representative.{rep-uuid}.ssn" | "representative.{rep-uuid}.birthdate" | "representative.{rep-uuid}.job-title" | "representative.{rep-uuid}.is-controller" | "representative.{rep-uuid}.is-owner" | "representative.{rep-uuid}.ownership" | "document.{doc-uuid}"
```