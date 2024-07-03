type Plan= {
    id: number;
    name: string;
    description: string;
    price_month: number;
    price_year: number;
    active: boolean;
    has_search_supreme_court: boolean;
    has_search_laws: boolean;
    has_search_constitution: boolean;
    has_search_conseil: boolean;
    has_notifications_access: boolean;
    has_gpt_access: boolean;
  }
  
  export type Subscription ={
    id: number;
    user_id: number;
    plan: Plan;
    start_date: string; 
    expiry_date: string; 
    active: boolean;
  }
  