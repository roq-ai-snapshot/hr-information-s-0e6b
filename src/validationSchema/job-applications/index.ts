import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  applicant_name: yup.string().required(),
  position_applied: yup.string().required(),
  resume: yup.string().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
