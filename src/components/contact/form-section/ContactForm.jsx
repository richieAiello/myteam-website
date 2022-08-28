import { Formik, Form } from 'formik';
import { initialValues, validation } from './formData';
import CustomInput from './CustomInput';

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log('success');
        }, 400);
      }}
    >
      {props => (
        <Form className="form">
          <CustomInput
            label="Please provide your full name."
            name="name"
            type="text"
            placeholder="Name"
            className="form__input"
          />
          <CustomInput
            label="Please provide a valid email."
            name="email"
            type="email"
            placeholder="Email Address"
            className="form__input"
          />
          <CustomInput
            label="Please provide your company's name."
            name="company"
            type="text"
            placeholder="Company Name"
            className="form__input"
          />
          <CustomInput
            label="Please provide your career title."
            name="title"
            type="text"
            placeholder="Title"
            className="form__input"
          />
          <CustomInput
            label="Please provide a message to us."
            name="message"
            type="textarea"
            placeholder="Message"
            className="form__input--message"
          />
          <button
            type="submit"
            className="text-jungle-green text-lg bg-white rounded-3xl border-2 border-white border-solid
            py-2 px-[1.875rem] duration-300 inline-block w-max
            hover:bg-transparent hover:text-white
            focus:bg-transparent focus:text-white"
          >
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
