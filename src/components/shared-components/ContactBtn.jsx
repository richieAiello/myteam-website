import { Link } from 'react-router-dom';
import clsx from 'clsx';

const ContactBtn = ({ light, dark, onClick }) => {
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className={`
        bg-transparent border-2 border-solid rounded-3xl 
        pt-[0.5625rem] pb-[0.6875rem] px-8 duration-300 inline-block
        ${clsx({
          'border-white': light,
          'text-white': light,
          'hover:bg-white': light,
          'focus:bg-white': light,
          'hover:text-darkest-green': light,
          'focus:text-darkest-green': light,
          'border-state-green': dark,
          'text-state-green': dark,
          'hover:bg-state-green': dark,
          'focus:bg-state-green': dark,
          'hover:text-white': dark,
          'focus:text-white': dark,
        })} 
      `}
    >
      contact us
    </Link>
  );
};

export default ContactBtn;
