import { NavLink } from 'react-router-dom';
import ContactBtn from '../shared-components/ContactBtn';

const NavMenu = props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="about">about</NavLink>
        </li>
      </ul>
      <ContactBtn light />
    </div>
  );
};

export default NavMenu;
