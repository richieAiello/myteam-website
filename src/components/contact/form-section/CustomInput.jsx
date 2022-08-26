import { Field, ErrorMessage } from 'formik';

const CustomInput = ({
  name,
  label,
  type,
  placeholder,
  as,
  className,
}) => {
  return (
    <div className="form__wrapper">
      <label htmlFor={name} className="ninja">
        {label}
      </label>
      <Field
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        as={as}
      />
      <ErrorMessage name={name}>
        {msg => <div className="form__error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default CustomInput;
