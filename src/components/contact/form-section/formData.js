import * as Yup from 'yup';

export const initialValues = {
  name: '',
  email: '',
  company: '',
  title: '',
  message: '',
};

export const validation = Yup.object({
  name: Yup.string()
    .matches(/^[A-z][A-z ,.'-]+$/, 'Letters only')
    .max(20, 'Must be 20 characters or less.')
    .required('Required!'),
  email: Yup.string().email('Invalid email').required('Required!'),
  company: Yup.string()
    .max(20, 'Must be 20 characters or less.')
    .required('Required!'),
  title: Yup.string()
    .max(20, 'Must be 20 characters or less.')
    .required('Required!'),
  message: Yup.string()
    .max(250, 'Must be 250 characters or less.')
    .required('Required!'),
});
