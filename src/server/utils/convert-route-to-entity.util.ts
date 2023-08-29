const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  'job-applications': 'job_application',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
