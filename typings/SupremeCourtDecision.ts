type SupremeCourtDecision = {
  number: number;
  date: string;
  subject: string;
  parties: string;
  keywords: string[];
  reference: string;
  principle: string;
  ground_of_appeal: string;
  supreme_court_response: string;
  verdict: string;
  president: string;
  reporting_judge: string;
  _id: string;
};

export default SupremeCourtDecision;
