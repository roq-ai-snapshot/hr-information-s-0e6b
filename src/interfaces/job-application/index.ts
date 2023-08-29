import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  applicant_name: string;
  position_applied: string;
  resume: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  applicant_name?: string;
  position_applied?: string;
  resume?: string;
  company_id?: string;
  user_id?: string;
}
