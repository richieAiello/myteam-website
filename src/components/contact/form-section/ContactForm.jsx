import { Formik, Form } from 'formik';
import { initialValues, validation } from './formData';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';
import SubmitBtn from './SubmitBtn';

const ContactForm = ({ setState }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      // On successful submit clear form values
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setState(false);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form">
        <CustomInput
          label="Please provide your full name."
          name="name"
          type="text"
          placeholder="Name"
        />
        <CustomInput
          label="Please provide a valid email."
          name="email"
          type="email"
          placeholder="Email Address"
        />
        <CustomInput
          label="Please provide your company's name."
          name="company"
          type="text"
          placeholder="Company Name"
        />
        <CustomInput
          label="Please provide your career title."
          name="title"
          type="text"
          placeholder="Title"
        />
        <CustomTextArea
          label="Please provide a message to us."
          name="message"
          rows="3"
          placeholder="Message"
        />
        <SubmitBtn />
      </Form>
    </Formik>
  );
};

export default ContactForm;
