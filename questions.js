// questions.js
const questions = [
  // Donor
  {
    id: "1.1.1",
    area: "Donor",
    type: "Grant & Contract",
    text: "Is the FO well positioned with the donor in-country, for example recent visits to the relevant technical officers of the donor?"
  },
  {
    id: "1.1.2",
    area: "Donor",
    type: "Grant & Contract",
    text: "Has the FO had a LRF/Locally led grant from this donor before? / Is the FO familiar with the bidding process of the client, or has previous experience in applying, receiving funds, implementing project with the client?"
  },
  {
    id: "1.2.1",
    area: "Donor",
    type: "Grant & Contract",
    text: "Is FO team familiar with donor's Gender Equality and Social Inclusion (GESI) strategy/policy/minimum requirements?"
  },

  // Partners
  {
    id: "2.1.1",
    area: "Partners",
    type: "Grant & Contract",
    text: "Does the FO have or can it quickly establish competitive implementing partners/consortia needed to succeed? Who?"
  },
  {
    id: "2.1.2",
    area: "Partners",
    type: "Grant & Contract",
    text: "Does the FO have partnering/consortia/teaming agreements in place for this opportunity? Did/will partners pass due diligence checks?"
  },
  {
    id: "2.1.3",
    area: "Partners",
    type: "Contract only",
    text: "Which WV entities and partners are going to be named as the jointly and severally liable consortium submitting the bid and which partners are going to be treated as sub-consultants?"
  },
  {
    id: "2.2.1",
    area: "Partners",
    type: "Grant & Contract",
    text: "Are there strong competitors to winning this grant? Who? How do we rate compared to the competition?"
  },
  {
    id: "2.3.1",
    area: "Partners",
    type: "Grant & Contract",
    text: "If the opportunity require a partnering with other stakeholders, how are you accessing the risk associated with this partnership?"
  },
  {
    id: "2.3.2",
    area: "Partners",
    type: "Grant & Contract",
    text: "Are your partners identified following the donors' eligibility criteria under this call? In comments, indicate the names, are they local or international?"
  },
  {
    id: "2.4.1",
    area: "Partners",
    type: "Grant & Contract",
    text: "What SO are you partnering with? If you're pursuing the opportunity on your own, please specify the reason? (provide additional risk mitigating plan separately)"
  },

  // Alignment
  {
    id: "3.1.1",
    area: "Alignment",
    type: "Grant & Contract",
    text: "Does it fit with our FO or SO strategy, including CWB, geographic and technical priorities? Is it with a priority donor?"
  },
  {
    id: "3.1.2",
    area: "Alignment",
    type: "Grant & Contract",
    text: "Does the opportunity align with OIOS initiative (allowing the use of L1/L2 indicators) to tell our partnership-wide story of impact and enhance impact reporting?"
  },
  {
    id: "3.2.1",
    area: "Alignment",
    type: "Contract only",
    text: "Is your office included in the list of offices eligible to seek commercial contracting opportunities? (Note: please contact with your RO GAM for the list of contract eligible offices in your region)"
  },
  {
    id: "3.3.1",
    area: "Alignment",
    type: "Contract only",
    text: "Has the FO received local legal and tax advice? (Please indicate if the FO is allowed to pursue commercial contracts with its current registration)"
  },
  {
    id: "3.3.2",
    area: "Alignment",
    type: "Contract only",
    text: "What tax implications there might be for the FO associated with this contract?"
  },
  {
    id: "3.3.3",
    area: "Alignment",
    type: "Contract only",
    text: "What tax implications there might be for the SO associated with this contract?"
  },
  {
    id: "3.4.1",
    area: "Alignment",
    type: "Grant & Contract",
    text: "Indicate whether the FO is permitted to pursue LRF/locally led grants with its current registration as per a) national law b) WVI internal protocols"
  },
  {
    id: "3.5.1",
    area: "Alignment",
    type: "Grant & Contract",
    text: "Has your office reviewed the LRF protocol (yes/no)? Has the respective SO been informed of your LRF consideration and what have they responded (Go/No-Go , any restriction?) With whom from the SO did the office clarified this LRF? Which support / capacity request will the FO request from the respective SO for drafting a winning proposal?"
  },

  // Proposal Writing
  {
    id: "4.1.1",
    area: "Proposal Writing",
    type: "Grant & Contract",
    text: "Are there adequate time and funds to write a winning proposal?"
  },
  {
    id: "4.2.1",
    area: "Proposal Writing",
    type: "Grant & Contract",
    text: "Do we have available a high quality, experienced proposal team (Lead, Writer, Technical Sector (including GEDSI), DME, Finance and other contributors)? Which office and who will take the lead for writing the proposal?"
  },
  {
    id: "4.2.2",
    area: "Proposal Writing",
    type: "Contract only",
    text: "Does your office have experience in developing commercial contract bidding document previously or have a capable team working in the bidding documents?"
  },
  {
    id: "4.3.1",
    area: "Proposal Writing",
    type: "Grant & Contract",
    text: "Do we have a strong, relevant project models, evidence of impact, and innovation for the technical sectors in this opportunity? What are they?"
  },
  {
    id: "4.4.1",
    area: "Proposal Writing",
    type: "Contract only",
    text: "How many Key Expert positions are listed in the RFP (or expected to be listed)? How many of those will be filled by existing staff? How many will need to be filled via recruitment? How confident are you that we will have strong CVs ready for all the Key Expert positions before submitting the proposal?"
  },
  {
    id: "4.5.1",
    area: "Proposal Writing",
    type: "Contract only",
    text: "Do you have an M&E system that helps you know to what degree the deliverables you are promising in the proposal are achievable within cost and time?"
  },

  // Implementation Capability
  {
    id: "5.1.1",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Does the FO have the structures, geographic presence, relationships, experience, culture (including GESI mainstreaming), support functions (incl. grant finance, grant compliance) and systems for success?"
  },
  {
    id: "5.2.1",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Can the FO hire or assign the right, qualified people to succeed (including the relevant core competency for legal, compliance and/or GESI)? Are the resources/salaries needed to hire competent staff acceptable to the current FO staffing structure and to P&C?"
  },
  {
    id: "5.3.1",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Is the Procurement planning process embedded in the Budgeting Process? (Is an usual business practice)"
  },
  {
    id: "5.3.2",
    area: "Implementation Capability",
    type: "Contract only",
    text: "Is the SCM-Team capacity (# of staff) sufficient in managing the procurement of this contract, if awarded?"
  },
  {
    id: "5.3.3",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Are the items required by this grant part of the regular purchases by the FO?"
  },
  {
    id: "5.3.4",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Does the SCM-team have experience in procurement policies/requirements from the Donor for this grant?"
  },
  {
    id: "5.3.5",
    area: "Implementation Capability",
    type: "Contract only",
    text: "Will WV manage all the procurement?"
  },
  {
    id: "5.4.1",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Is there sufficient management support and technical capacity (including capacity for legal, compliance and GESI mainstreaming) available in the FO, SO and RO to perform successfully?"
  },
  {
    id: "5.5.1",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Does FO have strong past performance in implementing grant projects of similar size, complexity, sector...? Cite evidence."
  },
  {
    id: "5.6.1",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "Are there any recent FO audit findings still outstanding that indicate limited ability of the FO to implement this grant/contract? Have previous findings been adequately addressed to prevent recurrence?"
  },
  {
    id: "5.7.1",
    area: "Implementation Capability",
    type: "Contract only",
    text: "Do you have an M&E system that will alert you as to whether you are on track to meet the promised deliverables that will be the basis for payment from the Client?"
  },
  {
    id: "5.8.1",
    area: "Implementation Capability",
    type: "Grant & Contract",
    text: "In addition to the call for applications, has the FO reviewed the respective GRANT agreement template from this donor (y/n)? Which legal, insurances, compliance or other liabilities will need to be addressed further during the design and Grant risk mitigation plan, e.g. what questions need to be addressed before submission? Has WVI Legal reviewed the future agreement template, and what are the issues to be clarified during the design or startup?"
  },
  {
    id: "5.8.2",
    area: "Implementation Capability",
    type: "Contract only",
    text: "In addition to the call for applications, has the FO reviewed the respective CONTRACT agreement template from this donor (y/n)? Which legal, insurances, compliance or other liabilities will need to be addressed further during the design and contract risk mitigation plan, egg what questions need to be addressed before submission? Has WVI Legal reviewed the future agreement template, and what are the issues to be clarified during the design or startup?"
  },

  // Financial
  {
    id: "6.1.1",
    area: "Financial",
    type: "Grant & Contract",
    text: "Can we charge our support/administrative costs directly or through the cost allocation to this opportunity? If yes, will the budget still be competitive? If not, how they will be covered? Share estimated support cost % from total proposed budget."
  },
  {
    id: "6.2.1",
    area: "Financial",
    type: "Grant only",
    text: "Can WV meet the donor match requirements with grant to grant match, sponsorship or local fundraising? If so, briefly explain how. If not how will the donor required match be provided?"
  },
  {
    id: "6.3.1",
    area: "Financial",
    type: "Grant only",
    text: "Does the donor request cash match (y/n)? Can the FO meet the donor match requirements (y/n)? Which resources are proposed by the FO to use as cash match, e.g. grant to grant match, sponsorship or local fundraising or? If so, briefly explain how. If not how will the donor required match be provided?"
  },
  {
    id: "6.4.1",
    area: "Financial",
    type: "Grant & Contract",
    text: "What is the funding arrangement from donor for this opportunity? Is it prefunding by donor, or payment by result or reimbursement from donor? (If payment by results, please use contract rating sheet) What is overall financial risk?"
  },
  {
    id: "6.4.2",
    area: "Financial",
    type: "Contract only",
    text: "Please estimate your pre-financing / cash flow needs for this contract. (A starting point is to assume 6-months' worth of implementation will be needed.) How will this pre-financing need be met? Does the office has unrestricted local income reserve to back up this pre-financing needs? Please explain how the office is planning to cover pre-financing needs? And who will carry the overall financial risk?"
  },
  {
    id: "6.5.1",
    area: "Financial",
    type: "Grant & Contract",
    text: "If there is an implementing partner, how many are planned to be engaged? How much is the estimated funding allocation to subrecipients / implementing partners?"
  },
  {
    id: "6.5.2",
    area: "Financial",
    type: "Contract only",
    text: "Indicate whether implementing partners need support with pre-financing or whether they have confirmed they can pre-finance themselves?"
  },
  {
    id: "6.6.1",
    area: "Financial",
    type: "Contract only",
    text: "Will WV be charged taxes for earning revenue from this contract? If so, what is the estimated tax that will need to be included in WV's proposed price?"
  },
  {
    id: "6.7.1",
    area: "Financial",
    type: "Contract only",
    text: "Is the FO familiar with the current budgeting guideline for professional indemnity insurance and the associated chargeback from GC Insurance?"
  },
  {
    id: "6.8.1",
    area: "Financial",
    type: "Contract only",
    text: "If the FO is pursuing a commercial contract without an SO, please confirm the FO has made its contribution to the Central Risk Pool according to the FY budgeting guidelines."
  },
  {
    id: "6.9.1",
    area: "Financial",
    type: "Grant & Contract",
    text: "Has a Risk Management Plan been drafted? Does WV have the ability to cover the risk (insurance, pre-financing…) associated with this opportunity?"
  },

  // Implementation Risk
  {
    id: "7.1.1",
    area: "Implementation Risk",
    type: "Grant & Contract",
    text: "Are there current or potential security issues in the area that pose (or may pose) a risk to WV employees and to project delivery? If so, does the FO have a strong and proven risk management approach?"
  },
  {
    id: "7.2.1a",
    area: "Implementation Risk",
    type: "Grant & Contract",
    text: "Are there political risks to the FO and/or the SO undertaking this grant work?"
  },
  {
    id: "7.2.1b",
    area: "Implementation Risk",
    type: "Grant only",
    text: "Are there political risks to the FO undertaking this proposal work?"
  },
  {
    id: "7.3.1",
    area: "Implementation Risk",
    type: "Grant & Contract",
    text: "Can WV reasonably contribute to and measure the desired impact including GESI impact and disaggregate data by sex, age, disability and other locally identified vulnerability factors? Could external factors make project objectives hard to achieve? Will there be sufficient budget available in the proposal for M&E?"
  },
  {
    id: "7.4.1",
    area: "Implementation Risk",
    type: "Contract only",
    text: "Please specify what payment method the contract is going to apply? Is the payment tied to outputs or outcome?"
  }
];
