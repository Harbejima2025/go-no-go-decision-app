const questionsData = [
  {
    area: "Donor",  // Main category
    categories: [
      {
        subArea: "Donor relationship",  // Subcategory
        questions: [
          {
            id: "1.1.1",
            grants: "Is the FO well positioned with the donor in-country, for example recent visits to the relevant technical officers of the donor?",
            contracts: "Is the FO well positioned with the donor in-country, for example recent visits to the relevant technical officers of the donor?"
          },
          {
            id: "1.1.2",
            grants: "Has the FO had a LRF/Locally led grant from this donor before?",
            contracts: "Is the FO familiar with the bidding process of the client, or has previous experience in applying, receiving funds, implementing project with the client?"
          }
        ]
      },
      {
        subArea: "GESI policy",
        questions: [
          {
            id: "1.2.1",
            grants: "Is FO team familiar with donor's Gender Equality and Social Inclusion (GESI) strategy/policy/minimum requirements?",
            contracts: "Is FO team familiar with donor's Gender Equality and Social Inclusion (GESI) strategy/policy/minimum requirements?"
          }
        ]
      }
    ]
  },
  {
    area: "Partners",
    categories: [
      {
        subArea: "Implementing Partners",
        questions: [
          {
            id: "2.1.1",
            grants: "Does the FO have or can it quickly establish competitive implementing partners/consortia needed to succeed? Who?",
            contracts: "Does the FO have or can it quickly establish competitive implementing partners/consortia needed to succeed? In the comments indicate the names"
          },
          {
            id: "2.1.2",
            grants: "Does the FO have partnering/consortia/teaming agreements in place for this opportunity? Did/will partners pass due diligence checks?",
            contracts: "Does the FO have partnering/consortia/teaming agreements in place for this opportunity? Did/will partners pass due diligence checks?"
          }
        ]
      },
      {
        subArea: "Competitors",
        questions: [
          {
            id: "2.2.1",
            grants: "Are there strong competitors to winning this grant? Who? How do we rate compared to the competition?",
            contracts: "Are there strong competitors to winning this grant? Who? How do we rate compared to the competition?"
          }
        ]
      }
      // ... (continue adding subAreas and questions)
    ]
  },
  // ... Add other Areas like Alignment, Proposal Writing, Implementation Capability, Financial, Implementation Risk
];
