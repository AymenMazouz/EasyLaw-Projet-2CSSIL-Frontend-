export type Plan = {
    id: number;
    name: string;
    description: string;
    price_month: number;
    price_year: number;
    active: boolean;
    has_search_supreme_court:boolean;
    has_search_laws:boolean;
    has_search_constitution:boolean;
    has_search_conseil:boolean;
    has_notifications_access:boolean;
    has_gpt_access:boolean;
  };

  export type SubscriptionPlan = {
    plan_id: number;
    plan_duration: string
    success_url: string;
    failure_url: string;
  };
  