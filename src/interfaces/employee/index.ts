import { PayrollInterface } from 'interfaces/payroll';
import { VacationInterface } from 'interfaces/vacation';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  position: string;
  salary: number;
  hire_date: any;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  vacation?: VacationInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    payroll?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  position?: string;
  company_id?: string;
  user_id?: string;
}
