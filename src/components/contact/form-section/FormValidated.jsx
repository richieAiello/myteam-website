import { Link } from 'react-router-dom';

const FormValidated = ({ setState }) => {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-50 bg-[rgba(0,0,0,60%)]
      flex items-center justify-center text-white px-4"
    >
      <div
        className="bg-police-blue h-1/2 w-[min(100%,375px)] rounded-lg flex flex-col items-center justify-center text-center p-12
        md:w-[573px]"
      >
        <p className="text-xl mb-4">Your message has been sent!</p>
        <p className="text-xl mb-6">
          We will contact you with more information as soon as
          possible!
        </p>
        <ul className="flex mb-8 text-2xl">
          <li>
            <Link to="/" className="mr-6 link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              about
            </Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setState(true)}
          className="text-xl bg-white border-2 border-solid border-white rounded-3xl 
          text-police-blue pt-[0.5625rem] pb-[0.6875rem] px-8 duration-300 inline-block
          hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white"
        >
          contact us again!
        </button>
      </div>
    </div>
  );
};

export default FormValidated;
