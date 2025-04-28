export type CoachProfile = {
  coach_Information: CompleteCoachInfoPayload;
  id: string;
  first_name: string;
  last_name: string;
  father_name: string;
  national_code: string;
  birth_date: string;
  city: number;
  state: string;
  description: string;
  group_name: string;
  // Add other profile fields as needed
};

export type CompleteCoachInfoPayload = {
  father_name: string;
  national_code: string;
  birth_date: string;
  city: number;
  state: string;
  description: string;
  group_name: string;
};
