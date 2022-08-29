import { NavLink } from 'react-router-dom';
import ContactBtn from '../shared-components/ContactBtn';

const NavMenu = ({ className, onClick }) => {
  return (
    <div
      className={`
        h-screen w-[min(100%,255px)] absolute top-0 right-0 z-20 bg-police-blue text-white
        bg-[url(./assets/bg-patterns/nav.svg)] bg-[bottom_0_right_-100px] bg-no-repeat
        ${className}
        md:h-max md:w-full md:static md:bg-transparent md:block md:bg-none
      `}
    >
      <div className="ml-12 h-max mt-28 md:mt-0 md:flex md:items-center md:justify-between lg:ml-20">
        <ul className="md:flex">
          <li className="mb-6 md:mb-0 md:mr-10">
            <NavLink to="/" onClick={onClick} className="link">
              home
            </NavLink>
          </li>
          <li className="mb-[2.25rem] md:mb-0">
            <NavLink to="/about" onClick={onClick} className="link">
              about
            </NavLink>
          </li>
        </ul>
        <ContactBtn light onClick={onClick} />
      </div>
    </div>
  );
};

export default NavMenu;
